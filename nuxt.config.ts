// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore"],
      },
    ],
  ],
  runtimeConfig: {
    public: {
      jwtSecret: process.env.JWT_TOKEN_SECRET,
    },
  },
});
