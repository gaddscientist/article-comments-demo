<template>
  <li class="main" :style="childStyles">
    <!-- <li class="main"> -->
    <div class="comment">
      <div class="comment-title">
        <a class="collapse" href="#" @click.prevent="toggle = !toggle">[-]</a>
        <p class="username">{{ item.uname }}</p>
        <span class="rating">+32</span>
      </div>
      <p v-if="toggle">{{ item.body }}</p>
    </div>
    <div class="vote" v-if="toggle">
      <button class="btn upvote">^</button>
      <button class="btn downvote">^</button>
      <button class="reply">Reply</button>
    </div>
  </li>

  <template v-if="item.children">
    <single-comment v-for="item in item.children" :key="item.id" :item="item" />
  </template>
</template>

<script>
export default {
  name: 'SingleComment',
  props: ['item'],
  data() {
    return {
      toggle: true,
    };
  },
  computed: {
    childStyles() {
      return { width: 50 - 6 * this.item.depth + 'rem' };
    },
  },
};
</script>

<style scoped>
a {
  color: black;
}
.main {
  list-style: none;
  /* width: 50rem; */
  margin: 2rem 0 2rem auto;
  padding: 0 1rem;
  border-left: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
}
.comment {
  background: white;
  border-radius: 10px;
  margin: 0.25rem 0;
  padding: 0.5rem;
}
.comment-title {
  font-size: 1rem;
  display: flex;
  padding-bottom: 0.25rem;
}
.collapse {
  display: inline;
}
.username {
  display: inline;
  margin: 0 0.25rem;
  font-weight: bold;
}
.rating {
  font-size: 0.85em;
}
.vote {
  display: flex;
}
.btn {
  width: 30px;
}
.downvote {
  transform: rotate(180deg);
}
.reply {
  display: flex;
}
</style>
