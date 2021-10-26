<template lang="html">
  <div class="post" v-if="user">
    <h1 class="post__title">{{ user.name }}</h1>
    <p class="post__body">{{ user.email }}</p>
    <p class="post__id">{{ user.id }}</p>
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
