<template>
  <div id="app">
    <header>
      <h1>{{ msg }}</h1>
    </header>
    <main>
      <aside class="sidebar">
        <ul>
          <li><router-link :to="{name: 'home'}" class="link">Main</router-link></li>
          <li><router-link :to="{name: 'users'}" active-class="is-active" class="link">Users</router-link></li>
        </ul>
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
import {mapGetters} from 'vuex';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Test Vue.js SPA',
    }
  },
  created() {

  },

  mounted() {
    this.$store.dispatch('GET_USERS');
  },

  computed: {
    ...mapGetters({usersList: 'USERS'}),
  },

  methods: {

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
  display: flex;
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
