const openAI = require('openai');
const axios = require("axios");
const Parser = require("../Utils/parse.js");


const dotenv = require("dotenv");
dotenv.config();

const openAi = new openAI({
  apiKey: process.env.API_KEY,
});



module.exports.plagarismCheck = async (req, res) => {
  try {
    console.log(req.file)
    const filePath = req.file.path;
    let fileText = '';

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    if (req.file.mimetype === 'application/pdf') {
      fileText = await Parser.extractPdfText(filePath);
    } else if (
      req.file.mimetype ===
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
      req.file.mimetype === 'application/msword'
    ) {
      fileText = await Parser.extractWordText(filePath);
    } else {
      return res.status(400).json({ error: 'Unsupported file type' });
    }

    const response = await openAi.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{role:'user', content:`Analyze this text for plagiarism: ${fileText}`}],
      max_tokens: 2000,
    });

    const plagiarismReport = response.choices[0].message.content.trim();
    res.json(plagiarismReport);
  } catch (error) {
if(error.code==="insufficient_quota")   
  {
   return res.status(400).json({ message: 'You exceeded your current quota, please check your plan and billing details.'})
  } 
  }
};
