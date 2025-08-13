<script lang="ts">
  import { pb } from '$lib/pocketbase';
  import { onMount } from 'svelte';
  let user = pb.authStore.model;
  onMount(() => {
    user = pb.authStore.model;
  });
</script>

{#if user}
  <h1 class="text-2xl font-bold">Welcome {user?.email}</h1>
  <pre>{JSON.stringify(user, null, 2)}</pre>
{:else}
  <p>Not authenticated</p>
{/if}
