import OpenAI from "openai";
import dotenv from 'dotenv';


dotenv.config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
})

const messages = [
    {
        role: 'system',
        content: 'You are the one who knows everything and want to help people to learn.',
    },
    {
        role: 'user',
        content: 'Who is James Clear from atomic habits?',
    }
]

const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: messages,
})

console.log('response', response);