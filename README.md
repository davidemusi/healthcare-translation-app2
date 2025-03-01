# Healthcare Translation Web App

A web-based prototype for real-time multilingual translation between patients and healthcare providers. This application converts spoken input into text, provides a live transcript, and offers a translated version with audio playback. It leverages OpenAI's GPT-3.5-turbo model for translation and the Web Speech API for speech-to-text and text-to-speech functionality.

## Features
- **Voice-to-Text**: Convert spoken input into a text transcript using the Web Speech API.
- **Real-Time Translation**: Translate the transcript into multiple languages using OpenAI GPT-3.5-turbo.
- **Audio Playback**: Listen to the translated text using text-to-speech.
- **Mobile-First Design**: Responsive and optimized for both mobile and desktop use.

## Project Structure
healthcare-translation-app2/
├── venv/ # Virtual environment folder
├── app.py # Flask backend
├── requirements.txt # Python dependencies
├── templates/ # HTML templates
│ └── index.html # Main frontend page
├── static/ # Static files (CSS, JS)
│ ├── styles.css # Custom styles
│ └── script.js # Frontend logic
├── .env # Environment variables (e.g., OpenAI API key)
├── .gitignore # Files to ignore in version control
├── README.md # Documentation
└── vercel.json # Vercel deployment configuration


## Setup Instructions

### Prerequisites
- Python 3.11 or higher
- OpenAI API key (Get it from [OpenAI](https://platform.openai.com/))
- Git (for version control)

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/healthcare-translation-app2.git
cd healthcare-translation-app2

Step 2: Set Up a Virtual Environment
Create a virtual environment:
python -m venv venv
Activate the virtual environment:

On macOS/Linux:
source venv/bin/activate
On Windows:

venv\Scripts\activate
Step 3: Install Dependencies
Install the required Python packages:

pip install -r requirements.txt
Step 4: Set Up Environment Variables
Create a .env file in the root directory:

OPENAI_API_KEY=your-openai-api-key-here
Replace your-openai-api-key-here with your actual OpenAI API key.

Step 5: Run the Flask App
Start the Flask development server:

python app.py
Open your browser and go to:

http://127.0.0.1:5000
Deployment on Vercel
Step 1: Install Vercel CLI
If you haven't already, install the Vercel CLI:

npm install -g vercel
Step 2: Deploy the App
Log in to Vercel:

vercel login
Deploy the app:

vercel
Follow the prompts to complete the deployment.

Step 3: Set Environment Variables on Vercel
Go to your Vercel dashboard.

Navigate to your project’s settings.

Add the OPENAI_API_KEY environment variable with your OpenAI API key.

Usage
Open the app in your browser.

Click "Start Speaking" to begin voice input.

Select the target language from the dropdown.

View the original and translated transcripts.

Click "Speak" to listen to the translated text.

Technologies Used
Backend: Flask (Python)

Frontend: HTML, CSS, JavaScript

APIs:

OpenAI GPT-3.5-turbo (Translation)

Web Speech API (Speech-to-Text and Text-to-Speech)

Deployment: Vercel

Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch for your feature or bugfix.

Commit your changes.

Submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
OpenAI for providing the GPT-3.5-turbo model.

Flask and Vercel for making deployment seamless.

Web Speech API for enabling speech-to-text and text-to-speech functionality.

Contact
For questions or feedback, please reach out to:

GitHub: https://github.com/davidemusi