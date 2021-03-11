<template>
  <div>
    <auth-modal :show="showSignIn" mode="login" @close="close"></auth-modal>
    <ul v-if="hasComments">
      <single-comment
        v-for="comment in comments"
        :key="comment.id"
        :item="comment"
        @postComment="getComments"
        @signin="handleSignIn"
      />
    </ul>
  </div>
</template>

<script>
import SingleComment from './SingleComment.vue';
import AuthModal from './AuthModal.vue';
export default {
  components: {
    SingleComment,
    AuthModal,
  },
  props: ['showSignIn'],
  created() {
    this.getComments();
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    comments() {
      return this.$store.getters['getComments'];
    },
  },
  methods: {
    hasComments() {
      return !this.isLoading && this.$store.getters['hasComments'];
    },
    async getComments() {
      try {
        this.comments = await this.$store.dispatch('loadComments');
      } catch (err) {
        console.log('ERROR: Comments not retrieved: ' + err.message);
      }
    },
    handleSignIn() {
      this.$emit('signin');
    },
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
ul {
  max-width: 50rem;
  margin: 0 auto;
}
</style>
