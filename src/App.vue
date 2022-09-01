<template>
  <div class="app-wrapper">
    <div class="nav-group">
      <TopNav />
      <OptionNav />
    </div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import TopNav from '@/components/nav/TopNav.vue';
import OptionNav from '@/components/nav/OptionsNav.vue';
</script>

<style scoped>
.app-wrapper {
  border: solid black;
  border-width: 0 1px;
}

.nav-group {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 1111;
}
</style>
