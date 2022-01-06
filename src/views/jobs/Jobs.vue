<template>
  <h1>Jobページです</h1>
  <div v-if="jobs.length" class="jobs">
    <div v-for="job in jobs" :key= "job.id" class="job">
      <router-link :to="{ name: 'JobDetail', params: { id: job.id } }">
        <p>{{ job.title }}</p>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>ローディング中です...</p>
  </div>
</template>

<script>
export default {
  name: "Jobs",
  data() {
    return {
      jobs: []
    }
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then(res => res.json())
      .then(data => this.jobs = data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style lang="scss">
.job {
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem auto;
  max-width: 500px;
  cursor: pointer;
  color: #555; 
  h2:hover {
    background: #ddd;
  }
  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
  }
}
</style>