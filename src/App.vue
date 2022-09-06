<template>
  <div>
    <div class="nav-group">
      <TopNav />
    </div>
    <div class="router-view">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import TopNav from '@/components/nav/TopNav.vue';
</script>

<style scoped>
.nav-group {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 1111;
}

.router-view {
  height: calc(100vh - 54px);
  border-right: 1px solid black;
  /* border-width: 0 1px 1px 0; */
  overflow-y: auto;
}
</style>
