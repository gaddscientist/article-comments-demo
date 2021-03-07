import { createStore } from 'vuex';
// import * as stuff from '../../comments';

export default createStore({
  state() {
    return {
      comments: [],
      // comments: stuff.default,
      loggedIn: false,
      userId: '',
    };
  },
  mutations: {
    addNewComment(state, payload) {
      state.comments.push(payload);
    },
    updateComments(state, payload) {
      state.comments = payload;
    },
    setUserId(state, payload) {
      state.userId = payload.userId;
      if (payload.userId) {
        state.loggedIn = true;
      } else {
        state.loggedIn = false;
      }
    },
  },
  actions: {
    async postComment(context, payload) {
      let structuredPost = structurePostObject(payload);
      console.log(structuredPost.timestamp);
      console.log(typeof structuredPost.timestamp);
      const newPostIdJSON = await fetch('http://localhost:5000/article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(structuredPost),
      });

      const newPostId = await newPostIdJSON.json();
      structuredPost.post_id = newPostId;

      context.commit('addNewComment', structurePostObject);
    },
    async loadComments(context) {
      const commentsJSON = await fetch('http://localhost:5000/article', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const comments = await commentsJSON.json();
      console.log(comments);
      context.commit('updateComments', comments);
    },
    updateUserId(context, payload) {
      context.commit('setUserId', payload);
    },
  },
  getters: {
    getComments(state) {
      return state.comments.reverse();
    },
    hasComments(state) {
      return state.comments && state.comments.length > 0;
    },
    isLoggedIn(state) {
      return state.loggedIn;
    },
    getUser(state) {
      return state.userId;
    },
  },
  modules: {},
});

function structurePostObject(payload) {
  return {
    uname: payload.uname,
    depth: payload.depth,
    commentBody: payload.commentBody,
    timestamp: new Date()
      .toLocaleString('en-US', {
        year: '2-digit',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })
      .split(',')
      .join(''),
    parentId: payload.parentId ? payload.parentId : null,
  };
}
