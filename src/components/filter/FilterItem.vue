<template>
  <div class="filter-item">
    <span class="title text-uppercase">{{ title }}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      class="bi bi-x"
      viewBox="0 0 16 16"
    >
      <path
        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}

withDefaults(defineProps<Props>(), {
  title: 'Filter name',
});
</script>

<style scoped>
.filter-item {
  display: flex;
  align-items: center;
  height: 28px;
}

.title {
  display: inline-block;
  margin-right: 4px;
  font-size: 12px;
}

svg {
  cursor: pointer;
}
</style>
