<script lang="ts">
  import { pb } from '$lib/pocketbase';
  import { goto } from '$app/navigation';
  import MasterPanel from './MasterPanel.svelte';
  import WhiteLabelPanel from './WhiteLabelPanel.svelte';
  import EndUserPanel from './EndUserPanel.svelte';
  import { panelName } from './panelName';
  export let data: { user: any };
  const { user } = data;
  const panels = { MasterPanel, WhiteLabelPanel, EndUserPanel } as const;
  const Panel = panels[panelName(user.role) as keyof typeof panels];

  function logout() {
    pb.authStore.clear();
    goto('/login');
  }
</script>

<h1 class="text-2xl font-bold">Welcome {user?.email}</h1>
<p class="mt-2">Role: {user?.role}</p>
<button class="mt-4 bg-gray-500 text-white px-4 py-2 rounded" on:click={logout}>
  Logout
</button>
<Panel />
