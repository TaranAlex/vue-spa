<template lang="html">
  <div class="post" v-if="usersList">
    <div>
      <ul>
        <li v-for="user in usersList">
          <router-link
            active-class="is-active"
            class="link"
            :to="{ name: 'user', params: { id: user.id } }">
            {{user.id}}. {{user.name}}
          </router-link>
          <router-link style="margin-left: 30px" :to="{ name: 'userEdit', params: { id: user.id } }">Edit</router-link>
          <router-link style="margin-left: 30px" :to="{ name: 'userDelete', params: { id: user.id } }">Delete</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  data() {
    return {
    }
  },
  mounted() {
    this.$store.dispatch('GET_USERS');
  },

  computed: {
    ...mapGetters({usersList: 'USERS'}),
  },
  methods: {

  },

  created() {

  },

  watch: {

  }
}
</script>
<style scoped>
li {
  display: flex;
}
.post {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  padding: 50px 20px 70px;
}
</style>
