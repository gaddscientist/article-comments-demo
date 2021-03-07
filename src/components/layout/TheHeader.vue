<template>
  <div class="container">
    <nav id="navbar">
      <h3><router-link to="/" class="app-name">Blog App</router-link></h3>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li v-if="!loggedIn"><router-link to="/login">Login</router-link></li>
        <li v-if="!loggedIn">
          <router-link to="/signup">Sign Up</router-link>
        </li>
        <li v-if="loggedIn" @click="logout"><a class="logout">Logout</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters['isLoggedIn'];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('updateUserId', { userId: null });
    },
  },
};
</script>

<style scoped>
#navbar {
  display: flex;
  color: white;
  justify-content: space-between;
  padding: 1rem;
  max-width: 70rem;
  margin: 0 auto;
}

#navbar ul {
  display: flex;
  align-items: center;
  list-style: none;
}

#navbar ul li a,
.app-name {
  font-weight: bold;
  color: white;
  padding: 0.5rem;
  margin: 0 0.25rem;
}

#navbar ul li a:hover {
  background: #444;
  color: white;
  border-radius: 5px;
}
.container {
  background: #292929;
}
.logout:hover {
  cursor: pointer;
}
</style>
