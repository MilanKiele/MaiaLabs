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
    Translates an audio.
    """

    try:
        # Get data from the request
        data = request.get_json()

        # Check if 'voice' key exists in the received data
        if "voice" not in data:
            return jsonify({"error": "Voice data is required"}), 400

        voice_data = data["voice"]

        # Optional: Get format, if provided
        voice_format = data.get("format")

        # Get current language
        current_language = data.get("currentLanguage")

        # Get wanted languages
        wanted_languages = data.get("wantedLanguages")
        if wanted_languages is None:
            return jsonify({"error": "Wanted languages are required"}), 400

        # Your translation logic here
        # This is a placeholder response
        translation_result = {
            "voice_audio": voice_data,
            "voice_format": voice_format,
            "current_language": current_language,
            "wanted_languages": wanted_languages,
        }

        return jsonify(translation_result), 200

    except Exception as e:  # pylint: disable=broad-except
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
