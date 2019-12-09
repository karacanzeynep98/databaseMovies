<template>
  <div id="app">
    <SearchDatabase></SearchDatabase>
  </div>
</template>

<script>
import SearchDatabase from './components/SearchDB.vue';

export default {
  name: 'app',
  components: {
    SearchDatabase,
  },
  data() {
  return {
    }
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
</style>
