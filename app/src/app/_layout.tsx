import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { useTheme } from '@/constants/theme';

export default function RootLayout() {
  const { isDark, c } = useTheme();
  const base = isDark ? DarkTheme : DefaultTheme;
  return (
    <ThemeProvider
      value={{
        ...base,
        colors: { ...base.colors, background: c.bg, card: isDark ? c.surface : c.accent, text: c.text, primary: c.accent, border: c.line },
      }}>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: isDark ? c.surface : c.accent },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { color: '#FFFFFF', fontWeight: '700' },
        }}>
        <Stack.Screen name="index" options={{ title: 'Graze Guide' }} />
        <Stack.Screen name="plant/[id]" options={{ title: '' }} />
        <Stack.Screen name="guide" options={{ title: 'Feeding guide' }} />
        <Stack.Screen name="sources" options={{ title: 'Sources' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
      </Stack>
    </ThemeProvider>
  );
}
