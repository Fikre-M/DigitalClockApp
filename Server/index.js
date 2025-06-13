const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: "YOUR_OPENAI_API_KEY", // Use environment variables in production!
});
const openai = new OpenAIApi(configuration);

app.post("/api/chat", async (req, res) => {
  const { prompt } = req.body;
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 100,
    });
    res.json({ response: completion.data.choices[0].text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
