import { Linking, Pressable, ScrollView, StyleSheet, Text } from 'react-native';

import { useTheme } from '@/constants/theme';

type Link = { name: string; url: string };

// Sources the ratings draw on most often. The Tortoise Table is listed first with its permission.
const SOURCES: Link[] = [
  { name: 'The Tortoise Table', url: 'https://www.thetortoisetable.org.uk' },
  { name: 'UC ANR toxic plants list', url: 'https://ccfruitandnuts.ucanr.edu/sites/default/files/2022-02/363609.pdf' },
  { name: 'Norfolk Tortoise Club food list', url: 'https://www.tortoiseclub.org/s/3_HEALTHY_TORTOISE_FOOD_23.pdf' },
  { name: 'Tortoise Group', url: 'https://tortoisegroup.org' },
  { name: 'Royal Veterinary College Mediterranean tortoise care sheet', url: 'https://www.rvc.ac.uk/Media/Default/small-animal/documents/Mediterranean-tortoise-care%20-%20UPDATED-1.pdf' },
  { name: 'Melissa Kaplan: tortoise diet', url: 'https://anapsid.org/tortdiet.html' },
  { name: 'ASPCA toxic and non-toxic plants', url: 'https://www.aspca.org/pet-care/animal-poison-control/dogs-plant-list' },
  { name: 'RussianTortoise.org edible plants', url: 'https://russiantortoise.net/edible_plants.htm' },
  { name: 'Tortoise Trust', url: 'https://www.tortoisetrust.org' },
  { name: 'Edible Plants and Weeds for Tortoises & Land Turtles (azeah.com)', url: 'https://azeah.com/node/229' },
];

export default function SourcesScreen() {
  const { c } = useTheme();
  return (
    <ScrollView style={{ backgroundColor: c.bg }} contentContainerStyle={styles.page}>
      <Text style={[styles.h1, { color: c.text }]}>Sources</Text>
      <Text style={[styles.body, { color: c.text }]}>
        Graze Guide's ratings are our own. We compare published sources, and where they disagree we
        take the cautious side. Each plant page lists the sources used for that plant.
      </Text>
      <Text style={[styles.body, { color: c.text }]}>
        Thank you to The Tortoise Table, whose plant database is one of our main references. They
        have kindly allowed us to credit their assessments.
      </Text>
      {SOURCES.map((s) => (
        <Pressable key={s.url} accessibilityRole="link" onPress={() => Linking.openURL(s.url)}>
          <Text style={{ color: c.accent, fontSize: 16, paddingVertical: 4 }}>{s.name}</Text>
        </Pressable>
      ))}
      <Text style={[styles.h2, { color: c.text }]}>Photo credits</Text>
      <Text style={[styles.body, { color: c.text }]}>
        Plant photos come from Wikimedia Commons under open licenses. The photographer and license
        are shown under each photo, and tapping the credit opens the original page.
      </Text>
      <Text style={[styles.small, { color: c.muted }]}>
        Listing a source doesn't mean it endorses Graze Guide or our ratings. General guidance, not
        veterinary advice.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { padding: 16, gap: 12, paddingBottom: 48 },
  h1: { fontSize: 28, fontWeight: '700' },
  h2: { fontSize: 20, fontWeight: '700', marginTop: 8 },
  body: { fontSize: 16, lineHeight: 23 },
  small: { fontSize: 13, lineHeight: 19, marginTop: 8 },
});
