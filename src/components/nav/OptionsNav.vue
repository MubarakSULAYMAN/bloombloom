<template>
  <nav>
    <div class="options-nav">
      <div class="option-item"></div>
      <div class="option-item">{{ pageTitle }}</div>
      <div class="option-item filters">
        <span class="cursor-pointer" @click="isFilter = !isFilter">Filters</span>
      </div>
    </div>

    <TransitionGroup name="slide-fade">
      <div class="expanded-view" v-if="isFilter">
        <table class="filter-table text-uppercase">
          <thead>
            <tr>
              <th v-for="(_, key) in filters" :key="key">
                {{ key.slice(0, -1) }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td v-for="(value, key) in filters" :key="key">
                <BaseFilter
                  v-for="item in value"
                  :key="item"
                  :title="item"
                  :active-filters="activeFilters"
                  @click="addFilter(item)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="filter-info text-uppercase"
        v-if="!!isFilter ? true : !!activeFilters.length ? true : false"
      >
        <div class="filter-items" v-if="!!activeFilters.length">
          <TransitionGroup name="fade">
            <FilterItem
              v-for="(item, index) in activeFilters"
              :key="item"
              :title="item"
              class="filter-item"
              @click="removeFilter(item, index)"
            />
          </TransitionGroup>
        </div>
        <span v-else />
        <div class="result-count">{{ resultCount }} Results found</div>
        <div class="clear-filters" v-if="!!activeFilters.length">
          <button
            class="cursor-pointer text-uppercase"
            @click="
              colorFilters.length = 0;
              shapeFilters.length = 0;
            "
          >
            Clear filters
          </button>
        </div>
        <span v-else />
      </div>
    </TransitionGroup>
  </nav>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useSharedStore } from '@/stores/shared';
import BaseFilter from '@/components/filter/BaseFilter.vue';
import FilterItem from '@/components/filter/FilterItem.vue';

const store = useSharedStore();
const pageTitle = computed(() => store.pageTitle);
const isFilter = ref<boolean>(false);
const filters = reactive<{ colours: string[]; shapes: string[] }>({
  colours: ['black', 'tortoise', 'coloured', 'crystal', 'dark', 'bright'],
  shapes: ['square', 'rectangle', 'round', 'cat-eye'],
});
const colorFilters = reactive<string[]>([]);
const shapeFilters = reactive<string[]>([]);
const activeFilters = computed(() => [...colorFilters, ...shapeFilters]);

function addFilter(item: string) {
  if (activeFilters.value.includes(item)) return;

  if (filters.colours.includes(item)) {
    colorFilters.push(item);
  }

  if (filters.shapes.includes(item)) {
    shapeFilters.push(item);
  }
}

function removeFilter(item: string, index: number) {
  if (filters.colours.includes(item)) {
    colorFilters.splice(index, 1);
  }

  if (filters.shapes.includes(item)) {
    shapeFilters.splice(index, 1);
  }
}
const resultCount = ref<number>(0);
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
  padding: 14px 0;
  font-size: 20px;
  text-align: center;
  font-weight: 800;
  border: solid black;
  border-width: 0 1px;
}

.option-item span {
  display: inline-block;
  padding: 16px 20px;
  border-right: 1px solid black;
  line-height: 1.45;
  vertical-align: middle;
}

.expanded-view {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  border: 0 solid black;
  border-bottom-width: 1px;
  z-index: 999;
}

.filter-table {
  margin-left: auto;
  border: none;
  border-collapse: collapse;
}

.filter-table th,
.filter-table td {
  padding: 12px;
  border-left: 1px solid black;
}

.filter-table td {
  border-top: 1px solid black;
}

.filter-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 48px;
  padding: 8px;
  border-bottom: 1px solid black;
}

.filter-items,
.clear-filters {
  width: 40%;
}

.filter-items {
  display: flex;
  flex-wrap: wrap;
}

.filter-item {
  margin-right: 8px;
}

.result-count,
.clear-filters {
  font-weight: 600;
}

.result-count {
  text-align: center;
}

.clear-filters {
  display: flex;
  justify-content: end;
}

.clear-filters button {
  background-color: transparent;
  border: none;
  font-weight: 600;
}

.clear-filters button:hover {
  cursor: pointer;
  text-decoration: underline;
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

.slide-fade-enter-active {
  transition: opacity 0.2s, height all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-from {
  height: 0;
  transform: translateY(-10px);
}

.slide-fade-leave-to {
  transform: translateY(5px);
}
</style>
