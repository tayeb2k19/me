/// <reference types="vite/client" />

declare module '*.svg' | '*.jpg' {
  const content: string;
  export default content;