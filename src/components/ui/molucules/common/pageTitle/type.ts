import tokens from '@/const/tokens/tokens'
import React from 'react'

export type PageTitleProps = {
  title: string
  size?: keyof typeof tokens.fontsize
  children?: React.ReactNode
}
