import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useTheme } from '@/constants/theme';
import { SOURCES } from '@/data/plants';

const SECTIONS: { title: string; items: string[] }[] = [
  {
    title: 'What to feed',
    items: [
      'Make weeds and flowers more than 70% of the diet. Good staples include dandelion, cat\'s ear, plantain, sow thistle and mallow.',
      'Mix several kinds every day. Variety keeps any one plant\'s oxalates or thyroid-affecting compounds from building up.',
      'Use grocery greens such as endive or romaine only when weeds aren\'t available.',
      'Let them graze outdoors when you can. It helps digestion and helps prevent obesity.',
    ],
  },
  {
    title: 'What not to feed',
    items: [
      'Fruit: too much sugar, with more phosphorus than calcium. It can cause digestive upset and parasite problems.',
      'High-protein foods such as cat or dog food, meat, peas and beans. These are linked to kidney failure, bladder stones and shell deformities.',
      'Iceberg lettuce: almost no fiber, vitamins or minerals.',
      'Anything rated Avoid or Toxic in this guide.',
    ],
  },
  {
    title: 'Calcium and supplements',
    items: [
      'Dust food with a phosphorus-free calcium supplement at least twice a week, and more often for young tortoises.',
      'Supermarket greens need supplementing most. A cuttlefish bone is welcome but shouldn\'t be the only calcium source.',
      'Diet works together with UVB light, which Mediterranean tortoises need.',
    ],
  },
  {
    title: 'Water',
    items: [
      'Keep fresh water in a shallow dish your tortoise can climb into, and change it daily.',
      'Soak your tortoise in shallow, lukewarm water for about 10 minutes twice a week.',
    ],
  },
  {
    title: 'Young tortoises',
    items: [
      'Supplement calcium more often than for adults.',
      'Offer clover only occasionally; it\'s high in protein.',
      'Sources disagree on large amounts of dandelion for very young tortoises, so keep it in a mix rather than the whole meal.',
    ],
  },
  {
    title: 'Picking plants safely',
    items: [
      'Pick only where nothing has been sprayed or fertilized.',
      'Avoid busy roadsides, where plants can carry lead from exhaust.',
      'If you can\'t identify a plant for certain, don\'t feed it.',
    ],
  },
];

const GUIDE_SOURCES = ['rvc24', 'rvc', 'trust', 'trustlist', 'clubweb'];

export default function GuideScreen() {
  const { c } = useTheme();
  return (
    <ScrollView style={{ backgroundColor: c.bg }} contentContainerStyle={styles.page}>
      <Text style={[styles.h1, { color: c.text }]}>Feeding a Hermann's tortoise</Text>
      <Text style={[styles.lead, { color: c.text }]}>
        Hermann's and other Mediterranean tortoises do best on a varied, high-fiber diet of weeds
        and flowers that's low in protein and sugar.
      </Text>
      {SECTIONS.map((s) => (
        <View key={s.title} style={{ gap: 8 }}>
          <Text style={[styles.h2, { color: c.text }]}>{s.title}</Text>
          {s.items.map((item) => (
            <View key={item} style={styles.item}>
              <Text style={{ color: c.muted }}>•</Text>
              <Text style={[styles.body, { color: c.text }]}>{item}</Text>
            </View>
          ))}
        </View>
      ))}
      <Text style={[styles.h2, { color: c.text }]}>Sources</Text>
      {GUIDE_SOURCES.map((k) => (
        <Pressable key={k} accessibilityRole="link" onPress={() => Linking.openURL(SOURCES[k].url)}>
          <Text style={{ color: c.accent, fontSize: 15, paddingVertical: 2 }}>{SOURCES[k].title}</Text>
        </Pressable>
      ))}
      <Text style={{ color: c.muted, fontSize: 13 }}>
        General guidance, not veterinary advice. Ask a reptile vet about your own tortoise's needs.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { padding: 16, gap: 16, paddingBottom: 48 },
  h1: { fontSize: 28, fontWeight: '700', letterSpacing: -0.5 },
  lead: { fontSize: 17, lineHeight: 24 },
  h2: { fontSize: 20, fontWeight: '700', marginTop: 8 },
  item: { flexDirection: 'row', gap: 8 },
  body: { flex: 1, fontSize: 16, lineHeight: 23 },
});
