<template>
  <div class="backdrop" @click="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "text", "theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
}
</script>

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
      h1 {
        color: #03cfb4
      }
    }
    .sale {
      background: rgb(199, 31, 65);
      color: white;
      h1 {
        color: #fff;
      }
    }
  }
</style>



