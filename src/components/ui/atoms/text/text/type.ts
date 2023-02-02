import { semantics } from '@/const/colors/semantics'
import tokens from '@/const/tokens/tokens'

export type TextProps = {
  children: string
  color?: keyof typeof semantics.text.body
  size?: keyof (typeof tokens)['fontsize']
  weight?: keyof (typeof tokens)['fontweight']
  family?: keyof (typeof tokens)['fontfamily']
  space?: {
    x?: keyof (typeof tokens)['letterSpacing']
    y?: keyof (typeof tokens)['lineHeight']
  }
}
