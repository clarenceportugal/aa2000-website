/**
 * Shared animation variants - subtle, no popup/scale effects
 * Smooth page transitions and gentle hover states only
 */

/** Dahan-dahan na reveal - gradual fade + subtle rise */
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
} as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: 'easeOut' },
} as const;

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3, ease: 'easeOut' },
} as const;

/** Subtle card hover - no aggressive scale */
export const cardHover = {
  rest: { y: 0 },
  hover: { y: -4 },
  transition: { duration: 0.2 },
} as const;
