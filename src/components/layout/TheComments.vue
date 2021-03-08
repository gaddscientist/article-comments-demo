<template>
  <div>
    <div class="line-br"></div>
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
        console.log(err.message);
      }
    },
  },
};
</script>

<style scoped>
.line-br {
  border-bottom: 2px solid black;
  margin: 0 auto;
  max-width: 50rem;
  width: 100%;
}
ul {
  max-width: 50rem;
  margin: 0 auto;
}
</style>
