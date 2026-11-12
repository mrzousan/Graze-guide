import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FlatList, Image, Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { ChipRow } from '@/components/chip-row';
import { RatingPill } from '@/components/rating-pill';
import { useTheme } from '@/constants/theme';
import { CATEGORIES, PLANTS, type Category, type Plant } from '@/data/plants';
import { IMAGES } from '@/data/images';
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
  { key: 'bad', label: 'Do not feed / toxic' },
  { key: 'nyr', label: 'Not rated' },
];

function matchesRating(p: Plant, f: RateFilter) {
  if (f === 'all') return true;
  if (f === 'feed') return FEEDABLE.includes(p.rating);
  if (f === 'bad') return p.rating === 'avoid' || p.rating === 'toxic';
  return p.rating === f;
}

type Row =
  | { kind: 'letter'; key: string; title: string }
  | { kind: 'plant'; key: string; plant: Plant };

export default function SearchScreen() {
  const { c } = useTheme();
  const insets = useSafeAreaInsets();
  // Keep the search bar above the keyboard (and its suggestion strip) on any phone:
  // measure how much of the bar the keyboard covers and lift it by that amount.
  const listRef = useRef<FlatList<Row>>(null);
  const [showTop, setShowTop] = useState(false);
  const barRef = useRef<{
    measureInWindow: (cb: (x: number, y: number, w: number, h: number) => void) => void;
  } | null>(null);
  const [kbOpen, setKbOpen] = useState(false);
  const [lift, setLift] = useState(0);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const show = Keyboard.addListener('keyboardDidShow', (e) => {
      setKbOpen(true);
      setLift(0);
      const top = e.endCoordinates.screenY;
      clearTimeout(timer);
      timer = setTimeout(() => {
        barRef.current?.measureInWindow((_x, y, _w, h) => {
          const overlap = y + h - top;
          setLift(overlap > 0 ? overlap + 12 + insets.top : 0);
        });
      }, 200);
    });
    const hide = Keyboard.addListener('keyboardDidHide', () => {
      clearTimeout(timer);
      setKbOpen(false);
      setLift(0);
    });
    return () => {
      clearTimeout(timer);
      show.remove();
      hide.remove();
    };
  }, [insets.top]);
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

  // Flat list: a letter heading row, then that letter's plants. (A plain list is more
  // reliable than a sectioned one when the results change quickly while typing.)
  const rows = useMemo(() => {
    const out: Row[] = [];
    let current = '';
    for (const p of results) {
      const first = p.name[0].toUpperCase();
      const letter = /[A-Z]/.test(first) ? first : '#';
      if (letter !== current) {
        current = letter;
        out.push({ kind: 'letter', key: `letter-${letter}`, title: letter });
      }
      out.push({ kind: 'plant', key: p.id, plant: p });
    }
    return out;
  }, [results]);

  const header = (
    <View style={styles.header}>
      <Text style={[styles.h1, { color: c.text }]}>Can my tortoise eat it?</Text>
      <View style={[styles.banner, { backgroundColor: c.warnBg, borderColor: c.warnLine }]}>
        <Text style={[styles.bannerText, { color: c.warnText }]}>
          <Text style={{ fontWeight: '700' }}>Test version. </Text>
          Ratings are drafts compiled from published sources and may contain mistakes. When in
          doubt, don't feed it.
        </Text>
      </View>
      <Link href="/guide" asChild>
        <Pressable style={StyleSheet.flatten([styles.guideBtn, { backgroundColor: c.surface, borderColor: c.line }])}>
          <Text style={[styles.guideText, { color: c.text }]}>Feeding guide for Hermann's tortoises</Text>
          <Text style={{ color: c.accent, fontSize: 18 }}>›</Text>
        </Pressable>
      </Link>
      <Text style={[styles.who, { color: c.muted }]}>
        Hermann's and other Mediterranean tortoises · California
      </Text>
      <ChipRow label="Type" options={CAT_OPTIONS} value={cat} onChange={setCat} />
      <ChipRow label="Region" options={REGION_OPTIONS} value={region} onChange={setRegion} />
      <ChipRow label="Rating" options={RATE_OPTIONS} value={rate} onChange={setRate} />
      <Text style={[styles.count, { color: c.muted }]}>
        {results.length} of {PLANTS.length} plants and foods
      </Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
    <View style={{ flex: 1 }}>
    <FlatList
      ref={listRef}
      onScroll={(e) => {
        const far = e.nativeEvent.contentOffset.y > 700;
        setShowTop((prev) => (prev === far ? prev : far));
      }}
      scrollEventThrottle={100}
      style={{ backgroundColor: c.bg }}
      keyboardShouldPersistTaps="handled"
      data={rows}
      keyExtractor={(r) => r.key}
      ListHeaderComponent={header}
      showsVerticalScrollIndicator
      initialNumToRender={12}
      maxToRenderPerBatch={10}
      windowSize={7}
      renderItem={({ item: row }) => {
        if (row.kind === 'letter') {
          return <Text style={[styles.letter, { color: c.muted, backgroundColor: c.bg }]}>{row.title}</Text>;
        }
        const item = row.plant;
        return (
        <Link href={{ pathname: '/plant/[id]', params: { id: item.id } }} asChild>
          <Pressable style={StyleSheet.flatten([styles.row, { borderColor: c.line, backgroundColor: c.surface }])}>
            {item.photos[0] && IMAGES[item.photos[0].f] ? (
              <Image
                source={IMAGES[item.photos[0].f]}
                resizeMethod="resize"
                fadeDuration={0}
                accessibilityLabel={`Photo of ${item.name}`}
                style={[styles.thumb, { backgroundColor: c.surface }]}
              />
            ) : null}
            <View style={styles.rowText}>
              <Text style={[styles.name, { color: c.text }]}>{item.name}</Text>
              <Text style={[styles.sub, { color: c.muted }]} numberOfLines={1}>
                <Text style={{ fontStyle: 'italic' }}>{item.scientific}</Text> · {sourceStatus(item)}
              </Text>
            </View>
            <RatingPill rating={item.rating} />
          </Pressable>
        </Link>
        );
      }}
      ListEmptyComponent={
        <Text style={[styles.empty, { color: c.muted }]}>
          Nothing matches yet. Try the scientific name, or another type or region. If it's not
          listed, treat it as not rated and don't feed it.
        </Text>
      }
      ListFooterComponent={
        <View style={styles.footer}>
          <Link href="/sources" asChild>
            <Pressable>
              <Text style={{ color: c.accent, fontWeight: '600' }}>Sources and photo credits</Text>
            </Pressable>
          </Link>
          <Link href="/about" asChild>
            <Pressable>
              <Text style={{ color: c.accent, fontWeight: '600' }}>About and privacy</Text>
            </Pressable>
          </Link>
        </View>
      }
    />
    {showTop ? (
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Back to top"
        onPress={() => listRef.current?.scrollToOffset({ offset: 0, animated: true })}
        style={[styles.toTop, { backgroundColor: c.accent }]}>
        <Text style={{ color: c.accentText, fontSize: 24, fontWeight: '700', lineHeight: 28 }}>↑</Text>
        <Text style={{ color: c.accentText, fontSize: 11, fontWeight: '700' }}>Top</Text>
      </Pressable>
    ) : null}
    </View>
      <View
        ref={barRef as never}
        collapsable={false}
        style={[
          styles.searchWrap,
          {
            backgroundColor: c.surface,
            borderTopColor: c.line,
            marginBottom: lift,
            paddingBottom: kbOpen ? 10 : Math.max(insets.bottom, 10),
          },
        ]}>
        <View>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search a plant or food"
            placeholderTextColor={c.muted}
            autoCorrect={false}
            accessibilityLabel="Search a plant or food"
            style={[styles.search, { borderColor: c.accent, color: c.text, backgroundColor: c.bg, paddingRight: 56 }]}
          />
          {query.length > 0 ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Clear search"
              onPress={() => setQuery('')}
              hitSlop={8}
              style={[styles.clear, { backgroundColor: c.line }]}>
              <Text style={{ color: c.text, fontSize: 18, fontWeight: '700' }}>✕</Text>
            </Pressable>
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 16, paddingTop: 8, gap: 12, paddingBottom: 4 },
  h1: { fontSize: 30, fontWeight: '700', letterSpacing: -0.5 },
  banner: { borderWidth: 1, borderRadius: 12, padding: 12 },
  bannerText: { fontSize: 14, lineHeight: 20 },
  guideBtn: {
    minHeight: 56,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  guideText: { fontSize: 17, fontWeight: '700' },
  who: { fontSize: 14 },
  searchWrap: { paddingHorizontal: 16, paddingTop: 10, borderTopWidth: 1 },
  search: { height: 56, borderWidth: 2, borderRadius: 28, paddingHorizontal: 20, fontSize: 18 },
  clear: { position: 'absolute', right: 8, top: 8, width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  toTop: { position: 'absolute', right: 16, bottom: 14, width: 60, height: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center', elevation: 6, shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 6, shadowOffset: { width: 0, height: 2 } },
  count: { fontSize: 13 },
  letter: { fontSize: 18, fontWeight: '700', paddingHorizontal: 16, paddingTop: 12, paddingBottom: 4 },
  row: {
    marginHorizontal: 16,
    marginVertical: 4,
    minHeight: 84,
    padding: 10,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  thumb: { width: 64, height: 64, borderRadius: 12 },
  rowText: { flex: 1, minWidth: 0 },
  name: { fontSize: 18, fontWeight: '700' },
  sub: { fontSize: 14 },
  empty: { padding: 24, fontSize: 15, lineHeight: 22 },
  footer: { padding: 24, alignItems: 'center', gap: 14 },
});
