export const theme = {
  font: {
    family: {
      primary: '"Roboto", sans-serif',
    },
    size: {
      s10: '1rem',
      s11: '1.1rem',
      s12: '1.2rem',
      s14: '1.4rem',
      s16: '1.6rem',
      s18: '1.8rem',
      s20: '2rem',
      s24: '2.4rem',
      s28: '2.8rem',
      s32: '3.2rem',
      s36: '3.6rem',
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  colors: {
    primary: '#6200ee',
    secondary: '#03dac5',
    black: '#000000',
    white: '#ffffff',
    gray: '#cecece',
    opacity: {
      o10: 0.1,
      o20: 0.2,
      o40: 0.4,
      o60: 0.6,
      o80: 0.8,
      o100: 1,
    },
  },
  spacing: {
    s1: '1rem',
    s2: '2rem',
    s4: '4rem',
    s8: '8rem',
    s12: '12rem',
    s16: '16rem',
    s24: '24rem',
    s32: '32rem',
    s40: '40rem',
    s48: '48rem',
    s56: '56rem',
    s64: '64rem',
    s72: '72rem',
  },
}

export type FontTheme = typeof theme.font
export type FontFamily = typeof theme.font.family
export type FontWeight = typeof theme.font.weight
export type FontSize = typeof theme.font.size
export type ColorsTheme = typeof theme.colors
export type ColorsOpacity = typeof theme.colors.opacity
export type SpacingTheme = typeof theme.spacing
export type Theme = typeof theme
