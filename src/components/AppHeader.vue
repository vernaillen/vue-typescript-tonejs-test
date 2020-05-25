<template>
    <div id="appHeader">
        <audioMotionAnalyzer :audioCtx="mainAudio.audioContext"/>
        <!--
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/synth">Synth</router-link> |
            <router-link to="/player">AudioPlayer</router-link>
        </div>
        -->
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import MainAudio from '@/core/main-audio';

    @Component
    export default class AppHeader extends Vue {
        @Prop(MainAudio) private mainAudio!: MainAudio;

        public mounted() {
            this.mainAudio.addAnalyser(this.$audioMotion.getAnalyzer())
        }
    }
</script>

<style scoped>

</style>
