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
    isAuthenticated: false,
    user: {} as User,
  }),
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
        this.isAuthenticated = true;
        const appData = useDataStore();
        const { categories, entries, ...user } = res.user!;
        this.setUser(user);
        appData.setCategories(categories);
        appData.setEntries(entries);
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
