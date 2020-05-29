/**
 * Added typing.d.ts to src directory since that is where TypeScript is compiling code from which we configured in tsconfig.json
 */

/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by webpack
 */
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string
  const svgComponent: SvgrComponent
  export default svgUrl
  export { svgComponent as ReactComponent }
}

declare module '*.png'
declare module '*.jpg'
declare module '*.json'

declare module 'check-prop-types'
