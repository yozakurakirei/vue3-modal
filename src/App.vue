<template>
  <h1>{{ msg }}</h1>
  <div v-if="showModal">
    <Modal :title="title" :text="text" theme="sale" @close="toggleModal" />
    <Signup />
  </div>
  <br>
  <button @click="toggleModal">ログイン</button>
  <button @click="toggleModal">新規登録</button>
</template>

<script>
import Modal from "./components/Modal.vue";
import Signup from "./components/Signup.vue";

export default {
  name: 'App',
  components: {
    Modal, Signup,
  },
  data() {
    return {
      showModal: false,
      msg: "初めてのVueアプリです(../",
      title: "modal title",
      text: "モーダルのコンテンツが入ります",
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 1rem;
}
</style>
