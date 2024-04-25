<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <div class="counter">
    <h2>Count: {{ count }}</h2>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
  </div>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const count = ref(0)

    function increment() {
      count.value++
    }

    function decrement() {
      count.value--
    }

    function reset() {
      count.value = 0
    }

    return {
      count,
      increment,
      decrement,
      reset,
    };
  }
})
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
