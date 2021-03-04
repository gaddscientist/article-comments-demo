import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      id: 22,
      comments: [
        {
          id: 1,
          uname: 'Bryan',
          depth: 0,
          body:
            'Bryans Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
          children: [
            {
              id: 2,
              uname: 'Stuart',
              depth: 1,
              body:
                'Stuarts Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
              children: [
                {
                  id: 3,
                  uname: 'Mark',
                  depth: 2,
                  body:
                    'Marks Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
                },
                {
                  id: 4,
                  uname: 'Karyn',
                  depth: 2,
                  body:
                    'Karyens Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
                },
                {
                  id: 5,
                  uname: 'Chelsea',
                  depth: 2,
                  body:
                    'Chelseas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
                },
                {
                  id: 6,
                  uname: 'Tanner',
                  depth: 2,
                  body:
                    'Tanners Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
                },
              ],
            },
            {
              id: 3,
              uname: 'Mark',
              depth: 1,
              body:
                'Marks Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
            },
            {
              id: 4,
              uname: 'Karyn',
              depth: 1,
              body:
                'Karyens Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
            },
            {
              id: 5,
              uname: 'Chelsea',
              depth: 1,
              body:
                'Chelseas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
            },
            {
              id: 6,
              uname: 'Tanner',
              depth: 1,
              body:
                'Tanners Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
            },
          ],
        },
        {
          id: 7,
          uname: 'Stuart',
          depth: 0,
          body:
            'Stuarts Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
          children: [
            {
              id: 8,
              uname: 'Mark',
              depth: 1,
              body:
                'Marks Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
            },
            {
              id: 9,
              uname: 'Karyn',
              depth: 1,
              body:
                'Karyens Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
            },
            {
              id: 10,
              uname: 'Chelsea',
              depth: 1,
              body:
                'Chelseas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
            },
            {
              id: 11,
              uname: 'Tanner',
              depth: 1,
              body:
                'Tanners Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
            },
          ],
        },
        {
          id: 12,
          uname: 'Mark',
          depth: 0,
          body:
            'Marks Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
          children: [
            {
              id: 13,
              uname: 'Karyn',
              depth: 1,
              body:
                'Karyens Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
            },
            {
              id: 14,
              uname: 'Chelsea',
              depth: 1,
              body:
                'Chelseas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
            },
            {
              id: 15,
              uname: 'Tanner',
              depth: 1,
              body:
                'Tanners Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
            },
          ],
        },
        {
          id: 16,
          uname: 'Karyn',
          depth: 0,
          body:
            'Karyens Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
          children: [
            {
              id: 17,
              uname: 'Chelsea',
              depth: 1,
              body:
                'Chelseas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
            },
            {
              id: 18,
              uname: 'Tanner',
              depth: 1,
              body:
                'Tanners Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
            },
          ],
        },
        {
          id: 19,
          uname: 'Chelsea',
          depth: 0,
          body:
            'Chelseas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
          children: [
            {
              id: 20,
              uname: 'Tanner',
              depth: 1,
              body:
                'Tanners Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
            },
          ],
        },
        {
          id: 21,
          uname: 'Tanner',
          depth: 0,
          body:
            'Tanners Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe illo dolores laudantium, quidem, laboriosam suscipit culpa obcaecati quos minus consequuntur iste a delectus ea odit, facere accusamus deleniti? Rem.',
        },
      ],
    };
  },
  mutations: {
    addNewComment(state, payload) {
      state.comments.push({
        id: state.id++,
        uname: payload.uname,
        depth: payload.depth,
        body: payload.body,
        date: new Date().toLocaleString('en-US', {
          year: '2-digit',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        }),
      });
    },
  },
  actions: {
    postComment(context, payload) {
      context.commit('addNewComment', payload);
    },
  },
  getters: {
    getComments(state) {
      return state.comments.reverse();
    },
  },
  modules: {},
});
