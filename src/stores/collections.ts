import { defineStore } from 'pinia';
import { useSharedStore } from '@/stores/shared';
import { http as axios } from '@/services/http-client';
import type { Glasses } from '@/types/index';

type CollectionMenu = {
  id: number;
  name: string;
  configuration_name: string;
};

type CollectionMenuResponse = {
  collections: CollectionMenu[];
};

// type MetaData = {
//   total_count: number;
// };

type GlassesResponse = {
  glasses: Glasses[];
  // meta: MetaData;
};

type Store = {
  collectionMenu: CollectionMenu[];
  glasses: Glasses[];
  glassesCount: number;
};

export const useCollectionsStore = defineStore('collections', {
  state: (): Store => ({
    collectionMenu: [],
    glasses: [],
    glassesCount: 0,
  }),

  getters: {},

  actions: {
    async getCollectionMenu() {
      const store = useSharedStore();
      const endpoint = 'sales_channels/website/collections';

      // store.loading();

      try {
        const { data }: { data: CollectionMenuResponse } = await axios.get(endpoint);

        this.collectionMenu = data.collections;

        if (store.error) {
          store.clearError();
        }
      } catch (error) {
        this.collectionMenu = [];

        store.setError(error);
      }
      // finally {
      //   store.done();
      // }
    },

    // eslint-disable-next-line
    async getCollections(slug: string, queryParams?: any) {
      const store = useSharedStore();
      const endpoint = `sales_channels/website/collections/${slug}/glasses`;

      try {
        const { data }: { data: GlassesResponse } = await axios.get(endpoint, {
          params: queryParams,
        });

        this.glasses = data.glasses;
        this.glassesCount = data.glasses.length;

        if (store.error) {
          store.clearError();
        }
      } catch (error) {
        this.glasses = [];
        this.glassesCount = 0;

        store.setError(error);
      } finally {
        store.done();
      }
    },
  },
});
