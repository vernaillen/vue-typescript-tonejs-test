<template>
  <div class="tone">
    <tonePlayer/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import TonePlayer from "@/components/TonePlayer.vue";

  @Component({
    components: { TonePlayer },
  })
  export default class Magenta extends Vue {}
</script>
