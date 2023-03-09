import { openAI } from '$lib/openai/openai';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const argot = data.get('argot');

		const completion = await openAI.createCompletion({
			model: 'text-davinci-003',
			prompt: `What does "${argot}" mean?\n\n`
		});

		return {
			data: completion.data.choices[0].text
		};
	}
};
