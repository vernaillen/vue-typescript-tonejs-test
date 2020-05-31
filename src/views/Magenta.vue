<template>
  <div class="magenta">
    <magentaPlayer/>
    <magentaTwinkle/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import MagentaPlayer from "@/components/MagentaPlayer.vue";
  import MagentaTwinkle from "@/components/MagentaTwinkle.vue";

  @Component({
    components: { MagentaPlayer, MagentaTwinkle },
  })
  export default class Magenta extends Vue {}
</script>
