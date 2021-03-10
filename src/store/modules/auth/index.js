export default {
  state() {
    return {
      loggedIn: sessionStorage.getItem('loggedIn') || false,
      username: sessionStorage.getItem('username') || false,
      error: null,
    };
  },
  mutations: {
    setUsername(state, payload) {
      // Clears username if one is not specified
      state.username = payload.username;
      sessionStorage.setItem('username', payload.username);

      // If called without a username, user is logging out
      if (payload.username) {
        state.loggedIn = true;
        sessionStorage.setItem('loggedIn', true);
      } else {
        state.loggedIn = false;
        sessionStorage.removeItem('loggedIn');
        sessionStorage.removeItem('username');
      }
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    clearUsername(context) {
      context.commit('setUsername', { username: '' });
    },
    setError(context, payload) {
      context.commit('setError', payload);
    },
    clearError(context) {
      context.commit('setError', null);
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

      const msg = await result.json();
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
    getError(state) {
      return state.error;
    },
  },
};
