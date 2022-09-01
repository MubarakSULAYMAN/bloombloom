<template>
  <nav class="menu-wrapper">
    <span class="menu-toggle" @mouseover="menuActive = false">MENU</span>
    <div>
      <div class="menu">
        <div
          class="menu-item"
          v-for="item in menuItems"
          :key="item.name"
          tabindex="0"
          @click="menuActive = true"
        >
          <span>{{ item.name }}</span>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 16"
            fill="currentcolor"
            class="sidemenu-tab-icon"
            v-if="item.children"
          >
            <path
              d="M1 1L9 8.2L1 15.4"
              stroke="currentcolor"
              stroke-opacity="0.85"
              stroke-width="1.5"
            ></path>
          </svg>

          <div
            :class="['sub-menu', { 'sub-menu-active': !!menuActive && !!item.children?.length }]"
          >
            <div class="menu-item back-button" tabindex="0" @click.stop="menuActive = false">
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 16"
                fill="currentcolor"
                class="sidemenu-tab-icon"
              >
                <path
                  d="M1 1L9 8.2L1 15.4"
                  stroke="currentcolor"
                  stroke-opacity="0.85"
                  stroke-width="1.5"
                ></path>
              </svg>
              <span>Back</span>
            </div>
            <div class="menu-item" v-for="sub in item.children" :key="sub.name">{{ sub.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { MenuItem, MenuItems } from '@/types/index';

interface Props {
  menuItems: MenuItems[];
}

withDefaults(defineProps<Props>(), {
  menuItems: () => [
    {
      name: 'Menu Item',
      children: [
        {
          name: 'SubMenu Item',
        },
      ],
    },
  ],
});

const openedSubMenu = ref<MenuItem[] | undefined>(undefined);
const menuActive = ref<boolean>(false);
const showSubMenu = computed(() => !!openedSubMenu.value?.length && menuActive.value);

watch(
  () => showSubMenu.value,
  (newValue, oldValue) => {
    if (!newValue && !!oldValue) {
      openedSubMenu.value = undefined;
    }
  }
);
</script>

<style scoped>
.menu-toggle {
  display: inline-block;
  padding: 16px 36px;
  line-height: 1.4;
  vertical-align: middle;
  overflow: hidden;
  border-right: 1px solid black;
}

.menu-wrapper:hover .menu-toggle {
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;
  cursor: pointer;
}

.menu-wrapper:hover .menu {
  left: 0;
}

.menu-wrapper .menu > .menu-item:hover .sub-menu.sub-menu-active {
  left: 0;
}

.menu,
.sub-menu {
  position: fixed;
  top: 50px;
  left: -100%;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  width: 240px;
  background-color: white;
  border: solid black;
  border-width: 1px 1px 1px 0;
  text-transform: uppercase;
  transition: all 1s ease-in-out;
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
}

.menu {
  z-index: 999;
}

.sub-menu {
  z-index: 1111;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  color: black;
  background-color: white;
  border-bottom: 1px solid black;
}

.menu-item.back-button svg {
  transform: rotate(-180deg);
}
.menu-item:not(.back-button):hover {
  color: white;
  background-color: black;
  cursor: pointer;
}
</style>
