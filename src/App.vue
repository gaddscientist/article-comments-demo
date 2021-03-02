<template>
  <the-header />
  <router-view />
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

a {
  text-decoration: none;
}
</style>
