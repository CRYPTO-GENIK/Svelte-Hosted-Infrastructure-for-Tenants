<script lang="ts">
  import { login } from './login';
  let email = '';
  let password = '';
  let error: string | null = null;

  async function submit() {
    error = null;
    try {
      await login(email, password);
    } catch (e) {
      error = e.message;
    }
  }
</script>

<form class="max-w-sm m-auto p-4" on:submit|preventDefault={submit}>
  <div class="mb-2">
    <label class="block text-sm font-bold mb-1">Email</label>
    <input class="border p-2 w-full" type="email" bind:value={email} />
  </div>
  <div class="mb-2">
    <label class="block text-sm font-bold mb-1">Password</label>
    <input class="border p-2 w-full" type="password" bind:value={password} />
  </div>
  {#if error}<p class="text-red-500 text-sm">{error}</p>{/if}
  <button class="mt-2 bg-blue-500 text-white px-4 py-2 rounded" type="submit">Login</button>
</form>
