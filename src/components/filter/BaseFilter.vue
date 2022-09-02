<template>
  <button
    :class="['filter cursor-pointer', { 'filter-active': hasFilter }]"
    @click="$emit('click')"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  title: string;
  activeFilters: string[];
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Filter item',
  activeFilters: () => [],
});

defineEmits<{
  (e: 'click'): void;
}>();

const hasFilter = computed(() => props.activeFilters.includes(props.title));
</script>

<style scoped>
button.filter {
  font-size: 14px;
  background-color: transparent;
  border: none;
  text-transform: capitalize;
}

button.filter:hover,
.filter-active {
  text-decoration: underline;
}
</style>
