export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    async authenticate({ username, password }) {
      const res = await $fetch("/api/auth", {
        method: "post",
        body: { username, password },
      });
      if (res.success) {
        this.isAuthenticated = true;
        return true;
      }
      return false;
    },
    logout() {
      this.isAuthenticated = false;
      navigateTo("/login");
    },
  },
});
