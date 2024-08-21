# ChatBot

## Author
Troy Phan - [https://troyphan.com/](https://troyphan.com/)

## Project Structure

- **public/index.html**: The main frontend file using Vue.js to interact with the ChatGPT API via your backend.
- **public/files/**: Directory containing necessary frontend libraries (Axios, TailwindCSS, Vue.js).
- **netlify/functions/chat.js**: Netlify Function to handle requests securely to the OpenAI API.
- **.env**: Environment file storing sensitive API keys and endpoint URLs.
- **netlify.toml**: Configuration file for Netlify, defining build and development settings.

## Technologies Used

### 1. Frontend Technologies

- **HTML**: Used to structure the web page.
- **Vue.js**: A JavaScript framework for building the user interface, managing input, interaction, and state of the chatbot.
- **Tailwind CSS**: A utility-first CSS framework used for styling the user interface with predefined classes.
- **Axios**: A promise-based HTTP client used for making API requests from the frontend to the backend.

### 2. Backend Technologies

- **Node.js**: The JavaScript runtime environment for executing backend logic in Netlify Functions.
- **Netlify Functions**: Serverless functions for running backend code in response to HTTP requests.
- **Axios**: Also used on the backend to send requests to the OpenAI API.
- **dotenv**: A module for loading environment variables from a `.env` file into `process.env` for secure configuration.

### 3. Environment and Deployment

- **Netlify**: A platform for deploying static sites and serverless functions with continuous deployment support.
- **Netlify CLI**: A command-line tool for developing and testing the Netlify deployment locally.
- **Environment Variables (.env)**: Used to store sensitive data such as API keys, ensuring they are not hardcoded into the codebase.

### 4. Version Control

- **Git**: A distributed version control system for managing source code history and collaboration.
- **GitHub**: A platform for hosting Git repositories, supporting collaboration, version control, and integration with deployment services like Netlify.

## Setup Instructions

### 1. **Install Dependencies**
   Ensure you have Node.js installed, then run:
    ```bash
    npm install
    ```

### 2. **Rename `.env.default` File**
   - Rename `.env.default` to `.env` in the root directory and fill it with your OpenAI API key:
     ```env
     CHAT_GPT_KEY=your-chatgpt-api-key
     OPEN_AI_ENDPOINT=https://api.openai.com/v1
     ```

### 3. **Run the Project Locally**
   Use Netlify CLI to simulate the environment locally:
    ```bash
    netlify dev
    ```
   - This command serves your static files and Netlify Functions locally.

### 4. **Access the Application**
   - After running `netlify dev`, open `http://localhost:8888` in your browser to start using the ChatGPT demo.

## Usage
- Type your message into the input field and press "Send".
- The frontend will send your input to the backend, which processes the request using the ChatGPT API and returns a response.

## Deployment
- Push your code to a GitHub repository and link it to your Netlify project for continuous deployment.
- Make sure your environment variables are set in the Netlify dashboard for production use.