import { Stack, useLocalSearchParams } from 'expo-router';
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useTheme } from '@/constants/theme';
import { CATEGORIES, SOURCES } from '@/data/plants';
import { FEEDABLE, RATING_BLURB, RATING_LABEL, findPlant, sourceStatus } from '@/lib/ratings';

export default function PlantScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { c, rating } = useTheme();
  const plant = id ? findPlant(id) : undefined;

  if (!plant) {
    return (
      <View style={[styles.page, { backgroundColor: c.bg }]}>
        <Text style={{ color: c.text, fontSize: 16 }}>
          This plant isn't in the guide. Treat it as not rated and don't feed it.
        </Text>
      </View>
    );
  }

  const pair = rating[plant.rating];
  const feedable = FEEDABLE.includes(plant.rating);

  return (
    <ScrollView style={{ backgroundColor: c.bg }} contentContainerStyle={styles.page}>
      <Stack.Screen options={{ title: plant.name }} />
      <View style={{ gap: 2 }}>
        <Text style={[styles.h1, { color: c.text }]}>{plant.name}</Text>
        <Text style={{ color: c.muted, fontSize: 15 }}>
          <Text style={{ fontStyle: 'italic' }}>{plant.scientific}</Text> · {CATEGORIES[plant.category]}
        </Text>
      </View>

      <View
        style={[
          styles.verdict,
          { backgroundColor: plant.rating === 'nyr' ? c.surface : pair.bg },
        ]}>
        <Text style={[styles.verdictTitle, { color: plant.rating === 'nyr' ? c.text : pair.fg }]}>
          {RATING_LABEL[plant.rating]}
        </Text>
        <Text style={{ color: plant.rating === 'nyr' ? c.text : pair.fg, fontSize: 15, lineHeight: 21 }}>
          {RATING_BLURB[plant.rating]}
        </Text>
      </View>

      <View style={styles.facts}>
        {plant.parts ? <Fact label="Safe parts" value={plant.parts} muted={c.muted} text={c.text} /> : null}
        <Fact label="In California" value={plant.where} muted={c.muted} text={c.text} />
        {feedable ? (
          <Fact
            label="Before feeding"
            value="Pick only where nothing has been sprayed or fertilized"
            muted={c.muted}
            text={c.text}
          />
        ) : null}
      </View>

      {plant.note ? (
        <View style={[styles.note, { backgroundColor: c.warnBg, borderColor: c.warnLine }]}>
          <Text style={{ color: c.warnText, fontSize: 15, lineHeight: 21 }}>{plant.note}</Text>
        </View>
      ) : null}

      <Text style={[styles.h2, { color: c.muted }]}>SOURCES</Text>
      {plant.sources.length ? (
        plant.sources.map((key) => {
          const s = SOURCES[key];
          return (
            <Pressable key={key} accessibilityRole="link" onPress={() => Linking.openURL(s.url)}>
              <Text style={[styles.link, { color: c.accent }]}>{s.title}</Text>
            </Pressable>
          );
        })
      ) : (
        <Text style={{ color: c.muted }}>No source rates this plant for tortoises yet.</Text>
      )}
      <Text style={{ color: c.muted, fontSize: 14 }}>{sourceStatus(plant)} · Not yet reviewed by a vet</Text>

      <Text style={[styles.disc, { color: c.muted, borderTopColor: c.line }]}>
        General guidance, not veterinary advice. If your tortoise seems unwell or ate something
        unknown, contact a reptile vet.
      </Text>
    </ScrollView>
  );
}

function Fact({ label, value, muted, text }: { label: string; value: string; muted: string; text: string }) {
  return (
    <View style={styles.fact}>
      <Text style={[styles.factLabel, { color: muted }]}>{label}</Text>
      <Text style={[styles.factValue, { color: text }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { padding: 16, gap: 16, paddingBottom: 48 },
  h1: { fontSize: 28, fontWeight: '700', letterSpacing: -0.5 },
  verdict: { borderRadius: 16, padding: 16, gap: 6 },
  verdictTitle: { fontSize: 22, fontWeight: '700' },
  facts: { gap: 10 },
  fact: { flexDirection: 'row', gap: 12 },
  factLabel: { width: 120, fontSize: 15 },
  factValue: { flex: 1, fontSize: 15, fontWeight: '600' },
  note: { borderWidth: 1, borderRadius: 14, padding: 14 },
  h2: { fontSize: 13, fontWeight: '600', letterSpacing: 0.6, marginTop: 8 },
  link: { fontSize: 15, paddingVertical: 4 },
  disc: { fontSize: 13, lineHeight: 19, borderTopWidth: StyleSheet.hairlineWidth, paddingTop: 14, marginTop: 8 },
});
