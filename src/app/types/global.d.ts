declare module '*.scss' {
  type IClassNames = Record<string, string>

  const classnames: IClassNames
  export = classnames
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';

declare module '*.svg' {
  import type React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare const __IS_DEV__: boolean
