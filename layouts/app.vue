<template>
  <div
    class="background-animate absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-gray-900 text-white"
  >
    <Header showNew showSearch />
    <slot />
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
