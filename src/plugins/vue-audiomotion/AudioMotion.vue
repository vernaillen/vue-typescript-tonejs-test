<template>
  <div ref="audioMotion"></div>
</template>
<script>
import AudioMotionAnalyzer from "audiomotion-analyzer";

export default {
  props: ["stream", "options", "customGradients", "audioCtx"],
  data() {
    return {
      audioMotionObj: null
    };
  },
  mounted() {
    this.audioMotionElement = this.$refs.audioMotion;
    if (this.audioCtx) {
      this.audioMotionObj = new AudioMotionAnalyzer(
              this.audioMotionElement, {audioCtx: this.audioCtx}
      );
      // Set extra options as custom gradients
      if (this.customGradients) {
        this.customGradients.forEach(gradientObj => {
          this.audioMotionObj.registerGradient(
                  gradientObj.name,
                  gradientObj.options
          );
        });

        this.audioMotionObj.setOptions(this.options);
      }
    }
  },
  watch: {
    stream() {
      if (this.stream && this.stream.getAudioTracks().length) {
        const audioCtx = new AudioContext();
        audioCtx.createMediaStreamSource(this.stream);
        this.audioMotionObj = new AudioMotionAnalyzer(
          this.audioMotionElement
          //this.options
        );

        // Set extra options as custom gradients
        if (this.customGradients) {
          this.customGradients.forEach(gradientObj => {
            this.audioMotionObj.registerGradient(
              gradientObj.name,
              gradientObj.options
            );
          });

          this.audioMotionObj.setOptions(this.options);
        }

        const audioStream = this.audioMotionObj.audioCtx.createMediaStreamSource(
          this.stream
        );
        audioStream.connect(this.audioMotionObj.analyzer);
      }
    },
    audioCtx() {
      console.log("setting audio context!!!!!")
      if (this.audioCtx) {
        this.audioMotionObj = new AudioMotionAnalyzer(
            this.audioMotionElement, {audioCtx: this.audioCtx}
        );
        // Set extra options as custom gradients
        if (this.customGradients) {
          this.customGradients.forEach(gradientObj => {
            this.audioMotionObj.registerGradient(
                    gradientObj.name,
                    gradientObj.options
            );
          });

          this.audioMotionObj.setOptions(this.options);
        }
      }
    }
  },
  methods: {
    getAudioMotion() {
      return this.audioMotionObj;
    }
  }
};
</script>

<style>
</style>
