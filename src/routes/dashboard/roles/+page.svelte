<script lang="ts">
  import { pb } from '$lib/pocketbase';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { CORE_ROLES } from '$lib/roles';

  let user = pb.authStore.model;
  let roles: any[] = [];
  let name = '';

  onMount(async () => {
    if (!pb.authStore.isValid) {
      goto('/login');
      return;
    }
    user = pb.authStore.model;
    if (user.role !== CORE_ROLES.WHITE_LABEL) {
      goto('/dashboard');
      return;
    }
    await loadRoles();
  });

  async function loadRoles() {
    roles = await pb.collection('roles').getFullList({ filter: `owner="${user.id}"` });
  }

  async function createRole() {
    if (!name) return;
    await pb.collection('roles').create({ name, owner: user.id });
    name = '';
    await loadRoles();
  }
</script>

<h1 class="text-xl font-bold mb-4">Manage Package Roles</h1>
<div class="flex space-x-2 mb-4">
  <input class="border p-2 flex-1" placeholder="Role name" bind:value={name} />
  <button class="bg-blue-500 text-white px-4 py-2 rounded" on:click={createRole}>Add</button>
</div>
<ul class="list-disc pl-5">
  {#each roles as r}
    <li>{r.name}</li>
  {/each}
</ul>
