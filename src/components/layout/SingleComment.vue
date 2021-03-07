<template>
  <li class="main" :style="childStyles">
    <!-- <li class="main"> -->
    <div class="comment">
      <div class="comment-title">
        <a class="collapse" href="#" @click.prevent="isVisible = !isVisible"
          >[-]</a
        >
        <p class="username">{{ item.uname }}</p>
        <span class="rating">{{ timestamp }}</span>
      </div>
      <collapse-transition easing="ease-in-out">
        <p v-if="isVisible">{{ item.body }}</p>
      </collapse-transition>
    </div>
    <collapse-transition easing="ease-in-out">
      <div class="vote" v-if="isVisible">
        <button class="btn upvote">^</button>
        <button class="btn downvote">^</button>
        <button class="reply" @click="toggleReply">Reply</button>
      </div>
    </collapse-transition>
    <div v-if="showReply">
      <create-comment
        :depth="item.depth"
        :parentId="item.post_id"
        @commentPosted="showReply = false"
      />
    </div>
  </li>

  <collapse-transition easing="ease-in-out">
    <div v-if="item.children && isVisible">
      <template v-if="item.children && isVisible">
        <single-comment
          v-for="item in item.children"
          :key="item.post_id"
          :item="item"
          :visible="isVisible"
        />
      </template>
    </div>
  </collapse-transition>
</template>

<script>
import CreateComment from './CreateComment.vue';
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue';

export default {
  components: {
    CreateComment,
    CollapseTransition,
  },
  name: 'SingleComment',
  props: ['item'],
  data() {
    return {
      isVisible: true,
      showReply: false,
    };
  },
  computed: {
    childStyles() {
      return { 'max-width': 50 - 6 * this.item.depth + 'rem' };
    },
    timestamp() {
      return new Date(this.item.timestamp).toLocaleString('en-US', {
        year: '2-digit',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
    },
  },
  methods: {
    toggleReply() {
      this.showReply = !this.showReply;
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
