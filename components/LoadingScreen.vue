<script setup lang="ts"></script>

<template>
  <div
    class="background-animate absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 via-black to-gray-900 text-white"
  >
    <img
      src="~/assets/img/logo.svg"
      alt="logo"
      class="h-16 w-16 animate-bounce md:h-32 md:w-32"
    />
  </div>
</template>

<style scoped>
.background-animate {
  background-size: 400%;

  -webkit-animation: AnimatedBackground 15s ease infinite;
  -moz-animation: AnimatedBackground 15s ease infinite;
  animation: AnimatedBackground 15s ease infinite;
}

@keyframes AnimatedBackground {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>
