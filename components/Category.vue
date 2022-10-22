<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-3">
      <div class="h-0.5 w-10 bg-slate-500"></div>
      <div class="flex items-center gap-3">
        <div
          class="rounded-full p-3"
          :style="{ 'background-color': `#${props.color}` }"
        ></div>
        <div class="text-xl">{{ props.label }}</div>
      </div>
      <div class="h-0.5 grow bg-slate-500"></div>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <slot />
    </div>
  </div>
</template>
