<template>
  <div id="app">
    <header>
      <h1>{{ msg }}</h1>
    </header>
    <main>
      <aside class="sidebar">
        <router-link
          v-for="user in users"
          active-class="is-active"
          class="link"
          :to="{ name: 'user', params: { id: user.id } }">
          {{user.id}}. {{user.name}} <br>
<!--          v-for="post in posts"-->
<!--          active-class="is-active"-->
<!--          class="link"-->
<!--          :to="{ name: 'post', params: { id: post.id } }">-->
<!--          {{post.id}}. {{post.title}} <br>-->
        </router-link>
      </aside>
      <div class="content">
        <router-view></router-view>
      </div>
      <div class="content">
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Test Vue.js SPA',
      posts: null,
      users: null,
      endpoint: 'https://jsonplaceholder.typicode.com/posts/',
      users_endpoint: 'http://localhost:8080/api/index',
    }
  },
  created() {
    const getAllPosts = new Promise((resolve, reject) => {
      resolve(this.getAllPosts());
    });
    const getAllUsers = new Promise((resolve, reject) => {
      resolve(this.getAllUsers());
    });
    Promise.all([getAllPosts, getAllUsers])
      .then(() => {
        console.log("let's go to the next task!")
    })
  },

  methods: {
    getAllPosts: async function () {
      try {
        const response = await axios.get(this.endpoint);
        console.log('getAllPosts: ', response.data);
        this.posts = response.data;
      } catch (err) {
        console.error(err);
      }
    },
    getAllUsers: async function () {
      try {
        const response = await axios.get(this.users_endpoint);
        console.log('getAllUsers: ', response.data);
        this.users = response.data;
      } catch (err) {
        console.error(err);
      }
    },
    // getAllPosts() {
    //   axios.get(this.endpoint)
    //     .then(response => {
    //       this.posts = response.data;
    //     })
    //     .catch(error => {
    //       console.log('-----error-------');
    //       console.log(error);
    //     })
    // },
    // getAllUsers() {
    //   axios.get(this.users_endpoint)
    //     .then(response => {
    //       this.users = response.data;
    //     })
    //     .catch(error => {
    //       console.log('-----error-------');
    //       console.log(error);
    //     })
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
