import { useColorScheme } from 'react-native';

import type { Rating } from '@/data/plants';

const light = {
  bg: '#FFFFFF',
  surface: '#EEF2EA',
  line: '#E1E7DC',
  text: '#1B2620',
  muted: '#4F5D52',
  accent: '#2F5A2B',
  accentText: '#FFFFFF',
  warnBg: '#FDF6E6',
  warnLine: '#E6CF9C',
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
  free: { bg: '#DCEBD8', fg: '#1F4D24' },
  mod: { bg: '#E9F0CF', fg: '#3F4A0E' },
  spar: { bg: '#FBEFD6', fg: '#6E4700' },
  avoid: { bg: '#FBE1D3', fg: '#8A2F0A' },
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
  const isDark = scheme === 'dark';
  return {
    isDark,
    c: isDark ? dark : light,
    rating: isDark ? ratingDark : ratingLight,
  };
}
