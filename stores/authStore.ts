export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    authenticate({ username, password }) {
      if (username === "heartwin" && password === "123123") {
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
