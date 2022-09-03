<template>
  <div class="card-view">
    <div class="collection-item-name text-uppercase">
      <span class="glass-name">{{ glassCollection.name }}</span>
      <span class="variant-name">{{ glassCollection.glass_variants[0]?.frame_variant.name }}</span>
    </div>

    <img
      class="glass-image"
      :src="glassCollection.glass_variants[0]?.media[0]?.url"
      :alt="glassCollection.glass_variants[0]?.media[0]?.original_file_name"
    />
    <!-- glassCollection.glass_variants[0].frame_variant?.colour.media[0].url -->
    <span class="button-left"></span>
    <span class="button-right"></span>
  </div>
</template>

<script setup lang="ts">
import type { Glasses } from '@/types/index';

interface Props {
  glassCollection: Glasses;
}

defineProps<Props>();

// withDefaults(defineProps<Props>(), {
//   glassCollection: () => {},
// });

// defineEmits<{
//   (e: 'click'): void;
// }>();
</script>

<style scoped>
.card-view {
  position: relative;
  /* width: calc(100% / 3); */
  height: 340px;
  border-bottom: 1px solid black;
  overflow: hidden;
}

/* .card-view:not(:nth-child(3n)) {
  border-right: 1px solid black;
} */

.card-view .collection-item-name {
  position: absolute;
  left: 50%;
  top: 50px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  padding: 0 20px;
  transform: translateX(-50%);
  z-index: 2;
}

.glass-name {
  font-size: 20px;
}

.variant-name {
  margin-left: 8px;
}

.glass-image {
  width: 100%;
  height: 100%;
  /* object-fit: fill; */
}

.card-view [class^='button-'] {
  position: absolute;
  top: 0;
  width: 100px;
  height: 100%;
  display: inline-block;
  background-color: transparent;
  z-index: 1;
}

.button-left {
  left: 0;
  cursor: url('@/assets/images/icon/arrow-left.svg') 16 16, auto;
}

.button-right {
  right: 0;
  cursor: url('@/assets/images/icon/arrow-right.svg') 16 16, auto;
}

@media (min-width: 1319px) {
  .card-view {
    width: calc(100% / 3);
  }

  .card-view:not(:nth-child(3n)) {
    border-right: 1px solid black;
  }
}

@media (min-width: 720px) and (max-width: 1318px) {
  .card-view {
    width: calc(100% / 2);
  }

  .card-view:not(:nth-child(even)) {
    border-right: 1px solid black;
  }
}

@media (max-width: 719px) {
  .card-view {
    width: 100%;
  }
}

@media (max-width: 425px) {
  .card-view {
    height: 300px;
  }
}
</style>
