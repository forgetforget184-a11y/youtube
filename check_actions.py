import urllib.request
import json

url = 'https://api.github.com/repos/forgetforget184-a11y/youtube/actions/runs?per_page=5'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode())
        runs = data.get('workflow_runs', [])
        for r in runs:
            print(f"ID: {r['id']} | Status: {r['status']} | Conclusion: {r['conclusion']} | SHA: {r['head_sha'][:7]} | Created: {r['created_at']}")
            # Check jobs
            jobs_url = r['jobs_url']
            j_req = urllib.request.Request(jobs_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(j_req) as j_resp:
                j_data = json.loads(j_resp.read().decode())
                for job in j_data.get('jobs', []):
                    print(f"  Job: {job['name']} | Status: {job['status']} | Conclusion: {job['conclusion']}")
                    for step in job.get('steps', []):
                        if step['status'] == 'in_progress' or step['conclusion'] == 'failure':
                            print(f"    Step: {step['name']} | Status: {step['status']} | Conclusion: {step['conclusion']}")
except Exception as e:
    print('Error:', e)
