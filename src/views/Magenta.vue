<template>
  <div class="magenta">
    <magentaPlayer/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import MagentaPlayer from "@/components/MagentaPlayer.vue";

  @Component({
    components: { MagentaPlayer },
  })
  export default class Magenta extends Vue {}
</script>
