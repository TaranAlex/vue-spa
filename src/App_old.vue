<template>
  <div id="app">
    <header>
      <h1>{{ msg }}</h1>
    </header>
    <main>
      <aside class="sidebar">
        <router-link to="/">Main</router-link><br>
        <router-link to="/users">Users</router-link><br>

<!--        <router-link-->
<!--          v-for="user in usersList"-->
<!--          active-class="is-active"-->
<!--          class="link"-->
<!--          :to="{ name: 'user', params: { id: user.id } }">-->
<!--          {{user.id}}. {{user.name}} <br>-->

<!--          v-for="user in users"-->
<!--          active-class="is-active"-->
<!--          class="link"-->
<!--          :to="{ name: 'user', params: { id: user.id } }">-->
<!--          {{user.id}}. {{user.name}} <br>-->

<!--          v-for="post in posts"-->
<!--          active-class="is-active"-->
<!--          class="link"-->
<!--          :to="{ name: 'post', params: { id: post.id } }">-->
<!--          {{post.id}}. {{post.title}} <br>-->
<!--        </router-link>-->
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
import {mapGetters} from 'vuex';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Test Vue.js SPA',
      // posts: null,
      // users: null,
      // endpoint: 'https://jsonplaceholder.typicode.com/posts/',
      // users_endpoint: 'http://localhost:8080/api/index',
    }
  },
  created() {
    // Promise.all([this.getAllPosts(), this.getAllUsers()])
    //   .then(values => {
    //     this.posts = values[0].data;
    //     console.log('posts received')
    //     this.users = values[1].data;
    //     console.log('users received')
    // }).then(() => {
    //   console.log("let's go to the next task!")
    // })
  },

  mounted() {
    this.$store.dispatch('GET_USERS');
  },

  computed: {
    ...mapGetters({usersList: 'USERS'}),
    // usersList() {
    //   return this.$store.getters.USERS;
    // },
  },

  methods: {
    // getAllPosts() {
    //     return axios.get(this.endpoint);
    // },
    // getAllUsers() {
    //   return axios.get(this.users_endpoint);
    // },

    // getAllPosts: async function () {
    //   try {
    //     const response = await axios.get(this.endpoint);
    //     console.log('getAllPosts: ', response.data);
    //     this.posts = response.data;
    //   } catch (err) {
    //     console.error(err);
    //   }
    // },
    // getAllUsers: async function () {
    //   try {
    //     const response = await axios.get(this.users_endpoint);
    //     console.log('getAllUsers: ', response.data);
    //     this.users = response.data;
    //   } catch (err) {
    //     console.error(err);
    //   }
    // },

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

<style >
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
header {
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 90px;
  border-bottom: 1px solid #42b983;
  text-align: center;
  background: #ffffff;
}
main {
  display: flex;
  height: calc(100vh - 90px);
  max-width: 1200px;
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}
aside {
  flex: 1 0 30%;
  height: 100%;
  overflow-y: auto;
  width: 30%;
  padding: 50px 30px;
  box-sizing: border-box;
  border-right: 1px solid #42b983;
}
.content {
  flex: 1 1 70%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link {
  display: block;
  text-decoration: none;
  margin-bottom: 10px;
  color: #2c3e50;
}

.is-active {
   color: #42b983;
 }
</style>
