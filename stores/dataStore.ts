import { useAuthStore } from "./authStore";

interface Entry {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
}

interface Category {
  id: string;
  label: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  entries: Entry[];
}

export const useDataStore = defineStore("data", {
  state: () => ({
    entriesList: [],
  }),
  getters: {
    formattedEntriesList() {
      const data = this.entriesList.reduce((res, el) => {
        const { category, categoryId, ...entry } = el;
        const key = categoryId || "uncategorized";

        res[key] = {
          ...(key === "uncategorized"
            ? {
                label: "Uncategorized",
                color: "4b5563",
              }
            : category),
          entries: res[key] ? [...res[key].entries, entry] : [entry],
        };

        return res;
      }, {});

      return Object.values<Category>(data);
    },
  },
  actions: {
    async getEntriesList() {
      const auth = useAuthStore();
      const res = await $fetch(`/api/query/${auth.user.id}/entries`);
      this.entriesList = res.entriesList;
    },
  },
});
