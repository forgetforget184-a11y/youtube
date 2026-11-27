import os, sys, subprocess, shutil, argparse

def run_render(project_dir, voice_path, out_mp4, duration=None, music="auto", music_level=0.15):
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
    print(f"=== Rendering {duration:.2f}s ({num_frames} frames) at {fps} fps ===")

    # 1. Render frames via render.mjs (resumes existing frames if present)
    frames_dir = os.path.join(project_dir, "frames")
    os.makedirs(frames_dir, exist_ok=True)

    print("Step 1/4: Rendering Canvas2D frames...")
    cmd_render = ["node", "render.mjs", project_dir, str(num_frames)]
    res = subprocess.run(cmd_render, cwd=engine_dir, capture_output=True, text=True)
    if res.returncode != 0:
        print("Error in render.mjs:")
        print(res.stderr)
        print(res.stdout)
        sys.exit(res.returncode)
    print("Frames rendered successfully.")

    # 2. Audio mix: voice + SFX cues + music bed
    print("Step 2/4: Mixing audio with sfx.py...")
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
    res_mix = subprocess.run(cmd_mix, cwd=engine_dir, capture_output=True, text=True)
    if res_mix.returncode != 0:
        print("Error in sfx.py mix:")
        print(res_mix.stderr)
        print(res_mix.stdout)
        sys.exit(res_mix.returncode)
    print(res_mix.stdout.strip())

    # 3. Audio Loudness Normalization
    print("Step 3/4: Normalizing audio with ffmpeg...")
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

    # 4. Video Muxing (H.264 + AAC)
    print("Step 4/4: Muxing MP4 video...")
    frames_pattern = os.path.join(frames_dir, "%05d.jpg")
    os.makedirs(os.path.dirname(out_mp4), exist_ok=True)
    cmd_mux = [
        "ffmpeg", "-v", "error", "-y",
        "-framerate", str(fps),
        "-i", frames_pattern,
        "-i", norm_wav,
        "-map", "0:v", "-map", "1:a",
        "-c:v", "libx264", "-preset", "medium", "-crf", "18",
        "-pix_fmt", "yuv420p",
        "-c:a", "aac", "-b:a", "192k", "-ar", "48000",
        "-shortest", "-movflags", "+faststart",
        out_mp4
    ]
    subprocess.check_call(cmd_mux)
    print(f"=== SUCCESS: WROTE {out_mp4} ===")

    # Probe final output
    cmd_probe = ["ffprobe", "-v", "error", "-show_entries", "stream=codec_name,width,height,r_frame_rate:format=duration", "-of", "default=nw=1", out_mp4]
    probe_out = subprocess.check_output(cmd_probe, text=True)
    print(probe_out.strip())

    # Clean up frames directory after successful render to free up disk space
    if os.path.exists(out_mp4) and os.path.getsize(out_mp4) > 1000000:
        print("Cleaning up frames directory to free disk space...")
        shutil.rmtree(frames_dir, ignore_errors=True)
        print("Frames directory cleaned up.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--proj", required=True)
    parser.add_argument("--voice", required=True)
    parser.add_argument("--out", required=True)
    parser.add_argument("--dur", type=float, default=None)
    parser.add_argument("--music", default="auto")
    parser.add_argument("--music-level", type=float, default=0.15)
    args = parser.parse_args()

    run_render(args.proj, args.voice, args.out, duration=args.dur, music=args.music, music_level=args.music_level)
