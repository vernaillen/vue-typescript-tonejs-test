<template>
    <div id="appHeader">
        <audioMotionAnalyzer :options="analyzerOptions"/>
        <audioMotionConfig />
        <!--
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/tonejs">Tone.js</router-link> |
            <router-link to="/magentajs">Magenta.js</router-link>
        </div>
        -->
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class AppHeader extends Vue {
        analyzerOptions = {
            audioCtx: this.$mainAudio.audioContext,
            reflexRatio: 0.3,
            reflexAlpha: 0.3,
            showLeds: true,
            mode: 3,
            gradient: 'rainbow',
            height: 400
        }
        public mounted() {
            this.$mainAudio.addAnalyser(this.$audioMotion.getAnalyzer())
        }
    }
</script>

<style scoped>
    #nav {
        padding: 30px;
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
