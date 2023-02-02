import { semantics } from '@/const/colors/semantics'
import React from 'react'

export type ButtonProps = {
  color?: keyof typeof semantics.button | 'none'
  size?: 'lg' | 'md'
  children: React.ReactNode | string
  onClick: () => void
}
