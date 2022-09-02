<template>
  <div class="card-view">
    <div class="collection-item-name text-uppercase">
      <span class="glass-name">glass-name</span>
      <span class="variant-name">glass-name</span>
    </div>

    <img class="glass-image" scr="https://picsum.photos/300/200" alt="Free unsplash image" />
    <span class="button-left"></span>
    <span class="button-right"></span>
  </div>
</template>

<style scoped>
.card-view {
  position: relative;
  width: calc(100% / 3);
  height: 500px;
  border-bottom: 1px solid black;
}

.card-view:not(:nth-child(3n)) {
  border-right: 1px solid black;
}

.card-view .collection-item-name {
  position: absolute;
  left: 50%;
  top: 50px;
  display: flex;
  justify-content: center;
  align-items: baseline;
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
</style>
