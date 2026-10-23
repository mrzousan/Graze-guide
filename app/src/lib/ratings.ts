import { PLANTS, SOURCES, type Plant, type Rating } from '@/data/plants';

export const RATING_LABEL: Record<Rating, string> = {
  free: 'Feed freely',
  mod: 'Feed in moderation',
  spar: 'Feed sparingly',
  avoid: 'Avoid',
  toxic: 'Toxic',
  nyr: 'Not yet rated',
};

export const RATING_BLURB: Record<Rating, string> = {
  free: 'Can be a regular, everyday part of a varied mix.',
  mod: 'Good food, but not every day. Offer it a few times a week, mixed with other plants.',
  spar: 'Safe in small amounts, mixed with other plants. Don\'t make it a staple.',
  avoid: 'Don\'t offer it. Remove it from the enclosure if it grows there.',
  toxic: 'Poisonous. Keep it out of reach. If your tortoise ate some, call a reptile vet.',
  nyr: 'We haven\'t found a reliable source yet. Don\'t feed it until it\'s rated.',
};

export const FEEDABLE: Rating[] = ['free', 'mod', 'spar'];

export type SourceStatus = 'Sourced' | 'One source so far' | 'No source yet';

/** Counts independent organizations, so two pages from one publisher count once. */
export function sourceStatus(plant: Plant): SourceStatus {
  const orgs = new Set(plant.sources.map((key) => SOURCES[key]?.org ?? key));
  if (orgs.size >= 2) return 'Sourced';
  if (orgs.size === 1) return 'One source so far';
  return 'No source yet';
}

export type Region = 'all' | 'norcal' | 'socal';

export function plantRegion(plant: Plant): 'norcal' | 'socal' | 'both' {
  const north = /NorCal/.test(plant.where);
  const south = /SoCal/.test(plant.where);
  if (north && !south) return 'norcal';
  if (south && !north) return 'socal';
  return 'both';
}

export function findPlant(id: string): Plant | undefined {
  return PLANTS.find((p) => p.id === id);
}
