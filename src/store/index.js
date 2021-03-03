import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      comments: [
        {
          uname: 'Bryan',
          body: 'This is bryans comment',
        },
        {
          uname: 'Stuart',
          body: 'This is stuarts comment',
        },
        {
          uname: 'Mark',
          body: 'This is marks comment',
        },
        {
          uname: 'Karyn',
          body: 'This is karyns comment',
        },
        {
          uname: 'Chelsea',
          body: 'This is chelseas comment',
        },
        {
          uname: 'Tanner',
          body: 'This is tanners comment',
        },
      ],
    };
  },
  mutations: {},
  actions: {},
  getters: {
    getComments(state) {
      return state.comments;
    },
  },
  modules: {},
});
