import * as jose from "jose";

interface User {
  id: string;
  username: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {} as User,
  }),
  actions: {
    isAuthenticated() {
      const cookie = useCookie("chronicle-auth-token");
      return cookie && cookie.value ? true : false;
    },
    setUser(_data) {
      this.user = { ..._data };
    },
    async authenticate({ username, password }) {
      const res = await $fetch("/api/auth/login", {
        method: "post",
        body: { username, password },
      });
      if (res.success) {
        this.getUserData();
        return true;
      }
      return false;
    },
    async getUserData() {
      const cookie = useCookie("chronicle-auth-token");
      if (!cookie || !cookie.value) {
        return;
      }

      const runtimeConfig = useRuntimeConfig();
      const { payload } = await jose.jwtVerify(
        cookie.value,
        new TextEncoder().encode(runtimeConfig.public.jwtSecret)
      );
      const { id, name, username, createdAt, updatedAt } = payload;
      this.setUser({ id, name, username, createdAt, updatedAt });
    },
    async logout() {
      const cookie = useCookie("chronicle-auth-token");
      cookie.value = null;
      this.$reset();
      await navigateTo("/login");
    },
  },
});
