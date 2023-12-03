import OpenAI from 'openai';
import { GPT_API_KEY } from './contants';

const openai = new OpenAI({
  apiKey: GPT_API_KEY,// defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true, 
});

export default openai