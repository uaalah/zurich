import { Theme } from "styled-system";

/* breakpoints */
const breakpoints:string[] = ['672px', '1024px', '1200px'];


const zurichTheme:Theme = {
  fonts: {
    defaultStack: 'Roboto, sans-serif'
  },
  fontSizes:{
    header: '2.25rem',
    modalHeader: '1.5rem',
    cardHeader: '1.25rem',
    body: '1rem',
  },
  colors: {
    textDefault: '#342f24',
    bgDefault: '#eaeaea',
    primary: '#cc3f34',
    primaryDark: '#802620',
    primaryLight: '#ff6357',
    overlay: 'rgba(0,0,0,.6)'
  },
  breakpoints: {
    tablet: breakpoints[0],
    laptop: breakpoints[1],
    desktop: breakpoints[2],
  },
  space: [
    0, 
    '.125rem', 
    '.25rem', 
    '.5rem',
    '.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem'
  ],
  radii: {
    xs: '.125rem',
    s: '.25rem',
    m: '.5rem',
    l: '1rem',
    rounded: '50%',
  },
  zIndices:{
    overlay: 100,
    modal: 101
  },
}

export default zurichTheme;