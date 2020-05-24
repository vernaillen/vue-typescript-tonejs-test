/**
 * Couple of additional type definitions (to cover for incomplete typings
 * here and there, and more generally just to make Typescript happy).
 */

declare module '!raw-loader*' {
  const contents: string;
  export default contents;
}

declare module '!file-loader*' {
  const contents: string;
  export = contents;
}

declare module 'tone';
declare module 'audiomotion-analyzer';
