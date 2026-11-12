import { useColorScheme } from 'react-native';

import type { Rating } from '@/data/plants';

const light = {
  bg: '#F3F8EC',
  surface: '#FFFFFF',
  line: '#D3E0C5',
  text: '#10201A',
  muted: '#40524A',
  accent: '#1B7A32',
  accentText: '#FFFFFF',
  warnBg: '#FFF4D6',
  warnLine: '#EBC85C',
  warnText: '#4A3300',
};

const dark: typeof light = {
  bg: '#141A16',
  surface: '#1F2822',
  line: '#2C362F',
  text: '#E7EDE6',
  muted: '#A9B5AB',
  accent: '#9CCB8F',
  accentText: '#102012',
  warnBg: '#2E2614',
  warnLine: '#6B5627',
  warnText: '#F1DFB4',
};

type Pair = { bg: string; fg: string; border?: string };

const ratingLight: Record<Rating, Pair> = {
  free: { bg: '#CDEFC6', fg: '#0E4A1B' },
  mod: { bg: '#E3EFA8', fg: '#34400A' },
  spar: { bg: '#FFE7A8', fg: '#5E3C00' },
  avoid: { bg: '#FFD2BC', fg: '#7E2606' },
  toxic: { bg: '#7A1414', fg: '#FFFFFF' },
  nyr: { bg: 'transparent', fg: '#3E4A41', border: '#7A877D' },
};

const ratingDark: Record<Rating, Pair> = {
  free: { bg: '#24402A', fg: '#BFE3B6' },
  mod: { bg: '#353D17', fg: '#DDE8A6' },
  spar: { bg: '#463513', fg: '#F3D693' },
  avoid: { bg: '#4D2516', fg: '#F6C0A6' },
  toxic: { bg: '#B42323', fg: '#FFFFFF' },
  nyr: { bg: 'transparent', fg: '#C9D3CA', border: '#8A978C' },
};

export function useTheme() {
  const scheme = useColorScheme();
  // Light theme only for now (brighter, easier to read). Dark mode can come back later.
  const isDark = false && scheme === 'dark';
  return {
    isDark,
    c: isDark ? dark : light,
    rating: isDark ? ratingDark : ratingLight,
  };
}
