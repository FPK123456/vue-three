<template>
  <FeaturePage msg="Welcome to Your Vue3.js App"/>
  <!-- 核心路由管理: App作为Vue项目中的门面根组件,与其手下
  若干个路由界面的联接靠的就是这个router-view -->
  <router-view></router-view>
</template>

<script>
// 根组件(App.vue)中也可以提前定义组件插入,跟其一起扮演vue项目中的的门面
// 例如: 公共导航栏、公共logo、等
import FeaturePage from './components/FeaturePage.vue'

export default {
  name: 'App',
  components: {
    FeaturePage
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
  /* margin-top: 60px; */
}
</style>
