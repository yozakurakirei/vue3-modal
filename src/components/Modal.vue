<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot>デフォルト部分なのでコンテンツがない時に表示されます</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
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
      .actions {
        text-align: center;
        margin: 3rem 0 1.5rem 0;
        a {
          color: #555;
          font-weight: bold;
          padding: 1rem;
          border: 1px solid #eee;
          background: #eee;
          text-decoration: none;
          margin: 1rem;
          box-shadow: 1px 2px 2px #ccc;
        }       
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



