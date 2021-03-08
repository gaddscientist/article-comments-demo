import { createStore } from 'vuex';

import commentsModule from './modules/comments/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    comments: commentsModule,
    auth: authModule,
  },
});

export default store;
