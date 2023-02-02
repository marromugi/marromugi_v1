import { semantics } from '@/const/colors/semantics'
import React from 'react'

export type BoxProps = {
  width?: string
  height?: string
  margin?: string
  padding?: string
  background?: keyof typeof semantics.background
  radius?: string
  position?: NonNullable<JSX.IntrinsicElements['div']['style']>['position']
  zIndex?: number
  children: React.ReactNode
}
