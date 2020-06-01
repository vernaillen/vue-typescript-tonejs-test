<template>
    <div id="appHeader">
        <audioMotionAnalyzer :options="defaultOptions" @audioMotion="connectAnalyzer"/>
        <audioMotionAnalyzer :options="analyzerOptions" @audioMotion="connectAnalyzer"/>
        <audioMotionConfig v-if="showConfig" />
        <button @click="toggleConfig">{{buttonText}}</button>
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
        showConfig = false
        buttonText = 'show analyzer config'
        defaultOptions = {
            audioCtx: this.$mainAudio.audioContext,
            height: 150
        }
        analyzerOptions = {
            audioCtx: this.$mainAudio.audioContext,
            reflexRatio: 0.3,
            reflexAlpha: 0.3,
            showLeds: true,
            mode: 3,
            gradient: 'rainbow',
            height: 300
        }
        public connectAnalyzer(audioMotion) {
            this.$mainAudio.addAnalyser(audioMotion.getAnalyzer())
        }
        toggleConfig() {
            this.showConfig = !this.showConfig
            if (this.showConfig) {
                this.buttonText = 'hide config'
            } else {
                this.buttonText = 'show analyzer config'
            }
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
