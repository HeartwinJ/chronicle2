<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useDataStore } from "~~/stores/dataStore";
definePageMeta({
  middleware: "auth",
  layout: "app",
});

const appData = useDataStore();

const categories = computed(() => appData.formattedEntriesList);

onMounted(async () => {
  await appData.getEntriesList();
});
</script>

<template>
  <div class="space-y-8 p-4">
    <Category
      v-for="category of categories"
      :label="category.label"
      :color="category.color"
    >
      <Entry v-for="entry of category.entries" :title="entry.title" />
    </Category>
  </div>
</template>
