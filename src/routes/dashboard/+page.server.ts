import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { pb } from '$lib/pocketbase';

export const load: PageServerLoad = async () => {
  if (!pb.authStore.isValid) {
    throw redirect(303, '/login');
  }
  return { user: structuredClone(pb.authStore.model) };
};
