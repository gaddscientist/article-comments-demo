<template>
  <div class="container">
    <form @submit.prevent="postComment">
      <input
        type="text"
        id="comment"
        placeholder="Post a comment!"
        v-model="commentBody"
        required
      />
      <button class="btn" v-if="isLoggedIn">Submit</button>
      <button class="btn" @click="handleSigninClick" v-if="!isLoggedIn">
        Sign In
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['depth', 'parentId'],
  data() {
    return {
      commentBody: '',
    };
  },
  computed: {
    uname() {
      return this.$store.getters['getUser'];
    },
    isLoggedIn() {
      return this.$store.getters['isLoggedIn'];
    },
  },
  methods: {
    postComment() {
      this.$store.dispatch('postComment', {
        depth: parseInt(this.depth) + 1,
        uname: this.uname,
        commentBody: this.commentBody,
        parentId: this.parentId,
      });
      this.$store.dispatch('loadComments');
      this.$emit('commentPosted');
      this.commentBody = '';
    },
    handleSigninClick() {
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
#comment {
  background: inherit;
  width: 100%;
  display: inline;
  font-size: 1em;
  padding: 0.25rem;
  border: none;
  border-bottom: 2px solid black;
}
#comment:focus {
  outline: none;
}

.btn {
  margin: 0 0 0 auto;
  display: inline;
  height: 50px;
  width: 80px;
  font-weight: bold;
  background: #ddd;
  border: none;
  border-bottom: 2px solid black;
}
.btn:hover {
  background: #bbb;
  cursor: pointer;
}
.container {
  margin: 2rem auto 0.5rem auto;
  width: 100%;
  max-width: 40rem;
}
form {
  display: flex;
}
input:invalid {
  box-shadow: none;
}
input:focus::placeholder {
  font-size: 1.1rem;
}
</style>
