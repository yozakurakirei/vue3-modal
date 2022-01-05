<template>
  <div class="block" v-if="showBlock" @click="stopTime">
    クリックしてね
  </div>
</template>

<script>
export default {
  props: [
    "delay",
  ],
  data () {
    return {
      showBlock: false,
      timer: null,
      reactiontime: 0,
    }
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
    }, this.delay) 
  },
  methods: {
    startTime() {
      this.timer = setInterval(() => {
        this.reactiontime += 10;
      }, 10);
    },
    stopTime() {
      clearInterval(this.timer);
      this.$emit("end", this.reactiontime);
    },
    
  }
}
</script>

<style>
.block {
  width: 20rem;
  border-radius: 2rem;
  background: #0faf87;
  color: #fff;
  text-align: center;
  padding: 10rem 0;
  margin: 0 auto;
  font-weight: bold;
}
</style>