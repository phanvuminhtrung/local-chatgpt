const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { prompt } = JSON.parse(event.body);

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

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: response.data.choices[0].message.content
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch response from OpenAI API' }),
    };
  }
};
