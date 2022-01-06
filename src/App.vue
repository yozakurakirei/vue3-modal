<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link to="/ather">その他</router-link> |
    <router-link :to="{ name: 'Jobs'}">Jobs</router-link> |
  </div>
  <button @click="redirect">ホーム</button>
  <button @click="back">戻る</button>
  <button @click="forward">次へ</button>
  <router-view/>
</template>

<script>
export default {
  name: "App",
  methods: {
    redirect() {
      this.$router.push({name: "Home"})
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    },
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
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

button {
  margin: 0 1rem;
  padding: .6rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
