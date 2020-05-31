<template>
    <div>
        <h3>Tone.Player</h3>
        Enter a SoundCloud URL:<br/>
        <input id="trackUrl" v-model="trackUrl"/> <button @click="loadUrl">Load</button>
        <br/><br/>
        <button @click="click" :disabled="loading">{{buttonText}}</button>
        <br/><br/>
        <p v-if="soundCloudData">
            <a :href="soundCloudData.permalink_url" target="_blank">{{soundCloudData.title}}</a><br/><br/>
            <a v-if="soundCloudData.artwork_url" :href="soundCloudData.permalink_url" target="_blank">
                <img :src="soundCloudData.artwork_url"/>
            </a><br/>
            <span v-if="soundCloudData.label_name">{{soundCloudData.label_name}}<br/></span>
            posted by <a :href="userUrl(soundCloudData.user.username)" target="_blank">{{soundCloudData.user.username}}</a><br/><br/>
            <span v-if="soundCloudData.description">{{soundCloudData.description}}</span>
            <br/><br/>
        </p>
        <p v-if="loadingError">
            {{loadingError}}
        </p>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Player } from "tone";
    import axios from 'axios';

    @Component
    export default class TonePlayer extends Vue {
        audioPlayer
        buttonText = 'Play'
        trackUrl = 'https://soundcloud.com/woutervernaillen/tech-house-swing-tryout'
        clientId = '1745017edcfeb72a175c95614a1cc212'
        loading = true
        soundCloudData
        loadingError = ''

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
            this.soundCloudData = null
            this.loading = true
            this.buttonText = 'Loading...'
            axios
                .get('https://api.soundcloud.com/resolve.json?url=' + this.trackUrl + '&client_id=' + this.clientId)
                .then(result => (
                    this.soundCloudData = result.data,
                    this.audioPlayer = new Player(result.data.stream_url + "?client_id=" + this.clientId),
                    this.$mainAudio.toMaster(this.audioPlayer)
                ))
                .catch(error => {
                    this.loadingError = error
                    console.log(error)
                })
                .finally(() => (
                    this.loading = false,
                    this.buttonText = 'Play'
                ))
        }
        public userUrl(id) {
            return 'https://soundcloud.com/' + id
        }
    }
</script>

<style scoped>
    #trackUrl {
        padding: 7px;
        width: 500px;
        background-color: #f5f5f5;
    }
</style>
