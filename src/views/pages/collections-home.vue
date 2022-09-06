<template>
  <div>
    <OptionNav />
    <!-- <TheLoader :is-loading="isLoading"> -->
    <p class="message" v-if="isLoading">Kindly wait while we get you some glasses...</p>
    <p class="message" v-if="!isLoading && !glasses.length">Unable to retrieve an item.</p>
    <div class="collection-view" v-else>
      <CardView
        v-for="glassCollection in glasses"
        :key="glassCollection.id"
        :glassCollection="glassCollection"
      />
    </div>
    <!-- </TheLoader> -->
  </div>
</template>

<script setup lang="ts">
import CardView from '@/components/CardView.vue';
import OptionNav from '@/components/nav/OptionsNav.vue';
// import TheLoader from '@/components/TheLoader.vue';
import { useRoute } from 'vue-router';
import { useCollectionsStore } from '@/stores/collections';
import { useSharedStore } from '@/stores/shared';
import { computed, watch } from 'vue';

const route = useRoute();
// const router = useRouter();
const store = useCollectionsStore();
const sharedStore = useSharedStore();

const isLoading = computed(() => sharedStore.isLoading);

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
    updatePageTitle();
  }
);

// if (JSON.stringify(newValue) !== JSON.stringify(oldValue) && !empty) {
//           fetchConsumableProductsOrder()
//         }

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
  border-bottom: 1px solid black;
}

.message {
  padding: 20px;
}
</style>
