<template>
  <li class="main" :style="childStyles">
    <!-- <li class="main"> -->
    <div class="comment">
      <div class="comment-title">
        <a class="collapse" href="#" @click.prevent="isVisible = !isVisible"
          >[-]</a
        >
        <p class="username">{{ item.uname }}</p>
        <span class="rating">{{ item.date ? item.date : 'n/a' }}</span>
      </div>
      <p v-if="isVisible">{{ item.body }}</p>
    </div>
    <div class="vote" v-if="isVisible">
      <button class="btn upvote">^</button>
      <button class="btn downvote">^</button>
      <button class="reply">Reply</button>
    </div>
  </li>

  <template v-if="item.children && isVisible">
    <single-comment
      v-for="item in item.children"
      :key="item.id"
      :item="item"
      :visible="isVisible"
    />
  </template>
</template>

<script>
export default {
  name: 'SingleComment',
  props: ['item'],
  data() {
    return {
      isVisible: true,
    };
  },
  computed: {
    childStyles() {
      return { 'max-width': 50 - 6 * this.item.depth + 'rem' };
    },
    date() {
      return (
        this.item.date.toLocaleDateString('en-US') +
        ' ' +
        this.item.date.getHours() +
        ':' +
        this.item.date.getMinutes()
      );
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
  margin: 0 0 0 auto;
  padding: 1rem 1rem 1rem 1rem;
  /* border: 1px solid #aaa; */
}
.comment {
  background: white;
  border-radius: 10px;
  margin: 0 0;
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
