<template>
  <div class="blog">
    Blog
    <p ref="p" >私名前は{{ name }}です。年齢は{{ age }}歳です</p>
    <button @click="handleClick">クリックしてね</button>
    <button @click="handleClick2">名前が変わって、若くなるよ！</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
  setup() {
    console.log(this);

    const name = ref("三倉 茉奈");
    const age = ref(35);

    const p = ref(null)
    console.log(p, p.value)

    const handleClick = () => {
      console.log(name.value + "がクリックしました");
      console.log(p, p.value);
      p.value.classList.add("test");
      p.value.textContent = "三倉佳奈やで"
    }

    const handleClick2 = () => {
      name.value = "まなちゃん";
      age.value = 33;
    }

    return {
      name, age, handleClick, handleClick2, p,
    }
  },
}
</script>

<style>

</style>