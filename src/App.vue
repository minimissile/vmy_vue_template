<template>
  <div id="app">
    <router-view v-if="!$route.meta.keepAlive"/>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
  }
</style>
