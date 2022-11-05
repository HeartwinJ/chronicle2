import * as jose from "jose";
import { useDataStore } from "./dataStore";

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
  getters: {
    isAuthenticated() {
      const cookie = useCookie("chronicle-auth-token");
      return cookie && cookie.value ? true : false;
    },
  },
  actions: {
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
      const appData = useDataStore();
      const { payload } = await jose.jwtVerify(
        cookie.value,
        new TextEncoder().encode(runtimeConfig.public.jwtSecret)
      );
      const { id, name, username, createdAt, updatedAt, categories, entries } =
        payload;
      this.setUser({ id, name, username, createdAt, updatedAt });
      appData.setCategories(categories);
      appData.setEntries(entries);
    },
    logout() {
      const cookie = useCookie("chronicle-auth-token");
      cookie.value = null;
      this.$reset();
      navigateTo("/login");
    },
  },
});
