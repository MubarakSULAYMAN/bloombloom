<template>
  <div class="card-view">
    <div class="collection-item-name">
      <span class="glass-name">glass-name</span>
      <span class="variant-name">glass-name</span>
    </div>

    <img class="glass-image" scr="https://picsum.photos/300/200" alt="Free unsplash image" />
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
  text-transform: uppercase;
  transform: translateX(-50%);
}

.glass-name {
  font-size: 16px;
}

.variant-name {
  margin-left: 8px;
}

.glass-image {
  width: 100%;
  height: 100%;
  /* object-fit: fill; */
}
</style>
