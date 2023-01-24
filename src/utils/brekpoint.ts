export const breakpoints = {
    sm: 520,
    md: 960,
  } as const;
  
  export const mq = (key: keyof typeof breakpoints) => `@media (min-width: ${breakpoints[key]}px)`;