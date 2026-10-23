# Graze Guide app (Expo)

The real Graze Guide app for iPhone and Android, built with Expo and React Native. It holds the same plant data as the web test version, bundled in the app so it works offline.

## Try it on your phone

1. Install **Expo Go** from the App Store or Google Play.
2. On a computer with Node.js installed, open a terminal in this `app` folder and run:

   ```
   npm install
   npx expo start
   ```

3. Scan the QR code with your phone's camera (iPhone) or the Expo Go app (Android).

## What's inside

- `src/app/index.tsx`: search, filters and the plant list
- `src/app/plant/[id].tsx`: plant detail
- `src/app/guide.tsx`: feeding guide
- `src/app/about.tsx`: how ratings work, disclaimer and privacy link
- `src/data/plants.ts`: the plant data and sources
- `src/lib/ratings.ts`: rating labels and source counting
