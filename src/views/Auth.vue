<template>
  <auth-form :mode="mode" />
</template>

<script>
import AuthForm from '../components/layout/AuthForm.vue';

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
