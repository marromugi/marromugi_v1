import React from 'react'

export type FlexboxProps = {
  direction?: 'row' | 'column'
  items?: NonNullable<JSX.IntrinsicElements['div']['style']>['alignItems']
  justify?: NonNullable<JSX.IntrinsicElements['div']['style']>['justifyContent']
  gap?: string
  width?: string
  height?: string
  children: React.ReactNode
}
