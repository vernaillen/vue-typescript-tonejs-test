<template>
    <div id="appHeader">
        <audioMotion :mainAudio="mainAudio"/>
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
    import AudioMotion from '@/components/AudioMotion.vue';

    @Component({
        components: { AudioMotion }
    })
    export default class AppHeader extends Vue {
        @Prop(MainAudio) private mainAudio!: MainAudio;
    }
</script>

<style scoped>

</style>
