import type { LayoutServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const getDomains = async () => {
		const response = await fetch('/api/values');
		const data = (await response.json()) as string[];
		return data;
	};

	return {
		domains: await getDomains()
	};
}) satisfies LayoutServerLoad;
