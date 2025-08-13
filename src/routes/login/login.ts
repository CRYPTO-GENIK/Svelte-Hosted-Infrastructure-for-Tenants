import { pb } from '$lib/pocketbase';
import { goto } from '$app/navigation';

export async function login(email: string, password: string) {
  await pb.collection('users').authWithPassword(email, password);
  goto('/dashboard');
}
