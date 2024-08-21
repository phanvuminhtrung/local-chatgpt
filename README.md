# Running the Chat Application

This guide will help you run the chat application contained in the `index.html` file.

## Prerequisites

Ensure you have the following:

- A modern web browser (Chrome, Firefox, Safari, etc.)
- A local web server such as Node's http-server. Or you can use Live Server feature from VSCode
- An API key from OpenAI for API access. 

## Start the app using OpenAI API

1. **Set up the API key**

Open the `index.html` file and locate the following line:

```html
const chatGPTKey = 'sk-'; // Paste the API key here
```

Replace `'sk-*****'` with your actual OpenAI GPT-3 API key.

2. **Start the local server**

Navigate to the directory containing `index.html` and start your local server. 

For example, if you're using Python's SimpleHTTPServer, you can start it with the command:

```bash
python -m SimpleHTTPServer
```

If you're using Node's http-server, you can start it with the command:

```bash
http-server
```

3. **Access the application**

Open your web browser and navigate to localhost on the port your server is running. For example, if your server is running on port 8000, you would navigate to `http://localhost:8000`.

4. **Interact with the chat application**

You should now see the chat interface in your browser. You can type messages into the input field and press "Send" to interact with the chatbot.

Please note that this is a simple setup meant for local development and testing. 

It is not suitable for a production environment.