<script setup lang="ts">
const formData = reactive({
  username: "",
  password: "",
});

function handleSubmit() {
  console.log(
    `Username: ${formData.username} | Password: ${formData.password}`
  );
  formData.username = "";
  formData.password = "";
}
</script>

<template>
  <div class="absolute inset-0 flex items-center justify-center">
    <div
      class="rounded-2xl backdrop-blur-sm bg-gray-300/20 shadow-lg p-8 max-w-md w-full"
    >
      <div class="flex justify-center items-center w-full">
        <img
          src="~/assets/img/logo.svg"
          alt="logo"
          class="h-24 w-24 animate-pulse"
        />
      </div>
      <div class="pt-16">
        <div class="space-y-2 text-gray-200">
          <div
            class="rounded-md border border-gray-400/25 px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-gray-400 bg-gray-400/10"
          >
            <label for="username" class="block text-xs font-medium"
              >Username</label
            >
            <input
              type="text"
              id="username"
              class="block w-full border-0 outline-none p-0 focus:ring-0 bg-transparent text-right text-xl selection:bg-gray-900/40 selection:text-gray-400"
              autocomplete="off"
              v-model="formData.username"
            />
          </div>
          <div
            class="rounded-md border border-gray-400/25 px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-gray-400 bg-gray-400/10"
          >
            <label for="password" class="block text-xs font-medium"
              >Password</label
            >
            <input
              type="password"
              id="password"
              class="block w-full border-0 outline-none p-0 focus:ring-0 bg-transparent text-right text-xl selection:bg-gray-900/40 selection:text-gray-400"
              autocomplete="off"
              v-model="formData.password"
            />
          </div>
        </div>
        <div class="mt-6 flex justify-center">
          <button
            class="py-2 px-6 bg-gray-400/30 rounded-lg text-gray-300 uppercase hover:bg-gray-400/40"
            @click="handleSubmit"
          >
            Unlock
          </button>
        </div>
      </div>
    </div>
  </div>
  <AnimatedBG />
</template>
