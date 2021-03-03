<template>
  <li class="main">
    <div class="comment">
      <div class="comment-title">
        <a class="collapse" href="#" @click.prevent="toggle = !toggle">[-]</a>
        <p class="username">{{ uname }}</p>
        <span class="rating">+32</span>
      </div>
      <p v-if="toggle">{{ body }}</p>
    </div>
    <div class="vote" v-if="toggle">
      <button class="btn upvote">^</button>
      <button class="btn downvote">^</button>
      <button class="reply">Reply</button>
    </div>
  </li>
  <!-- ADD COMMENT REPLY HERE BUT ONLY SHOW CONDITIONALLY -->
</template>

<script>
export default {
  props: ['uname', 'body'],
  data() {
    return {
      toggle: true,
    };
  },
};
</script>

<style scoped>
a {
  color: black;
}
.main {
  list-style: none;
  width: 94%;
  max-width: 50rem;
  margin: 2rem auto;
  padding: 0 1rem 1rem;
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
