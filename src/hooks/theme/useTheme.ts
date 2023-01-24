import { themeState } from '@/states/theme'
import { useCallback } from 'react'
import { useRecoilState } from 'recoil'

export const useTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState)
  const toggle = useCallback(
    () => setTheme(theme === 'light' ? 'dark' : 'light'),
    [setTheme, theme]
  )

  return { theme, toggle }
}
