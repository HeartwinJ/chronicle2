<script setup lang="ts">
import { PowerIcon, PlusIcon, SettingsIcon } from "vue-tabler-icons";
import { useAuthStore } from "~~/stores/authStore";

const props = defineProps({
  showSearch: {
    type: Boolean,
    default: false,
  },
  showNew: {
    type: Boolean,
    default: false,
  },
});

const auth = useAuthStore();

function newEntry() {}

function goToSettings() {}

function logout() {
  auth.logout();
}
</script>

<template>
  <div class="flex items-center justify-between p-5 text-white">
    <div class="flex items-center gap-4">
      <img src="~/assets/img/logo.svg" alt="logo" class="h-8 w-8" />
      <span class="text-lg uppercase tracking-widest">Chronicle</span>
    </div>
    <Search v-if="props.showSearch" />
    <div class="flex gap-1">
      <button
        class="rounded-lg py-2 px-4 hover:bg-green-600/30 hover:text-green-400"
        @click="newEntry"
        v-if="props.showNew"
      >
        <PlusIcon />
      </button>
      <button
        class="rounded-lg py-2 px-4 hover:bg-blue-600/30 hover:text-blue-400"
        @click="goToSettings"
      >
        <SettingsIcon />
      </button>
      <button
        class="rounded-lg py-2 px-4 hover:bg-red-600/30 hover:text-red-400"
        @click="logout"
      >
        <PowerIcon />
      </button>
    </div>
  </div>
</template>
