<template>
  <div>
    <OptionNav />
    <div class="collection-view">
      <CardView v-for="x in 17" :key="x" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardView from '@/components/CardView.vue';
import OptionNav from '@/components/nav/OptionsNav.vue';
</script>

<style scoped>
.collection-view {
  display: flex;
  flex-wrap: wrap;
  /* flex-shrink: 0; */
  /* flex-grow: 1; */
}
</style>
