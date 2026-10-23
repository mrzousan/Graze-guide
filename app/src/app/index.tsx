import { Link } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';

import { ChipRow } from '@/components/chip-row';
import { RatingPill } from '@/components/rating-pill';
import { useTheme } from '@/constants/theme';
import { CATEGORIES, PLANTS, type Category, type Plant } from '@/data/plants';
import { FEEDABLE, plantRegion, sourceStatus, type Region } from '@/lib/ratings';

type CatFilter = 'all' | Category;
type RateFilter = 'all' | 'feed' | 'free' | 'mod' | 'spar' | 'bad' | 'nyr';

const CAT_OPTIONS: { key: CatFilter; label: string }[] = [
  { key: 'all', label: 'All types' },
  ...(Object.entries(CATEGORIES) as [Category, string][]).map(([key, label]) => ({ key, label })),
];
const REGION_OPTIONS: { key: Region; label: string }[] = [
  { key: 'all', label: 'All of California' },
  { key: 'norcal', label: 'Northern CA' },
  { key: 'socal', label: 'Southern CA' },
];
const RATE_OPTIONS: { key: RateFilter; label: string }[] = [
  { key: 'all', label: 'Any rating' },
  { key: 'feed', label: 'Can feed' },
  { key: 'free', label: 'Feed freely' },
  { key: 'mod', label: 'Moderation' },
  { key: 'spar', label: 'Sparingly' },
  { key: 'bad', label: 'Avoid / toxic' },
  { key: 'nyr', label: 'Not rated' },
];

function matchesRating(p: Plant, f: RateFilter) {
  if (f === 'all') return true;
  if (f === 'feed') return FEEDABLE.includes(p.rating);
  if (f === 'bad') return p.rating === 'avoid' || p.rating === 'toxic';
  return p.rating === f;
}

export default function SearchScreen() {
  const { c } = useTheme();
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState<CatFilter>('all');
  const [region, setRegion] = useState<Region>('all');
  const [rate, setRate] = useState<RateFilter>('all');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PLANTS.filter(
      (p) =>
        (cat === 'all' || p.category === cat) &&
        (region === 'all' || plantRegion(p) === 'both' || plantRegion(p) === region) &&
        matchesRating(p, rate) &&
        (!q || p.name.toLowerCase().includes(q) || p.scientific.toLowerCase().includes(q)),
    ).sort((a, b) => a.name.localeCompare(b.name));
  }, [query, cat, region, rate]);

  const sections = useMemo(() => {
    const groups = new Map<string, Plant[]>();
    for (const p of results) {
      const first = p.name[0].toUpperCase();
      const letter = /[A-Z]/.test(first) ? first : '#';
      if (!groups.has(letter)) groups.set(letter, []);
      groups.get(letter)!.push(p);
    }
    return [...groups.entries()].map(([title, data]) => ({ title, data }));
  }, [results]);

  const header = (
    <View style={styles.header}>
      <Text style={[styles.h1, { color: c.text }]}>Can my tortoise eat it?</Text>
      <View style={[styles.banner, { backgroundColor: c.warnBg, borderColor: c.warnLine }]}>
        <Text style={[styles.bannerText, { color: c.warnText }]}>
          <Text style={{ fontWeight: '700' }}>Test version. </Text>
          Ratings are drafts still being checked. Don't use this to decide what to feed until a
          reptile vet has reviewed it.
        </Text>
      </View>
      <Link href="/guide" asChild>
        <Pressable style={[styles.guideBtn, { backgroundColor: c.surface, borderColor: c.line }]}>
          <Text style={[styles.guideText, { color: c.text }]}>Feeding guide for Hermann's tortoises</Text>
          <Text style={{ color: c.accent, fontSize: 18 }}>›</Text>
        </Pressable>
      </Link>
      <Text style={[styles.who, { color: c.muted }]}>
        Hermann's and other Mediterranean tortoises · California
      </Text>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search a plant or food"
        placeholderTextColor={c.muted}
        autoCorrect={false}
        clearButtonMode="while-editing"
        accessibilityLabel="Search a plant or food"
        style={[styles.search, { borderColor: c.accent, color: c.text, backgroundColor: c.bg }]}
      />
      <ChipRow label="Type" options={CAT_OPTIONS} value={cat} onChange={setCat} />
      <ChipRow label="Region" options={REGION_OPTIONS} value={region} onChange={setRegion} />
      <ChipRow label="Rating" options={RATE_OPTIONS} value={rate} onChange={setRate} />
      <Text style={[styles.count, { color: c.muted }]}>
        {results.length} of {PLANTS.length} plants and foods
      </Text>
    </View>
  );

  return (
    <SectionList
      style={{ backgroundColor: c.bg }}
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled"
      sections={sections}
      keyExtractor={(p) => p.id}
      ListHeaderComponent={header}
      stickySectionHeadersEnabled
      renderSectionHeader={({ section }) => (
        <Text style={[styles.letter, { color: c.muted, backgroundColor: c.bg }]}>{section.title}</Text>
      )}
      renderItem={({ item }) => (
        <Link href={{ pathname: '/plant/[id]', params: { id: item.id } }} asChild>
          <Pressable style={[styles.row, { borderBottomColor: c.line }]}>
            <View style={styles.rowText}>
              <Text style={[styles.name, { color: c.text }]}>{item.name}</Text>
              <Text style={[styles.sub, { color: c.muted }]} numberOfLines={1}>
                <Text style={{ fontStyle: 'italic' }}>{item.scientific}</Text> · {sourceStatus(item)}
              </Text>
            </View>
            <RatingPill rating={item.rating} />
          </Pressable>
        </Link>
      )}
      ListEmptyComponent={
        <Text style={[styles.empty, { color: c.muted }]}>
          Nothing matches yet. Try the scientific name, or another type or region. If it's not
          listed, treat it as not rated and don't feed it.
        </Text>
      }
      ListFooterComponent={
        <Link href="/about" asChild>
          <Pressable style={styles.footer}>
            <Text style={{ color: c.accent, fontWeight: '600' }}>About and privacy</Text>
          </Pressable>
        </Link>
      }
    />
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 16, paddingTop: 8, gap: 12, paddingBottom: 4 },
  h1: { fontSize: 28, fontWeight: '700', letterSpacing: -0.5 },
  banner: { borderWidth: 1, borderRadius: 12, padding: 12 },
  bannerText: { fontSize: 14, lineHeight: 20 },
  guideBtn: {
    minHeight: 52,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  guideText: { fontSize: 16, fontWeight: '600' },
  who: { fontSize: 14 },
  search: { height: 52, borderWidth: 2, borderRadius: 14, paddingHorizontal: 14, fontSize: 17 },
  count: { fontSize: 13 },
  letter: { fontSize: 18, fontWeight: '700', paddingHorizontal: 16, paddingTop: 14, paddingBottom: 4 },
  row: {
    marginHorizontal: 16,
    minHeight: 64,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  rowText: { flex: 1, minWidth: 0 },
  name: { fontSize: 16, fontWeight: '600' },
  sub: { fontSize: 13 },
  empty: { padding: 24, fontSize: 15, lineHeight: 22 },
  footer: { padding: 24, alignItems: 'center' },
});
