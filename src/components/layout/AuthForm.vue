<template>
  <div class="container">
    <form submit.prevent="">
      <p class="title">{{ title }}</p>
      <div class="input-group">
        <input type="text" placeholder="Username" required />
      </div>
      <div class="input-group">
        <input type="password" placeholder="Password" required />
      </div>
      <div class="input-group" v-if="mode !== 'login'">
        <input type="password" placeholder="Re-enter Password" required />
      </div>
      <div class="input-group">
        <button type="submit">{{ buttonCaption }}</button>
      </div>
      <p>
        {{ bottomText }}<router-link to="/signup">{{ linkText }}</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  props: ['mode'],
  computed: {
    title() {
      return this.mode === 'login' ? 'Please Log In' : 'Enter Sign Up Info';
    },
    buttonCaption() {
      return this.mode === 'login' ? 'Login' : 'Sign Up';
    },
    bottomText() {
      return this.mode === 'login'
        ? 'No account yet? '
        : 'Already have an account? ';
    },
    linkText() {
      return this.mode === 'login' ? 'Sign up' : 'Login';
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: flex-start;
  background: #fff;
}
.input-group {
  margin: 1rem;
  width: 100%;
}
input {
  width: 100%;
  line-height: 3rem;
  font-size: 1rem;
}
.title {
  display: flex;
  justify-content: center;
  width: calc(100% + 6rem);
  position: relative;
  margin-bottom: 1rem;
  padding: 1rem 0;
  background: #eee;
  border-bottom: 1px solid #e2e2e2;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 1.5rem;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 25rem;
  border-radius: 10px;
  border: 1px solid #e2e2e2;
  padding: 0 3rem 2rem 3rem;
  background: #f5f5f5;
  margin-top: 6rem;
}
button {
  margin: 0 auto;
  width: 100%;
  height: 3rem;
  background-color: #2ea44f;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}
button:hover {
  background-color: #2c964a;
}
p {
  font-size: 0.9rem;
}
</style>
