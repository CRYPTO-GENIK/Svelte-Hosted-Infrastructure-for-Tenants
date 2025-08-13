<script lang="ts">
  import { pb } from '$lib/pocketbase';
  import { goto } from '$app/navigation';
  if (pb.authStore.isValid) {
    goto('/dashboard');
  } else {
    goto('/login');
  }
</script>
