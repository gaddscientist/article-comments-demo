<template>
  <div class="container">
    <form @submit.prevent="postComment">
      <textarea
        id="comment"
        cols="60"
        rows="2"
        maxlength="256"
        placeholder="Post a comment!"
        v-model="commentBody"
        required
      ></textarea>
      <button class="btn" v-if="isLoggedIn">Submit</button>
    </form>
    <button class="btn" @click="handleSigninClick" v-if="!isLoggedIn">
      Sign In
    </button>
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

.container {
  margin: 2rem auto 0.5rem auto;
  width: 70%;
  max-width: 40rem;
}
</style>
