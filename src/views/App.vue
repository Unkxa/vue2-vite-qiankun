<template>
  <div id="app-validator" class="app-validator">
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <img alt="vite logo" class="imgs" src="@/asscet/images/vite.svg">
    <img alt="ts logo" class="imgs" src="@/asscet/images/typescript.svg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h2>Vite + Vue2 + qiankun Sub App</h2>
    <a>router test_A</a>&nbsp&nbsp&nbsp&nbsp
    <a>router test_B</a>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
  }
}
</script>

<style lang="less" scoped>
.app-validator { 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
    .imgs{
        width:100px;
        padding:20px;
    }
}
</style>