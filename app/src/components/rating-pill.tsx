import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '@/constants/theme';
import type { Rating } from '@/data/plants';
import { RATING_LABEL } from '@/lib/ratings';

export function RatingPill({ rating }: { rating: Rating }) {
  const { rating: colors } = useTheme();
  const pair = colors[rating];
  return (
    <View
      style={[
        styles.pill,
        { backgroundColor: pair.bg },
        pair.border ? { borderWidth: 1, borderStyle: 'dashed', borderColor: pair.border } : null,
      ]}>
      <Text style={[styles.text, { color: pair.fg }]}>{RATING_LABEL[rating]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12, flexShrink: 0 },
  text: { fontSize: 14, fontWeight: '700' },
});
