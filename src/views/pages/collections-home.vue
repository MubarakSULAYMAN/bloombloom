<template>
  <div>
    <OptionNav />
    <p v-if="!glasses.length">List might be empty</p>
    <div class="collection-view" v-else>
      <CardView
        v-for="glassCollection in glasses"
        :key="glassCollection.id"
        :glassCollection="glassCollection"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardView from '@/components/CardView.vue';
import OptionNav from '@/components/nav/OptionsNav.vue';
import { useRoute, useRouter } from 'vue-router';
import { useCollectionsStore } from '@/stores/collections';
import { useSharedStore } from '@/stores/shared';
import { computed, watch } from 'vue';

const route = useRoute();
const router = useRouter();
const store = useCollectionsStore();
const sharedStore = useSharedStore();

console.log(route.params.slug);
const currentSlug = computed(() => route.params.slug as string);

function updatePageTitle() {
  switch (currentSlug.value) {
    case 'sunglasses-men':
      sharedStore.pageTitle = 'Sunglasses Men';
      break;

    case 'sunglasses-women':
      sharedStore.pageTitle = 'Sunglasses Women';
      break;

    case 'spectacles-men':
      sharedStore.pageTitle = 'Spectacles Men';
      break;

    case 'spectacles-women':
      sharedStore.pageTitle = 'Spectacles Women';
      break;

    default:
      break;
  }
}

updatePageTitle();

if (!(Object.keys(route.query).length === 0 && route.query.constructor === Object)) {
  store.getCollections(currentSlug.value, route.query);
} else store.getCollections(currentSlug.value);

const glasses = computed(() => store.glasses);

watch(
  () => currentSlug.value,
  (newValue) => {
    store.getCollections(newValue);
    updatePageTitle;
  }
);

watch(
  () => route.query,
  (newValue) => {
    if (!(Object.keys(newValue).length === 0 && newValue.constructor === Object)) {
      store.getCollections(currentSlug.value, newValue);
    }
    updatePageTitle;
  }
);
</script>

<style scoped>
.collection-view {
  display: flex;
  flex-wrap: wrap;
  /* flex-shrink: 0; */
  /* flex-grow: 1; */
}
</style>
