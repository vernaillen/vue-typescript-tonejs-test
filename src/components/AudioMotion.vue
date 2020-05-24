<template>
    <vueAudioMotion ref="audioMotion" :audioCtx="mainAudio.audioContext"/>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import MainAudio from '@/core/main-audio';
    import VueAudioMotion from '../plugins/vue-audiomotion'

    @Component({
        components: { VueAudioMotion }
    })
    export default class AudioMotion extends Vue {
        @Prop(MainAudio) private mainAudio!: MainAudio;

        async mounted() {
            this.mainAudio.addAnalyser(this.$refs.audioMotion.getAudioMotion()._analyzer)
        }
    }
</script>

<style scoped>

</style>
