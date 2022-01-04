<template>
  <div class="backdrop">
    <div class="modal">
      <p>モーダルのコンテンツがここに入ります</p>
    </div>
  </div>
</template>

<style lang="scss">
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    .modal {
      width: 40rem;
      padding: 2rem;
      margin: 10rem auto;
      background: white;
      border-radius: 1rem;
    }
  }
</style>



