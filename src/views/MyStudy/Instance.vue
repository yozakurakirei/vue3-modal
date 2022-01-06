<template>
  <div>
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "ライフサイクルフックが呼ばれた",
      mount: ""
    }
  },
  // まだ呼ばれてない
  beforeCreate() {
    console.log("これは:" + this.name)
  },
  created() {
    console.log("状態" + this.name)
  },
  beforeMount() {
    this.mount = "mount!!"
  },
  mounted() {
    console.log("状態" + this.mount)
  }
}
</script>

<style>

</style>