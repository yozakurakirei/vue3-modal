<template>
  <h1>{{ msg }}</h1>

  <teleport to=".modals" v-if="showModal">
    <!-- login -->
    <Modal theme="" @close="toggleModal" >
      <template v-slot:links>
        <a href="#">新規登録はこちら</a>
        <a href="#">お困りの方へ</a>
      </template>
      <h1>ログイン</h1>
      <p>メールアドレスとパスワードを入力してください</p>
    </Modal>
  </teleport>

  <!-- signup -->
  <teleport to=".modals" v-if="showLogin">
    <Modal theme="" @close="toggleLogin" >
      <template v-slot:links>
        <a href="#">ログインはこちら</a>
        <a href="#">お困りの方へ</a>
      </template>
      <h1>新規登録</h1>
      <p>アカウントを作ってみましょう</p>
    </Modal>
  </teleport>

  <br>
  <button @click="toggleModal">ログイン</button>
  <button @click="toggleLogin">新規登録</button>
  <br>
  <button @click="start" :disabled="isPlaying">Start</button>
  <Block v-if="isPlaying" :delay = delay />
</template>

<script>
import Modal from "./components/Modal.vue";
import Block from "./components/Block.vue";

export default {
  name: 'App',
  components: {
    Modal, Block,
  },
  data() {
    return {
      msg: "Welcom to Jutaku(/・・/!!",
      showModal: false,
      showLogin: false,
      isPlaying: false,
      delay: null,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleLogin() {
      this.showLogin = !this.showLogin;
    },
    start() {
      this.isPlaying = 2000 + Math.random() * 5000;
      this.delay = true;
      console.log(this.isPlaying);
    }
  }
}
</script>

<style lang="scss">
#app, .modals {
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
