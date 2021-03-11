<template>
  <div>
    <auth-form :mode="mode" />
  </div>
</template>

<script>
import AuthForm from '../components/AuthForm.vue';

export default {
  components: {
    AuthForm,
  },
  computed: {
    mode() {
      return this.$router.currentRoute.value.path.slice(1);
    },
  },
};
</script>

<style scoped>
div {
  margin-top: 6rem;
}
</style>
