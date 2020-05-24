<template>
  <div id="app">
    <appHeader :mainAudio="mainAudio"/>
    <router-view :mainAudio="mainAudio"/>
    <appFooter/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import AppHeader from '@/components/AppHeader.vue';
  import AppFooter from '@/components/AppFooter.vue';
  import MainAudio from '@/core/main-audio';

  @Component({
    components: { AppHeader, AppFooter },
  })
  export default class App extends Vue {

    private mainAudio: MainAudio;

    constructor() {
      super();
      this.mainAudio = new MainAudio();
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
