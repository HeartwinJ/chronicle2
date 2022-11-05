<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useAuthStore } from "~~/stores/authStore";
import { useDataStore } from "~~/stores/dataStore";

definePageMeta({
  middleware: "auth",
});

const appData = useDataStore();
const auth = useAuthStore();

const isLoading = ref(true);

const categories = computed(() => appData.formattedEntriesList);

onMounted(async () => {
  await auth.getUserData();
  await appData.getEntriesList();
  // await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve("foo");
  //   }, 2000);
  // });
  isLoading.value = false;
});
</script>

<template>
  <div>
    <Header showSearch showNew />
    <LoadingScreen v-if="isLoading" />
    <div class="space-y-8 p-4" v-else>
      <Category
        v-for="category of categories"
        :label="category.label"
        :color="category.color"
      >
        <Entry v-for="entry of category.entries" :title="entry.title" />
      </Category>
    </div>
  </div>
</template>
