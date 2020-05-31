<template>
    <div>
        <h3>Tone.Player</h3>
        <button @click="click">{{buttonText}}</button>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Player } from "tone";

    @Component
    export default class TonePlayer extends Vue {
        audioPlayer = undefined
        buttonText = 'Play'

        public created() {
            this.audioPlayer = new Player('https://api.soundcloud.com/tracks/672555005/stream?client_id=1745017edcfeb72a175c95614a1cc212')
            this.$mainAudio.toMaster(this.audioPlayer)
        }

        public click() {
            if (this.audioPlayer.state == 'started') {
                this.audioPlayer.stop()
                this.buttonText = 'Play'
            } else {
                this.audioPlayer.volume.value = 4
                this.audioPlayer.start()
                this.buttonText = 'Stop'
            }
        }
    }
</script>
