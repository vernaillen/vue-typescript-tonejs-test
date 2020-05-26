import { AudioMotion } from "vue-audiomotion-analyzer";

export interface AudioMotion {
    getAnalyzer(): AnalyserNode;
}

declare module 'vue/types/vue' {
    interface Vue {
        $audioMotion: AudioMotion;
    }
}
