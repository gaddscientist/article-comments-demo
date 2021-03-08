export default {
  state() {
    return {
      loggedIn: false,
      username: '',
      error: null,
    };
  },
  mutations: {
    setUsername(state, payload) {
      // Clears username if one is not specified
      state.username = payload.username;

      // If called without a username, user is logging out
      payload.username ? (state.loggedIn = true) : (state.loggedIn = false);
    },
  },
  actions: {
    clearUsername(context) {
      context.commit('setUsername', { username: '' });
    },
    async login(context, payload) {
      const result = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: payload.username,
          password: payload.password,
        }),
      });

      const parsedResult = await result.json();
      const msg = parsedResult.message;
      if (msg === 'Success') {
        context.commit('setUsername', { username: payload.username });
      } else {
        context.commit('setError', msg);
      }
    },
    async signup(context, payload) {
      const result = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: payload.username,
          password: payload.password,
          passwordRE: payload.passwordRE,
        }),
      });

      const parsedResult = await result.json();
      const msg = parsedResult.message;
      if (msg === 'Success') {
        context.commit('setUsername', { username: payload.username });
      } else {
        context.commit('setError', msg);
      }
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.loggedIn;
    },
    getUser(state) {
      return state.username;
    },
  },
};
