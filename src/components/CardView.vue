<template>
  <div class="card-view">
    <div class="collection-item-name text-uppercase">
      <span class="glass-name">{{ glassCollection.name }}</span>
      <span class="variant-name">
        {{ glassCollection.glass_variants[glassVariantIndex]?.frame_variant.colour?.name }}
      </span>
    </div>

    <img
      class="glass-image"
      :src="glassCollection.glass_variants[glassVariantIndex]?.media[mediaIndex]?.url"
      :alt="
        glassCollection.glass_variants[glassVariantIndex]?.media[mediaIndex]?.original_file_name
      "
      loading="lazy"
    />
    <span
      class="button-left"
      @click="previousMedia(glassCollection.glass_variants[glassVariantIndex]?.media.length!)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-left"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        />
      </svg>
    </span>
    <span
      tabindex="-1"
      class="button-right"
      @click="nextMedia(glassCollection.glass_variants[glassVariantIndex]?.media.length!)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </span>

    <div class="glass-variant-control">
      <span
        tabindex="0"
        @click="previousGlass(glassCollection.glass_variants[glassVariantIndex]?.media.length!)"
      >
        Previous Variant
      </span>
      |
      <span
        tabindex="0"
        @click="nextGlass(glassCollection.glass_variants[glassVariantIndex]?.media.length!)"
      >
        Next Variant
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Glasses } from '@/types/index';
import { ref } from 'vue';

interface Props {
  glassCollection: Glasses;
}

defineProps<Props>();

const glassVariantIndex = ref<number>(0);
const mediaIndex = ref<number>(0);

const previousGlass = (arrLength: number) => {
  if (glassVariantIndex.value > 0) {
    glassVariantIndex.value--;
  } else glassVariantIndex.value = arrLength - 1;
};

const nextGlass = (arrLength: number) => {
  if (glassVariantIndex.value < arrLength - 1) {
    glassVariantIndex.value++;
  } else glassVariantIndex.value = 0;
};

const previousMedia = (arrLength: number) => {
  if (mediaIndex.value > 0) {
    mediaIndex.value--;
  } else mediaIndex.value = arrLength - 1;
};

const nextMedia = (arrLength: number) => {
  if (mediaIndex.value < arrLength - 1) {
    mediaIndex.value++;
  } else mediaIndex.value = 0;
};
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

.collection-item-name {
  font-size: 20px;
}

.variant-name {
  margin-left: 8px;
  font-weight: 300;
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

.card-view [class^='button-'] svg {
  display: none;
}

.glass-variant-control {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.glass-variant-control {
  cursor: pointer;
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

  .card-view [class^='button-'] {
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    transform: translateX(50%);
  }

  .card-view .button-right {
    transform: translateX(-50%);
  }

  .card-view [class^='button-'] svg {
    display: inline-block;
  }
}

@media (max-width: 375px) {
  .card-view {
    height: 250px;
  }
}
</style>
