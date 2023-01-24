import tokens from '@/const/tokens/tokens'
import { SemanticsColor } from './types'

export const semantics = {
  text: {
    body: <SemanticsColor>{
      light: tokens.crow[900],
      dark: tokens.white,
    },
  },
  background: {
    primary: <SemanticsColor>{
      light: tokens.white,
      dark: tokens.crow[700],
    },
    secondary: <SemanticsColor>{
      light: tokens.crow[700],
      dark: tokens.crow[500],
    },
  },
}
