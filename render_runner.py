import os, sys, subprocess, shutil, argparse

def run_render(project_dir, voice_path, out_mp4, duration=None, music="auto", music_level=0.15, resolution="1080p", skip_frames=False):
    project_dir = os.path.abspath(project_dir)
    voice_path = os.path.abspath(voice_path)
    out_mp4 = os.path.abspath(out_mp4)
    HERE = os.path.dirname(os.path.abspath(__file__))
    engine_dir = os.path.join(HERE, ".agents", "skills", "crayon-capital-explainer", "engine")
    sfx_dir = os.path.join(engine_dir, "sfx")
    fps = 30

    if duration is None:
        cmd = ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", voice_path]
        duration = float(subprocess.check_output(cmd, text=True).strip())
    else:
        duration = float(duration)

    num_frames = round(duration * fps)
    print(f"=== Rendering {duration:.2f}s ({num_frames} frames) at {fps} fps ({resolution}) ===", flush=True)

    frames_dir = os.path.join(project_dir, "frames")
    os.makedirs(frames_dir, exist_ok=True)

    # 1. Render frames via render.mjs (unless skipped in distributed/sharded workflow)
    if not skip_frames:
        print("Step 1/4: Rendering Canvas2D frames in parallel...", flush=True)
        cmd_render = ["node", "render.mjs", project_dir, str(num_frames)]
        proc = subprocess.Popen(cmd_render, cwd=engine_dir, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, bufsize=1)
        for line in iter(proc.stdout.readline, ''):
            print(line, end='', flush=True)
        proc.wait()
        if proc.returncode != 0:
            print(f"Error: render.mjs exited with code {proc.returncode}", flush=True)
            sys.exit(proc.returncode)
        print("Frames rendered successfully.", flush=True)
    else:
        print("Step 1/4: Frames rendering skipped (using pre-downloaded matrix shard frames).", flush=True)

    # 2. Audio mix: voice + SFX cues + music bed
    print("Step 2/4: Mixing audio with sfx.py...", flush=True)
    mix_wav = os.path.join(project_dir, "work_mix.wav")
    cues_json = os.path.join(project_dir, "cues.json")
    cmd_mix = [
        "python", "sfx.py", "mix",
        "--cues", cues_json,
        "--voice", voice_path,
        "--dur", str(duration),
        "--music", music,
        "--sfxdir", sfx_dir,
        "--music-level", str(music_level),
        "--out", mix_wav
    ]
    proc_mix = subprocess.Popen(cmd_mix, cwd=engine_dir, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, bufsize=1)
    for line in iter(proc_mix.stdout.readline, ''):
        print(line, end='', flush=True)
    proc_mix.wait()
    if proc_mix.returncode != 0:
        print(f"Error: sfx.py exited with code {proc_mix.returncode}", flush=True)
        sys.exit(proc_mix.returncode)

    # 3. Audio Loudness Normalization
    print("Step 3/4: Normalizing audio with ffmpeg...", flush=True)
    norm_wav = os.path.join(project_dir, "work_audio_norm.wav")
    cmd_norm = [
        "ffmpeg", "-v", "error", "-y",
        "-i", mix_wav,
        "-t", str(duration),
        "-af", "loudnorm=I=-14:TP=-1:LRA=11,aresample=48000",
        "-ac", "2",
        norm_wav
    ]
    subprocess.check_call(cmd_norm)

    # 4. Video Muxing (H.264 + AAC) - 2160p (4K UHD) or 1080p Full HD
    print(f"Step 4/4: Muxing MP4 video at {resolution}...", flush=True)
    frames_pattern = os.path.join(frames_dir, "%05d.jpg")
    os.makedirs(os.path.dirname(out_mp4), exist_ok=True)

    scale_args = []
    if resolution == "2160p":
        scale_args = ["-vf", "scale=3840:2160:flags=lanczos"]
        crf_val = "17"
    else:
        crf_val = "18"

    cmd_mux = [
        "ffmpeg", "-v", "error", "-y",
        "-framerate", str(fps),
        "-i", frames_pattern,
        "-i", norm_wav,
        "-map", "0:v", "-map", "1:a"
    ] + scale_args + [
        "-c:v", "libx264", "-preset", "veryfast", "-crf", crf_val,
        "-pix_fmt", "yuv420p",
        "-c:a", "aac", "-b:a", "192k", "-ar", "48000",
        "-shortest", "-movflags", "+faststart",
        out_mp4
    ]
    subprocess.check_call(cmd_mux)
    print(f"=== SUCCESS: WROTE {out_mp4} ({resolution}) ===", flush=True)

    # Probe final output
    cmd_probe = ["ffprobe", "-v", "error", "-show_entries", "stream=codec_name,width,height,r_frame_rate:format=duration", "-of", "default=nw=1", out_mp4]
    probe_out = subprocess.check_output(cmd_probe, text=True)
    print(probe_out.strip(), flush=True)

    # Clean up frames directory after successful render to free up disk space
    if os.path.exists(out_mp4) and os.path.getsize(out_mp4) > 1000000:
        print("Cleaning up frames directory to free disk space...", flush=True)
        shutil.rmtree(frames_dir, ignore_errors=True)
        print("Frames directory cleaned up.", flush=True)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--proj", required=True)
    parser.add_argument("--voice", required=True)
    parser.add_argument("--out", required=True)
    parser.add_argument("--dur", type=float, default=None)
    parser.add_argument("--music", default="auto")
    parser.add_argument("--music-level", type=float, default=0.15)
    parser.add_argument("--resolution", default="2160p", choices=["1080p", "2160p"])
    parser.add_argument("--skip-frames", action="store_true")
    args = parser.parse_args()

    run_render(args.proj, args.voice, args.out, duration=args.dur, music=args.music, music_level=args.music_level, resolution=args.resolution, skip_frames=args.skip_frames)
