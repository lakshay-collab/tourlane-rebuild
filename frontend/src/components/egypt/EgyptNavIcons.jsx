import React from 'react';
import { Sun, CalendarDays, Wallet, Utensils, Mountain, Footprints, Umbrella, TreePalm, MapPin, Users, Heart, Landmark, Timer, Sailboat, Gem, ArrowUpNarrowWide, ArrowDownWideNarrow, Clock, Leaf, Car, Globe } from 'lucide-react';

const icons = {
  sun: Sun, calendar: CalendarDays, wallet: Wallet, food: Utensils, landscape: Mountain, kayak: Footprints, beach: Umbrella, island: TreePalm, leaf: Leaf, road: Car, globe: Globe,
  pin: MapPin, family: Users, heart: Heart, culture: Landmark, short: Timer, boat: Sailboat, gem: Gem, sortAsc: ArrowUpNarrowWide, sortDesc: ArrowDownWideNarrow, clock: Clock
};

export const NavIcon = ({ name, size = 24, className = 'text-[#174358]' }) => {
  const I = icons[name];
  return I ? <I size={size} strokeWidth={1.75} className={`shrink-0 ${className}`} aria-hidden /> : null;
};
