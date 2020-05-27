<template>
    <div id="appHeader">
        <audioMotionAnalyzer :audioCtx="$mainAudio.audioContext"/>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/tonejs">Tone.js</router-link> |
            <router-link to="/magentajs">Magenta.js</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class AppHeader extends Vue {

        public mounted() {
            this.$mainAudio.addAnalyser(this.$audioMotion.getAnalyzer())
        }
    }
</script>

<style scoped>
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
