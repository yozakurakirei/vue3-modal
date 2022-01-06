<template>
  <div v-if="job">
    <h1>ジョブ詳細</h1>
    <h1>{{ job.title }}</h1>
    <p>id:{{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <h1>ローディング中です</h1>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null
    }
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then(res => res.json())
      .then(data => this.job = data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style>

</style>