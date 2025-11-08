# app.py
import os
from pathlib import Path
from flask import Flask, send_file, abort

BASE_DIR = Path(__file__).resolve().parent
app = Flask(__name__, static_folder=None)  # disable default static folder

def safe_path_in_base(path: Path) -> bool:
    """Return True if path is inside BASE_DIR (prevents directory traversal)."""
    try:
        path.resolve().relative_to(BASE_DIR.resolve())
        return True
    except Exception:
        return False

def try_send(path: Path):
    """Send a file if exists and inside base dir, otherwise return None."""
    if not path.exists() or not path.is_file():
        return None
    if not safe_path_in_base(path):
        return None
    return send_file(str(path))

@app.route("/", defaults={"req_path": ""}, methods=["GET", "POST"])
@app.route("/<path:req_path>", methods=["GET", "POST"])
def catch_all(req_path: str):
    """
    Serve files and index.html in subfolders for both GET and POST requests:
    - If a folder with the requested path contains index.html -> serve it
    - Else if requested path itself points to a file -> serve it
    - Else fallback to root index.html
    - Else 404
    """
    req_path = req_path.strip("/")

    # 1) Directory index.html
    if req_path:
        dir_index = BASE_DIR / req_path / "index.html"
        resp = try_send(dir_index)
        if resp:
            return resp

    # 2) Direct file
    file_candidate = BASE_DIR / req_path
    resp = try_send(file_candidate)
    if resp:
        return resp

    # 3) Root index.html
    root_index = BASE_DIR / "index.html"
    resp = try_send(root_index)
    if resp:
        return resp

    # 4) Not found
    abort(404)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
