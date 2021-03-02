<template>
  <nav id="navbar">
    <h3>Blog App</h3>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><a href="#signup">Sign Up</a></li>
      <li><a href="#login">Login</a></li>
    </ul>
  </nav>
</template>

<style scoped>
#navbar {
  display: flex;
  background: #292929;
  color: white;
  justify-content: space-around;
  padding: 1rem;
}

#navbar ul {
  display: flex;
  align-items: center;
  list-style: none;
}

#navbar ul li a {
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
</style>
