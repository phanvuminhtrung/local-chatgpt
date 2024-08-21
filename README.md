# ChatGPT Demo Project

## Author
Troy Phan - https://troyphan.com/

## Project Structure

- **index.html**: The main frontend file using Vue.js to interact with the ChatGPT API via your backend.
- **files/**: Directory containing necessary frontend libraries (Axios, TailwindCSS, Vue.js).
- **server.js**: Node.js backend to securely handle requests to the OpenAI API.
- **.env**: Environment file storing sensitive API keys and endpoint URLs.

## Setup Instructions
1. **Install Dependencies**:
    ```bash
    npm install
    ```

2. **Rename `.env.default` File**:
    - Rename to `.env` file in the root directory with your OpenAI API key:
      ```env
      CHAT_GPT_KEY=your-chatgpt-api-key
      OPEN_AI_ENDPOINT=https://api.openai.com/v1
      ```

3. **Run the Backend**:
    ```bash
    node server.js
    ```

4. **Access the Application**:
    - Serve your `index.html` using a simple HTTP server or integrate with your backend:
    - Open `http://localhost:8000` in your browser to start using the ChatGPT demo.

## Usage
- Type your message into the input field and press "Send".
- The backend will process your request and return a response from the ChatGPT model.