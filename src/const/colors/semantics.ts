import tokens from '@/const/tokens/tokens'
import { SemanticsColor } from './types'

export const semantics = {
  text: {
    body: {
      primary: <SemanticsColor>{
        light: tokens.kuroyuri[900],
        dark: tokens.lavender[50],
      },
      secondary: <SemanticsColor>{
        light: tokens.kuroyuri[300],
        dark: tokens.kuroyuri[500],
      },
      frontend: <SemanticsColor>{
        light: tokens.kuroyuri[900],
        dark: tokens.kuroyuri[200],
      },
      design: <SemanticsColor>{
        light: tokens.kuroyuri[900],
        dark: tokens.kuroyuri[200],
      },
      ml: <SemanticsColor>{
        light: tokens.kuroyuri[900],
        dark: tokens.kuroyuri[200],
      },
    },
    button: {
      primary: <SemanticsColor>{
        light: tokens.kuroyuri[0],
        dark: tokens.kuroyuri[900],
      },
      secondary: <SemanticsColor>{
        light: tokens.kuroyuri[900],
        dark: tokens.kuroyuri[0],
      },
    },
    visited: <SemanticsColor>{
      light: tokens.lavender[700],
      dark: tokens.marigold[300],
    },
  },
  background: {
    primary: <SemanticsColor>{
      light: tokens.kuroyuri[100],
      dark: tokens.lavender[600],
    },
    secondary: <SemanticsColor>{
      light: tokens.kuroyuri[0],
      dark: tokens.lavender[800],
    },
  },
  button: {
    primary: <SemanticsColor>{
      light: tokens.kuroyuri[800],
      dark: tokens.kuroyuri[200],
    },
    secondary: <SemanticsColor>{
      light: tokens.kuroyuri[200],
      dark: tokens.kuroyuri[800],
    },
    timeline: {
      frontend: <SemanticsColor>{
        light: tokens.kuroyuri[900],
        dark: tokens.kuroyuri[200],
      },
      design: <SemanticsColor>{
        light: tokens.kuroyuri[900],
        dark: tokens.kuroyuri[200],
      },
      ml: <SemanticsColor>{
        light: tokens.kuroyuri[900],
        dark: tokens.kuroyuri[200],
      },
    },
  },
  border: {
    primary: <SemanticsColor>{
      light: tokens.kuroyuri[200],
      dark: tokens.kuroyuri[700],
    },
    secondary: <SemanticsColor>{
      light: tokens.kuroyuri[200],
      dark: tokens.lavender[500],
    },
    outline: <SemanticsColor>{
      light: tokens.lavender[400],
      dark: tokens.marigold[400],
    },
  },
  icon: {
    theme: {
      icon: <SemanticsColor>{
        light: tokens.marigold[300],
        dark: tokens.lavender[800],
      },
      background: <SemanticsColor>{
        light: tokens.lavender[800],
        dark: tokens.marigold[200],
      },
    },
    menu: {
      icon: <SemanticsColor>{
        light: tokens.kuroyuri[900],
        dark: tokens.kuroyuri[100],
      },
      background: <SemanticsColor>{
        light: tokens.kuroyuri[100],
        dark: tokens.kuroyuri[900],
      },
    },
    blog: {
      icon: <SemanticsColor>{
        light: tokens.kuroyuri[900],
        dark: tokens.kuroyuri[100],
      },
      background: <SemanticsColor>{
        light: tokens.kuroyuri[100],
        dark: tokens.kuroyuri[900],
      },
    },
    product: {
      icon: <SemanticsColor>{
        light: tokens.kuroyuri[900],
        dark: tokens.kuroyuri[100],
      },
      background: <SemanticsColor>{
        light: tokens.kuroyuri[100],
        dark: tokens.kuroyuri[900],
      },
    },
    me: {
      icon: <SemanticsColor>{
        light: tokens.kuroyuri[900],
        dark: tokens.kuroyuri[100],
      },
      background: <SemanticsColor>{
        light: tokens.kuroyuri[100],
        dark: tokens.kuroyuri[900],
      },
    },
    contact: {
      icon: <SemanticsColor>{
        light: tokens.kuroyuri[900],
        dark: tokens.kuroyuri[100],
      },
      background: <SemanticsColor>{
        light: tokens.kuroyuri[100],
        dark: tokens.kuroyuri[900],
      },
    },
    twitter: {
      icon: <SemanticsColor>{
        light: tokens.kuroyuri[0],
        dark: tokens.kuroyuri[0],
      },
      background: <SemanticsColor>{
        light: tokens.sns.twitter,
        dark: tokens.sns.twitter,
      },
    },
    spotify: {
      icon: <SemanticsColor>{
        light: tokens.kuroyuri[0],
        dark: tokens.kuroyuri[0],
      },
      background: <SemanticsColor>{
        light: tokens.sns.spotify,
        dark: tokens.sns.spotify,
      },
    },
    github: {
      icon: <SemanticsColor>{
        light: tokens.kuroyuri[0],
        dark: tokens.kuroyuri[0],
      },
      background: <SemanticsColor>{
        light: tokens.sns.github,
        dark: tokens.sns.github,
      },
    },
    info: {
      icon: <SemanticsColor>{
        light: tokens.kuroyuri[900],
        dark: tokens.kuroyuri[100],
      },
      background: <SemanticsColor>{
        light: tokens.kuroyuri[100],
        dark: tokens.kuroyuri[900],
      },
    },
  },
}
