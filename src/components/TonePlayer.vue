<template>
    <div>
        <h3>Tone.Player</h3>
        <a @click="start">Play</a> - <a @click="stop">Stop</a>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import * as Tone from "tone";

    @Component
    export default class TonePlayer extends Vue {

        private audioPlayer = undefined

        public created() {
            this.audioPlayer = new Tone.Player('https://api.soundcloud.com/tracks/672555005/stream?client_id=1745017edcfeb72a175c95614a1cc212')
            this.$mainAudio.toMaster(this.audioPlayer)
        }

        public start() {
            this.audioPlayer.volume.value= 4
            this.audioPlayer.start()
        }
        public stop() {
            this.audioPlayer.stop()
        }
    }
</script>
