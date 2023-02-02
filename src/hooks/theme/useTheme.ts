import { Theme, themeState } from '@/states/theme'
import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useLoading } from '../loading/useLoading'
import { THEME_LOCALSTORAGE_KEY } from './const'

export const useTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState)
  const { setLoading } = useLoading()
  const toggleTheme = useCallback(() => {
    setLoading(true)
    setTimeout(() => {
      const newTheme = theme === 'light' ? 'dark' : 'light'
      setTheme(newTheme)
      localStorage.setItem(THEME_LOCALSTORAGE_KEY, newTheme)
    }, 500)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [setLoading, setTheme, theme])

  useEffect(() => {
    const storagedTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY)
    setTheme(
      !!storagedTheme
        ? (storagedTheme as Theme)
        : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    )
  }, [setTheme])

  return { theme, toggleTheme }
}
