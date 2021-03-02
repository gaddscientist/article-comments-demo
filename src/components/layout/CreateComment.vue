<template>
  <form @submit.prevent="">
    <textarea
      id="comment"
      cols="60"
      rows="5"
      placeholder="Post a comment!"
    ></textarea>
    <button class="btn" v-if="isLoggedIn">Submit</button>
    <button class="btn" v-else>Sign In</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
};
</script>

<style scoped>
#comment {
  margin: 1rem auto;
  width: 100%;
  display: block;
  border-radius: 10px;
  border: none;
  box-shadow: 0 2px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  font-size: 1.1em;
}

#comment:focus {
  outline: none;
}

.btn {
  margin: 1rem 0 1rem auto;
  display: block;
  height: 50px;
  width: 80px;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  box-shadow: 0 2px 4px 4px rgba(0, 0, 0, 0.25);
}
.btn:hover {
  background: #ddd;
}
form {
  margin: 2rem auto;
  width: 70%;
}
</style>
