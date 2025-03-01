from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from openai import OpenAI, RateLimitError
from dotenv import load_dotenv  
import os

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)

# Initialize the OpenAI client with the API key from the environment
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/translate", methods=["POST"])
def translate():
    data = request.json
    text = data.get("text")
    target_language = data.get("target_language", "French")  # Default to French

    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",  
            messages=[
                {"role": "system", "content": f"Translate the following text to {target_language}:"},
                {"role": "user", "content": text},
            ],
        )
        translated_text = response.choices[0].message.content
        return jsonify({"translated_text": translated_text})
    except RateLimitError as e:
        # Handle rate limit errors
        return jsonify({"error": "Rate limit exceeded. Please try again later."}), 429
    except Exception as e:
        # Handle other errors
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    # app.run(debug=True)
    app.run()

