<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ShowData></ShowData>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ShowData from './components/ShowData.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    ShowData
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
