<template>
  <teleport to="body">
    <transition name="backdrop">
      <div v-if="show" @click="close" class="backdrop"></div>
    </transition>
    <transition name="dialog">
      <dialog open v-if="show">
        <header>
          <h2>{{ title }}</h2>
          <button @click="close">X</button>
        </header>
        <div class="auth-form">
          <auth-form :mode="mode" @close="close" />
        </div>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
import AuthForm from './AuthForm.vue';
export default {
  components: {
    AuthForm,
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    mode: {
      type: String,
      required: true,
    },
  },
  computed: {
    title() {
      return this.mode === 'login' ? 'Login' : 'Sign Up';
    },
  },
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}
.auth-form {
  margin: 2rem;
}
dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  /* border-radius: 10px; */
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

header {
  background-color: #333;
  color: white;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}
button {
  height: 2rem;
  width: 2rem;
  font-size: 1rem;
  font-weight: bold;
  background: #888;
  border: none;
  border-radius: 0.5rem;
  color: rgb(177, 64, 64);
}
button:hover {
  background: #666;
  cursor: pointer;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.1);
}

.dialog-enter-active {
  transition: all 0.4s ease-out;
}
.dialog-leave-active {
  transition: all 0.4s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

.backdrop-enter-active {
  transition: all 0.5s ease-out;
}
.backdrop-leave-active {
  transition: all 0.5s ease-in;
}

.backdrop-enter-to,
.backdrop-leave-from {
  opacity: 1;
}
</style>
