<script setup lang="ts">
const particleSize = "8cvmin";
const animationDuration = "600s";
const amount = 15;
</script>

<template>
  <div class="absolute inset-0 flex items-center justify-center">
    <div
      class="rounded-lg backdrop-blur-sm bg-white/20 p-4 border border-white/25 max-w-sm w-full"
    >
      <div class="text-2xl text-white">Login</div>
      <div class="py-6">
        <form autocomplete="off" class="space-y-2">
          <div
            class="rounded-md border border-white/25 px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-gray-300 bg-white/10"
          >
            <label for="username" class="block text-xs font-medium text-white"
              >Username</label
            >
            <input
              type="text"
              name="username"
              id="username"
              class="block w-full border-0 outline-none p-0 text-white focus:ring-0 sm:text-sm bg-transparent"
              autocomplete="off"
            />
          </div>
          <div
            class="rounded-md border border-white/25 px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-gray-300 bg-white/10"
          >
            <label for="password" class="block text-xs font-medium text-white"
              >Password</label
            >
            <input
              type="password"
              name="password"
              id="password"
              class="block w-full border-0 outline-none p-0 text-white focus:ring-0 sm:text-sm bg-transparent"
              autocomplete="off"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="background -z-10">
    <span v-for="i in 15" :key="i"></span>
  </div>
</template>

<style scoped>
@keyframes move {
  0% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
}
.background {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #0b1120;
  overflow: hidden;
}
.background span {
  width: 60vmin;
  height: 60vmin;
  border-radius: 60vmin;
  backface-visibility: hidden;
  position: absolute;
  animation-name: move;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.background span:nth-child(1) {
  color: #4338ca;
  top: 85%;
  left: 11%;
  animation-duration: 360s;
  animation-delay: -5s;
  transform-origin: -20vw, 24vh;
  box-shadow: 120vmin 0 5.472042694637555vmin currentColor;
}
.background span:nth-child(2) {
  color: #0281c2;
  top: 73%;
  left: 34%;
  animation-duration: 440s;
  animation-delay: -35s;
  transform-origin: -15vw, 15vh;
  box-shadow: 120vmin 0 5.3866171117966415vmin currentColor;
}
.background span:nth-child(3) {
  color: #2461e9;
  top: 81%;
  left: 54%;
  animation-duration: 100s;
  animation-delay: -15s;
  transform-origin: 3vw, -10vh;
  box-shadow: 120vmin 0 5.900105033375426vmin currentColor;
}
.background span:nth-child(4) {
  color: #be185d;
  top: 20%;
  left: 64%;
  animation-duration: 490s;
  animation-delay: -34s;
  transform-origin: 8vw, -5vh;
  box-shadow: 120vmin 0 5.554369577299803vmin currentColor;
}
.background span:nth-child(5) {
  color: #4338ca;
  top: 33%;
  left: 45%;
  animation-duration: 310s;
  animation-delay: -14s;
  transform-origin: -4vw, -20vh;
  box-shadow: 120vmin 0 5.062027863813486vmin currentColor;
}
.background span:nth-child(6) {
  color: #0281c2;
  top: 45%;
  left: 29%;
  animation-duration: 550s;
  animation-delay: -17s;
  transform-origin: 18vw, 12vh;
  box-shadow: 120vmin 0 5.869258752863114vmin currentColor;
}
.background span:nth-child(7) {
  color: #4338ca;
  top: 50%;
  left: 19%;
  animation-duration: 120s;
  animation-delay: -33s;
  transform-origin: -10vw, -3vh;
  box-shadow: 120vmin 0 5.449864059309284vmin currentColor;
}
.background span:nth-child(8) {
  color: #2461e9;
  top: 63%;
  left: 71%;
  animation-duration: 450s;
  animation-delay: -23s;
  transform-origin: 20vw, -15vh;
  box-shadow: 120vmin 0 5.952749896009907vmin currentColor;
}
.background span:nth-child(9) {
  color: #4338ca;
  top: 43%;
  left: 83%;
  animation-duration: 290s;
  animation-delay: -36s;
  transform-origin: 24vw, 18vh;
  box-shadow: 120vmin 0 5.707495048017951vmin currentColor;
}
.background span:nth-child(10) {
  color: #2461e9;
  top: 4%;
  left: 56%;
  animation-duration: 470s;
  animation-delay: -7s;
  transform-origin: -17vw, 18vh;
  box-shadow: 120vmin 0 5.992052752797707vmin currentColor;
}
.background span:nth-child(11) {
  color: #2461e9;
  top: 37%;
  left: 33%;
  animation-duration: 110s;
  animation-delay: -20s;
  transform-origin: -24vw, -17vh;
  box-shadow: 120vmin 0 5.627432553609592vmin currentColor;
}
.background span:nth-child(12) {
  color: #be185d;
  top: 45%;
  left: 56%;
  animation-duration: 200s;
  animation-delay: -15s;
  transform-origin: 16vw, -19vh;
  box-shadow: 120vmin 0 5.923510346840908vmin currentColor;
}
.background span:nth-child(13) {
  color: #be185d;
  top: 82%;
  left: 91%;
  animation-duration: 430s;
  animation-delay: -21s;
  transform-origin: -23vw, -8vh;
  box-shadow: 120vmin 0 5.529706432835551vmin currentColor;
}
.background span:nth-child(14) {
  color: #2461e9;
  top: 52%;
  left: 80%;
  animation-duration: 450s;
  animation-delay: -24s;
  transform-origin: -22vw, 4vh;
  box-shadow: 120vmin 0 5.6546969595964525vmin currentColor;
}
.background span:nth-child(15) {
  color: #4338ca;
  top: 46%;
  left: 44%;
  animation-duration: 520s;
  animation-delay: -30s;
  transform-origin: -13vw, -20vh;
  box-shadow: 120vmin 0 5.622362380109582vmin currentColor;
}
.background span:nth-child(16) {
  color: #be185d;
  top: 52%;
  left: 31%;
  animation-duration: 330s;
  animation-delay: -10s;
  transform-origin: -20vw, -3vh;
  box-shadow: 120vmin 0 5.3289617206492vmin currentColor;
}
.background span:nth-child(17) {
  color: #be185d;
  top: 83%;
  left: 49%;
  animation-duration: 460s;
  animation-delay: -32s;
  transform-origin: -23vw, -18vh;
  box-shadow: 120vmin 0 5.03810876159891vmin currentColor;
}
.background span:nth-child(18) {
  color: #0281c2;
  top: 35%;
  left: 85%;
  animation-duration: 550s;
  animation-delay: -30s;
  transform-origin: -22vw, -11vh;
  box-shadow: 120vmin 0 5.846906955157795vmin currentColor;
}
.background span:nth-child(19) {
  color: #0281c2;
  top: 50%;
  left: 32%;
  animation-duration: 580s;
  animation-delay: -24s;
  transform-origin: -8vw, -7vh;
  box-shadow: 120vmin 0 5.05662345441167vmin currentColor;
}
.background span:nth-child(20) {
  color: #2461e9;
  top: 69%;
  left: 55%;
  animation-duration: 140s;
  animation-delay: -29s;
  transform-origin: 3vw, 24vh;
  box-shadow: 120vmin 0 5.551020883864572vmin currentColor;
}
</style>
