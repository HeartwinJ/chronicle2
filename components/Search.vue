<script setup lang="ts">
import { SearchIcon, CircleXIcon } from "vue-tabler-icons";

const searchQuery = ref("");
</script>

<template>
  <div
    class="flex items-center rounded-lg bg-slate-600/30 px-2 text-slate-500 focus-within:ring-2 focus-within:ring-slate-500"
  >
    <SearchIcon />
    <input
      class="rounded-lg border-0 bg-transparent px-4 py-2 text-white outline-none placeholder:text-slate-500"
      placeholder="Search"
      v-model="searchQuery"
    />
    <button class="outline-none" @click="searchQuery = ''" v-if="searchQuery">
      <CircleXIcon />
    </button>
  </div>
</template>
