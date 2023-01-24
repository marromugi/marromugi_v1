import { Theme } from '@/states/theme'
import DesignToken from '@/const/tokens/tokens'

export type SemanticsColor = {
  [key in Theme]: (typeof DesignToken.crow)[100]
}
