<template>
    <knob-control
            class="knob-control"
            :min="min"
            :max="max"
            :size="75"
            primary-color="#E844C3"
            secondary-color="#E7B6DC"
            text-color="#E844C3"
            v-model="knobValue">
    </knob-control>
</template>

<script lang="ts">
    import {Component, Prop, Watch, Vue} from "vue-property-decorator";
    import KnobControl from 'vue-knob-control'

    @Component({
        components: { KnobControl }
    })
    export default class Knob extends Vue {
        @Prop({ required: true }) private input!: number
        @Prop({ required: false, default: 0 }) private min!: number
        @Prop({ required: false, default: 127 }) private max!: number

        knobValue = this.input

        @Watch('knobValue')
        onKnobValueChanged(value: number) {
            this.$emit('changed', value)
        }
    }
</script>

<style scoped>
    .knob-control {
        display: inline-block;
        margin: 0 10px;
    }
</style>
