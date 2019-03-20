<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" class="logo">
    <HelloWorld msg="点击我发送请求"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo{
	width: 100px;
	height: 100px;
}
</style>
