import MainAudio from "./mainaudio";

declare module 'vue/types/vue' {
    interface Vue {
        $mainAudio: MainAudio;
    }
}
