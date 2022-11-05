<script setup lang="ts">
import { useAuthStore } from "~~/stores/authStore";

definePageMeta({ layout: "login" });

const auth = useAuthStore();
const formData = reactive({
  username: "",
  password: "",
});

if (auth.isAuthenticated) {
  navigateTo("/");
}

async function handleSubmit() {
  if (await auth.authenticate(formData)) {
    navigateTo("/");
  } else {
    console.warn("Invalid credentials");
  }
  formData.username = "";
  formData.password = "";
}
</script>

<template>
  <div class="absolute inset-0 flex items-center justify-center">
    <div
      class="w-full max-w-md rounded-2xl bg-gray-300/20 p-8 shadow-lg backdrop-blur-sm"
    >
      <div class="flex w-full items-center justify-center">
        <img
          src="~/assets/img/logo.svg"
          alt="logo"
          class="h-24 w-24 animate-pulse"
        />
      </div>
      <div class="pt-16">
        <form class="text-gray-200" @submit.prevent="handleSubmit">
          <div
            class="rounded-md border border-gray-400/25 bg-gray-400/10 px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-gray-400"
          >
            <label for="username" class="block text-xs font-medium"
              >Username</label
            >
            <input
              type="text"
              id="username"
              class="block w-full border-0 bg-transparent p-0 text-right text-xl outline-none selection:bg-gray-900/40 selection:text-gray-400 focus:ring-0"
              autocomplete="off"
              v-model="formData.username"
            />
          </div>
          <div
            class="mt-2 rounded-md border border-gray-400/25 bg-gray-400/10 px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-gray-400"
          >
            <label for="password" class="block text-xs font-medium"
              >Password</label
            >
            <input
              type="password"
              id="password"
              class="block w-full border-0 bg-transparent p-0 text-right text-xl outline-none selection:bg-gray-900/40 selection:text-gray-400 focus:ring-0"
              autocomplete="off"
              v-model="formData.password"
            />
          </div>
          <div class="mt-12 flex justify-center">
            <button
              type="submit"
              class="rounded-lg bg-gray-400/30 py-2 px-6 uppercase text-gray-300 hover:bg-gray-400/40"
            >
              Unlock
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
