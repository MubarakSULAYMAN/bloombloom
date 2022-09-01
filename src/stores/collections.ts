import { defineStore } from 'pinia';
import { useSharedStore } from '@/stores/shared';
import { http as axios } from '@/services/http-client';

type Collection = {
  id: number;
  name: string;
  configuration_name: string;
};

type CollectionResponse = {
  collections: Collection[];
};

type Store = {
  collections: Collection[];
};

export const useCollectionsStore = defineStore('main', {
  state: (): Store => ({
    collections: [],
  }),

  getters: {},

  actions: {
    async getCollections() {
      const store = useSharedStore();
      const endpoint = 'user/v1/sales_channels/website/collections';

      store.loading();

      try {
        const { data }: { data: CollectionResponse } = await axios.get(endpoint);

        this.collections = data.collections;

        if (store.error) {
          store.clearError();
        }
      } catch (error) {
        this.collections = [];

        store.setError(error);
      } finally {
        store.done();
      }
    },
  },
});
