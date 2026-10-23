import { Linking, Pressable, ScrollView, StyleSheet, Text } from 'react-native';

import { useTheme } from '@/constants/theme';
import { PLANTS } from '@/data/plants';

const PRIVACY_URL = 'https://mrzousan.github.io/Graze-guide/privacy.html';

export default function AboutScreen() {
  const { c } = useTheme();
  return (
    <ScrollView style={{ backgroundColor: c.bg }} contentContainerStyle={styles.page}>
      <Text style={[styles.h1, { color: c.text }]}>Graze Guide</Text>
      <Text style={[styles.body, { color: c.text }]}>
        A pocket guide to which California plants and foods are safe for Hermann's and other
        Mediterranean tortoises. It covers {PLANTS.length} plants and foods, each with a rating, the
        reason, and the sources behind it.
      </Text>
      <Text style={[styles.h2, { color: c.text }]}>How ratings work</Text>
      <Text style={[styles.body, { color: c.text }]}>
        Feed freely and Feed in moderation need two independent sources. With only one source, or
        when sources disagree, a plant is rated no higher than Feed sparingly. When sources
        conflict about safety, the guide takes the cautious side. Plants with no source are shown
        as Not yet rated.
      </Text>
      <Text style={[styles.h2, { color: c.text }]}>Not veterinary advice</Text>
      <Text style={[styles.body, { color: c.text }]}>
        This is general guidance. If your tortoise seems unwell or ate something unknown, contact
        a reptile vet.
      </Text>
      <Pressable accessibilityRole="link" onPress={() => Linking.openURL(PRIVACY_URL)}>
        <Text style={{ color: c.accent, fontSize: 16, fontWeight: '600' }}>Privacy policy</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { padding: 16, gap: 14, paddingBottom: 48 },
  h1: { fontSize: 28, fontWeight: '700' },
  h2: { fontSize: 20, fontWeight: '700', marginTop: 8 },
  body: { fontSize: 16, lineHeight: 23 },
});
