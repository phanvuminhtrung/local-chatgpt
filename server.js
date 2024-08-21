const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post(`${process.env.OPEN_AI_ENDPOINT}/chat/completions`, {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: "You're a helpful chat bot." },
        { role: 'user', content: prompt }
      ],
      max_tokens: 150,
      temperature: 0.9,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.CHAT_GPT_KEY}`,
      },
    });

    res.json(response.data.choices[0].message.content);
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    res.status(500).send('Something went wrong');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
