<template>
  <div id="app">
    <appHeader />
    <router-view />
    <appFooter/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import AppHeader from '@/components/AppHeader.vue';
  import AppFooter from '@/components/AppFooter.vue';

  @Component({
    components: { AppHeader, AppFooter },
  })
  export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  font-family: inherit;
  font-size: inherit;
  border: 1px solid grey;
  background: transparent;
  cursor: pointer;
  padding: 4px 8px;
}
button:hover {
  border-color: black;
}
</style>
