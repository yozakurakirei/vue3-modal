<template>
  <div class="block">
    クリックしてね
  </div>
</template>

<script>
export default {
  props: [
    "delay",
  ]
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