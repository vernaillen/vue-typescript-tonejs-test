import { PianoRollSVGVisualizer } from '@magenta/music';

export default class PianoRoll {

    public audioContext: AudioContext
    public viz: PianoRollSVGVisualizer

    constructor(twinkle) {
        const pianoRollElement = document.getElementById('pianoRoll')
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.viz = new PianoRollSVGVisualizer(twinkle, svg as SVGSVGElement)
        pianoRollElement.appendChild(svg);
    }

    redraw(note) {
        this.viz.redraw(note, true)
    }
}


