import { OPENAI_API_KEY } from '$env/static/private';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
	apiKey: OPENAI_API_KEY
});

export const openAI = new OpenAIApi(configuration);
