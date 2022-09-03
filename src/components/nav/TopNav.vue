<template>
  <nav class="top-nav">
    <MenuView :menu-items="menuItems" />

    <div class="main">
      <img src="@/assets/images/logo.ico" alt="Bloombloom Logo" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import MenuView from '@/components/menu/MenuView.vue';
import type { MenuItems } from '@/types/index';
import { useCollectionsStore } from '@/stores/collections';
import groupBy from 'lodash.groupby';

const store = useCollectionsStore();
store.getCollectionMenu();

const collections = computed(() => store.collectionMenu);
const grouped = computed(() =>
  groupBy(collections.value, (collection) => collection.name.split(' ')[1])
);
const collectionMenu = computed(() => {
  const formattedMenu = Object.entries(grouped.value).map(([key, values]) => {
    return {
      name: key.toLowerCase(),
      children: values.map((value) => ({
        name: value.name.split(' ')[0],
        path: value.configuration_name,
      })),
    };
  });

  return formattedMenu.sort((a, b) => (b.name > a.name ? 1 : a.name > b.name ? -1 : 0));
});

// const menuItems = reactive<MenuItems[]>([
const menuItems = computed<MenuItems[]>(() => [
  ...collectionMenu.value,
  {
    name: 'Home try on',
  },
  {
    name: 'Pair for Pair',
  },
]);
</script>

<style scoped>
.top-nav {
  display: flex;
  width: 100%;
  border: solid black;
  border-width: 1px 0;
}

.top-nav .main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.top-nav .main img {
  width: 32px;
  height: 32px;
  transform: translateX(-66px);
  filter: sepia(100%) hue-rotate(190deg) saturate(500%) contrast(2.8) brightness(200%);
}
</style>
