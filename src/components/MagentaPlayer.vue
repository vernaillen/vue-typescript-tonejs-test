<template>
    <div class="magentaPlayer">
        <p><a href="https://magenta.tensorflow.org/music-vae" alert="_blank">Magenta MusicVAE</a></p>
        <button @click="click">{{buttonText}}</button>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {MusicVAE, Player} from "@magenta/music/node";

    @Component
    export default class MagentaPlayer extends Vue {
        magentaPlayer: Player
        musicVAE: MusicVAE
        buttonText = 'Play'

        public created() {
            this.musicVAE = new MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_2bar_small');
            this.magentaPlayer = new Player(true, {
                run: (note) => {
                    console.log(note)
                },
                stop: () => {
                    this.buttonText = 'Play'
                }
            });

            this.$mainAudio.toMaster(this.magentaPlayer.bassSynth)
            this.$mainAudio.toMaster(this.magentaPlayer.polySynth)
        }
        public click() {
            console.log(this.magentaPlayer.isPlaying())
            if (this.magentaPlayer.isPlaying()) {
                this.magentaPlayer.stop()
                this.buttonText = 'Play'
            } else {
                this.buttonText = 'Loading...'
                this.musicVAE
                    .initialize()
                    .then(() => this.musicVAE.sample(1))
                    .then(samples => {
                        this.magentaPlayer.resumeContext();
                        this.magentaPlayer.start(samples[0])
                        this.buttonText = 'Stop'
                    });
            }
        }
    }
</script>
