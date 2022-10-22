<script setup lang="ts">
import { PencilIcon, TrashIcon } from "vue-tabler-icons";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex items-center gap-4 rounded-lg bg-slate-400/20 p-4 text-slate-500"
  >
    <div class="grow text-white">{{ props.title }}</div>
    <div class="text-sm">last updated</div>
    <div class="ml-4 flex gap-4">
      <button class="hover:text-yellow-400"><PencilIcon /></button>
      <button class="hover:text-red-400"><TrashIcon /></button>
    </div>
  </div>
</template>
