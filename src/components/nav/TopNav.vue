<template>
  <nav class="top-nav">
    <MenuView :menu-items="menuItems" />

    <div class="main">
      <img src="@/assets/images/logo.ico" alt="Bloombloom Logo" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import MenuView from '@/components/menu/MenuView.vue';
import type { MenuItems } from '@/types/index';

const menuItems = reactive<MenuItems[]>([
  {
    name: 'spectacles',
    children: [
      {
        name: 'Women',
      },
      {
        name: 'Men',
      },
    ],
  },
  {
    name: 'sunglasses',
    children: [
      {
        name: 'Empty',
      },
    ],
  },
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
  position: relative;
  display: flex;
  width: 100%;
  border-bottom: 1px solid black;
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
