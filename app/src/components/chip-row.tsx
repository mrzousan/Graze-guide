import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';

import { useTheme } from '@/constants/theme';

type Option<T extends string> = { key: T; label: string };

export function ChipRow<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: Option<T>[];
  value: T;
  onChange: (key: T) => void;
  label: string;
}) {
  const { c } = useTheme();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
      accessibilityLabel={label}>
      {options.map((o) => {
        const on = o.key === value;
        return (
          <Pressable
            key={o.key}
            accessibilityRole="button"
            accessibilityState={{ selected: on }}
            onPress={() => onChange(o.key)}
            style={[
              styles.chip,
              { borderColor: on ? c.accent : c.line, backgroundColor: on ? c.accent : c.surface },
            ]}>
            <Text style={[styles.text, { color: on ? c.accentText : c.text, fontWeight: on ? '700' : '500' }]}>
              {o.label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: { gap: 8, paddingRight: 16 },
  chip: {
    minHeight: 42,
    paddingHorizontal: 14,
    borderRadius: 19,
    borderWidth: 1,
    justifyContent: 'center',
  },
  text: { fontSize: 15 },
});
