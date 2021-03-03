<template>
  <div class="line-br"></div>
  <ul>
    <single-comment
      v-for="comment in comments"
      :key="comment.uname"
      :uname="comment.uname"
      :body="comment.body"
    />
  </ul>
</template>

<script>
import SingleComment from '../layout/SingleComment.vue';
export default {
  components: {
    SingleComment,
  },
  computed: {
    comments() {
      return this.$store.getters['getComments'];
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
</style>
