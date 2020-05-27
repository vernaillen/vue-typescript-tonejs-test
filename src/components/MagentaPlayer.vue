<template>
    <div class="magentaPlayer">
        <p><a href="https://magenta.tensorflow.org/music-vae" alert="_blank">Magenta MusicVAE</a></p>
        <a @click="start">Play</a> - <a @click="stop">Stop</a>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {MusicVAE, Player} from "@magenta/music/node";

    @Component
    export default class MagentaPlayer extends Vue {
        private magentaPlayer = undefined
        private musicVAE = undefined

        public created() {
            this.musicVAE = new MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_2bar_small');
            this.magentaPlayer = new Player();

            this.$mainAudio.toMaster(this.magentaPlayer.bassSynth)
            this.$mainAudio.toMaster(this.magentaPlayer.polySynth)
        }
        public start() {
            this.musicVAE
                .initialize()
                .then(() => this.musicVAE.sample(1))
                .then(samples => {
                    this.magentaPlayer.resumeContext();
                    this.magentaPlayer.start(samples[0])
                });
        }
        public stop() {
            this.magentaPlayer.stop()
        }
    }
</script>
