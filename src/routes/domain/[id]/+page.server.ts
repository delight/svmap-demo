import type { PageServerLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	const getDomains = async (domain: string) => {
		const response = await fetch(`/api/values/${domain}`);
		const data = (await response.json()) as string[];
		return data;
	};

	const converStringArrayToMapWithBooleanValues = (array: string[]) => {
		const map = new Map<string, boolean>();
		array.forEach((item) => {
			map.set(item, true);
		});
		return map;
	};
	return { values: converStringArrayToMapWithBooleanValues(await getDomains(params.id)) };
}) satisfies PageServerLoad;
