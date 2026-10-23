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
        colors: { ...base.colors, background: c.bg, card: c.bg, text: c.text, primary: c.accent, border: c.line },
      }}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerTintColor: c.accent, headerTitleStyle: { color: c.text } }}>
        <Stack.Screen name="index" options={{ title: 'Graze Guide' }} />
        <Stack.Screen name="plant/[id]" options={{ title: '' }} />
        <Stack.Screen name="guide" options={{ title: 'Feeding guide' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
      </Stack>
    </ThemeProvider>
  );
}
