<template lang="html">
  <div class="post" v-if="user">
    <h1 class="post__title">user delete page</h1>
    <p class="post__body">user for delete - {{ user.name }}</p>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    props: ['id'],
    data() {
      return {
        user: null,
        endpoint: 'http://localhost:8080/api/show/',
      }
    },
    methods: {
      getUser(id) {
        axios(this.endpoint + id)
          .then(response => {
            this.user = response.data
          })
          .catch( error => {
            console.log(error)
          })
      }
    },

    created() {
      this.getUser(this.id);
    },

    watch: {
      '$route'() {
        this.getUser(this.id);
      }
    }
  }
</script>
<style scoped>
.post {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  padding: 50px 20px 70px;
}
</style>
