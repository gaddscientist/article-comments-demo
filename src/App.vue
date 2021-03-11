<template>
  <the-header />
  <router-view />
</template>

<script>
import TheHeader from './components/TheHeader.vue';
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

body {
  /* background: #bbb; */
}

a {
  text-decoration: none;
}
</style>
