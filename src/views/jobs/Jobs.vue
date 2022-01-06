<template>
  <div class="jobs">
    <h1>Jobページです</h1>
    <div v-for="job in jobs" :key= "job.id" class="job">
      <router-link :to="{ name: 'JobDetail', params: { id: job.id } }">
        <p>{{ job.title }}</p>
      </router-link>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "Jobs",
  data() {
    return {
      jobs: [
        {title: "yui aragaki", id: 1, details: "lorem"},
        {title: "ami kikuchi", id: 2, details: "lorem"},
        {title: "minami hamabe", id: 3, details: "lorem"},
      ]
    }
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