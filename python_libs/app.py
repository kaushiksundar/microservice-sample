from flask import Flask, make_response
import tensorflow as tf
import json

app = Flask(__name__)

@app.route("/api/python_libs")
def hello():
    resp = make_response(json.dumps({"tensorflow_version": tf.__version__})) #here you could use make_response(render_template(...)) too
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE'
    resp.headers['Access-Control-Allow-Headers'] = 'Content-Type'

    return resp


if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0')