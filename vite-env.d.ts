/// <reference types="vite/client" />

declare module '*.svg?react' {
  import { FunctionComponent, SVGProps } from 'preact';
  const content: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default content;
}