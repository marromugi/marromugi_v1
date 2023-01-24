/**
 * Do not edit directly
 * Generated on Mon, 23 Jan 2023 13:09:37 GMT
 */

export default tokens

declare interface DesignToken {
  value: any
  name?: string
  comment?: string
  themeable?: boolean
  attributes?: {
    category?: string
    type?: string
    item?: string
    subitem?: string
    state?: string
    [key: string]: any
  }
  [key: string]: any
}

declare const tokens: {
  crow: {
    '100': DesignToken
    '200': DesignToken
    '300': DesignToken
    '500': DesignToken
    '700': DesignToken
    '800': DesignToken
    '900': DesignToken
  }
  frog: {
    '300': DesignToken
  }
  sns: {
    github: DesignToken
    twitter: DesignToken
  }
  bee: {
    '300': DesignToken
  }
  fish: {
    '700': DesignToken
  }
  white: DesignToken
}
