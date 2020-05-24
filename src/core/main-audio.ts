import * as Tone from "tone";

export default class MainAudio {

    public audioContext: AudioContext;
    private analysers: AnalyserNode[] = [];

    constructor() {
        this.audioContext = new AudioContext();
        Tone.setContext(this.audioContext)
    }

    public toMaster(this: MainAudio, audioNode: any): void {
        this.analysers.forEach(function (analyser) { audioNode.fan(analyser)})
        audioNode.toMaster()
    }

    public addAnalyser(analyser: AnalyserNode) {
        this.analysers.push(analyser)
    }
}
