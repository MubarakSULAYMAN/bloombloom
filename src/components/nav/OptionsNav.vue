<template>
  <nav class="options-nav">
    <div class="option-item"></div>
    <div class="option-item">{{ pageTitle }}</div>
    <div class="option-item">
      <span>Colour</span>
      <span>Shape</span>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSharedStore } from '@/stores/shared';

const store = useSharedStore();
const pageTitle = computed(() => store.pageTitle);
</script>

<style scoped>
.options-nav {
  display: flex;
  border-bottom: 1px solid black;
}

.option-item {
  width: calc(100% / 3);
}

.option-item:nth-child(even) {
  padding: 16px 0;
  font-size: 16px;
  text-align: center;
  font-weight: 800;
  border: solid black;
  border-width: 0 1px;
}

.option-item span {
  display: inline-block;
  padding: 16px 20px;
  border-right: 1px solid black;
  line-height: 1.6;
  vertical-align: middle;
}
</style>
