<script setup lang="ts">
import { useAuthStore } from "~~/stores/authStore";

const auth = useAuthStore();

function logout() {
  auth.logout();
}
</script>

<template>
  <div class="flex justify-between p-5 text-white">
    <div class="flex gap-4 items-center">
      <img src="~/assets/img/logo.svg" alt="logo" class="h-8 w-8" />
      <span class="uppercase tracking-widest text-lg">Chronicle</span>
    </div>
    <div>
      <button
        class="py-2 px-4 border border-gray-300 rounded-lg hover:text-gray-300 hover:border-gray-400"
        @click="logout"
      >
        Logout
      </button>
    </div>
  </div>
</template>
