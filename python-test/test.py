"""
Test environment for the Python API endpoints.
"""

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
# cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
cors = CORS(app)


@app.route("/")
def hello_world():
    """
    Returns a simple greeting message.
    """
    return "Milans Speaking AI API"


@app.route("/hello", methods=["POST"])
def say_hello():
    """
    Returns a personalized greeting message based on the provided name.
    """
    data = request.get_json()
    if "name" in data:
        return jsonify({"message": f"Hello, {data['name']}!"})
    else:
        return jsonify({"message": "Hello!"})


@app.route("/translate", methods=["POST"])
def translate():
    """
    Translates the received data.
    """
    print("Request received")
    data = request.get_json()
    if "voice" in data:
        try:
            return jsonify({"voice": "received"})
        except Exception as e:  # pylint: disable=broad-except
            error_message = str(e)
            return jsonify({"error": error_message}), 500


if __name__ == "__main__":
    app.run(debug=True)
