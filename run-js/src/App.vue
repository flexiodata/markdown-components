<template>
  <div id="app">
    <div style="text-align: center; margin-bottom: 2rem">
      <img src="./assets/logo.png">
      <h1>RunJs Markdown Component</h1>
    </div>
    <run-javascript style="margin: 2rem 0" code="alert('Hello, World!')" />
    <run-javascript style="margin: 2rem 0" code="console.log('Hello, World!')" />
    <run-javascript style="margin: 2rem 0" code="function() { return 'Hello, World!' }" />
    <run-javascript style="margin: 2rem 0" code="function() { return { foo: 'bar' } }" />
  </div>
</template>

<script>
import RunJavascript from './components/RunJavascript.vue'

export default {
  name: 'app',
  components: {
    RunJavascript
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  margin: 4rem auto;
  max-width: 60rem;
}
</style>
