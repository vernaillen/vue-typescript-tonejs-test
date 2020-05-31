<template>
    <div>
        <h3>Tone.Player</h3>
        Enter a SoundCloud URL:<br/>
        <input v-model="trackUrl"/> <button @click="loadUrl">Load</button>
        <br/><br/>
        <button @click="click" :disabled="loading">{{buttonText}}</button>
        <br/><br/>
        {{songTitle}}<br/>
        {{songArtist}}<br/>
        {{songDescription}}
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Player } from "tone";
    import axios from 'axios';

    @Component
    export default class TonePlayer extends Vue {
        audioPlayer = undefined
        buttonText = 'Play'
        trackUrl = 'https://soundcloud.com/sinevibes/korg-dcm8-talking-lo-fi'
        clientId = '1745017edcfeb72a175c95614a1cc212'
        streamUrl = undefined
        loading = true
        songId = undefined
        songTitle = undefined
        songArtist = undefined
        songDescription = undefined

        public created() {
            this.buttonText = 'Loading...'
            this.getStreamUrl()
        }
        public click() {
            if (this.audioPlayer != null && this.audioPlayer.state == 'started') {
                this.stop()
            } else {
                this.start()
            }
        }
        public start() {
            this.audioPlayer.volume.value = 4
            this.audioPlayer.start()
            this.buttonText = 'Stop'
        }
        public stop() {
            this.audioPlayer.stop()
            this.buttonText = 'Play'
        }
        public loadUrl() {
            this.loading = true
            this.stop()
            this.getStreamUrl()
        }
        public getStreamUrl() {
            this.loading = true
            this.buttonText = 'Loading...'
            axios
                .get('https://api.soundcloud.com/resolve.json?url=' + this.trackUrl + '&client_id=' + this.clientId)
                .then(result => (
                    console.log(result),
                    this.songId = result.data.id,
                    this.songTitle = result.data.title,
                    this.songArtist = result.data.user.username,
                    this.songDescription = result.data.description,
                    this.streamUrl = result.data.stream_url + "?client_id=" + this.clientId,
                    this.audioPlayer = new Player(this.streamUrl),
                    this.$mainAudio.toMaster(this.audioPlayer)
                ))
                .catch(error => {
                    console.log(error)
                })
                .finally(() => (
                    this.loading = false,
                    this.buttonText = 'Play'
                ))
        }
    }
</script>
