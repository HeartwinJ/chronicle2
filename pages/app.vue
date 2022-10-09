<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div
    class="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-gray-900"
  >
    <Header />
  </div>
</template>
