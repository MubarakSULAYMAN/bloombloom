<template>
  <div
    :class="['w-full flex-1 flex flex-col relative']"
    :style="{
      minHeight: isLoading ? `${height}px` : 'auto',
    }"
  >
    <div>
      <!-- v-show="isLoading" class="wrapper" -->
      <!-- :style="{ paddingTop: height / 2 - 32 + 'px' }" -->
      <div class="loader"></div>
    </div>
    <div>
      <slot>
        <div :style="{ height: height + 'px' }" class="w-full"></div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isLoading: {
    type: Boolean,
    default: true,
  },
  height: {
    type: Number,
    default: 256,
  },
});
// const wrapper: Ref<HTMLDivElement | null> = ref(null);
// onMounted(() => {
//     console.log("Mounted", wrapper.value)
//     const observer = new ResizeObserver((entries) => {
//         console.log("ResizeObserver", entries)

//     })
//     observer.observe(wrapper.value)
// })
</script>

<style scoped>
.wrapper {
  display: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 2rem;
  height: 100%;
  background-color: white;
  opacity: 0.7;
  z-index: 1111;
}

.loader {
  width: 2rem;
  height: 2rem;
  margin: 2rem;
  border-radius: 50%;
  border: 0.3rem solid rgba(#979fd0, 0.3);
  border-top-color: #979fd0;
  animation: 1.5s spin infinite linear;
}
</style>
