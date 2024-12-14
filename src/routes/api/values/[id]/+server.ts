import { domainMap } from '$lib/data';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	const { id } = params;
	const result = domainMap.get(id);
	if (!result) {
		return new Response('Domain not found', { status: 404 });
	}
	return json(result);
};
