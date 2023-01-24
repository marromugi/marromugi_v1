import { SemanticsColor } from '@/const/colors/types'
import { Theme } from '@/states/theme'

export const getColor = (semantics: SemanticsColor, theme: Theme) => {
  return semantics[theme] !== undefined ? semantics[theme].value : 'initial'
}
