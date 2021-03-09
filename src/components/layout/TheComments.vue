<template>
  <div>
    <ul v-if="hasComments">
      <single-comment
        v-for="comment in comments"
        :key="comment.id"
        :item="comment"
        @postComment="getComments"
      />
    </ul>
  </div>
</template>

<script>
import SingleComment from '../layout/SingleComment.vue';
export default {
  components: {
    SingleComment,
  },
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
  },
};
</script>

<style scoped>
ul {
  max-width: 50rem;
  margin: 0 auto;
}
</style>
