// import * as stuff from '../../../../comments.js';

export default {
  state() {
    return {
      comments: [],
      // comments: stuff.default,
    };
  },
  mutations: {
    addNewComment(state, payload) {
      state.comments.push(payload);
    },
    updateComments(state, payload) {
      state.comments = payload;
    },
  },
  actions: {
    async postComment(context, payload) {
      let structuredPost = structurePostObject(payload);
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
      context.commit('updateComments', comments);
    },
  },
  getters: {
    getComments(state) {
      return state.comments;
    },
    hasComments(state) {
      return state.comments && state.comments.length > 0;
    },
  },
};

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
