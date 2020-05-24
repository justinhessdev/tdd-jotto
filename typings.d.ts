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

declare namespace jest {
  interface AsymmetricMatcher {
    $$typeof: Symbol
    sample?: string | RegExp | object | Array<any> | Function
  }

  type Value = string | number | RegExp | AsymmetricMatcher | undefined

  interface Options {
    media?: string
    modifier?: string
    supports?: string
  }

  interface Matchers<R> {
    toBeInTheDocument(property: string, value?: Value, options?: Options): R
  }
}
