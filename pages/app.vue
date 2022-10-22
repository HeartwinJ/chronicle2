<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div>
    <div class="flex justify-start px-8">
      <button class="px-4 py-2 border rounded-lg">New Entry</button>
    </div>
  </div>
</template>
