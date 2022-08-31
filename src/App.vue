<template>
  <TopNav />
  <OptionNav />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import TopNav from './components/nav/TopNav.vue';
import OptionNav from './components/nav/OptionNav.vue';
</script>
