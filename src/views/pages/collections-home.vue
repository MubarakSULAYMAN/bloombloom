<template>
  <div class="collection-view">
    <CardView v-for="x in 17" :key="x" />
  </div>
</template>

<script setup lang="ts">
import CardView from '@/components/CardView.vue';
</script>

<style scoped>
.collection-view {
  display: flex;
  flex-wrap: wrap;
  /* flex-shrink: 0; */
  /* flex-grow: 1; */
  background-color: #0047ae;
}
</style>
