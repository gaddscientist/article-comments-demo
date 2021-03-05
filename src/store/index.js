import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      comments: [],
    };
  },
  mutations: {
    addNewComment(state, payload) {
      state.comments.push({
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
      });
    },
    updateComments(state, payload) {
      state.comments = payload;
    },
  },
  actions: {
    async postComment(context, payload) {
      const rowsAffected = await fetch('http://localhost:5000/article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
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
        }),
      });

      console.log(rowsAffected);
      if (rowsAffected > 0) {
        context.commit('addNewComment', payload);
      }
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
  },
  getters: {
    getComments(state) {
      return state.comments.reverse();
    },
    hasComments(state) {
      return state.comments && state.comments.length > 0;
    },
  },
  modules: {},
});
