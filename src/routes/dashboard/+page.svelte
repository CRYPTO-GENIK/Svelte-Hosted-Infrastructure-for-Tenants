<script lang="ts">
  import { pb } from '$lib/pocketbase';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { Role, hasRole } from '$lib/roles';
  let user = pb.authStore.model;

  onMount(() => {
    if (!pb.authStore.isValid) {
      goto('/login');
      return;
    }
    user = pb.authStore.model;
  });

  function logout() {
    pb.authStore.clear();
    goto('/login');
  }
</script>

{#if user}
  <h1 class="text-2xl font-bold">Welcome {user?.email}</h1>
  <p class="mt-2">Role: {user?.role}</p>
  <button class="mt-4 bg-gray-500 text-white px-4 py-2 rounded" on:click={logout}>
    Logout
  </button>
  {#if hasRole(user.role, Role.MASTER)}
    <p class="mt-4">Master admin panel</p>
  {:else if hasRole(user.role, Role.WHITE_LABEL)}
    <p class="mt-4">White-label partner dashboard</p>
  {:else}
    <p class="mt-4">End-user dashboard</p>
  {/if}
{:else}
  <p>Not authenticated</p>
{/if}
