import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { kazakhstan } from '../kazakhstanListingData';

export default function KazakhstanListing() {
  return <DestinationListing d={kazakhstan} testId="kazakhstan-listing-page" />;
}

export function KazakhstanHolidays() {
  return <EgyptHolidays d={{ ...kazakhstan, plannerSource: 'kazakhstan-holidays', testId: 'kazakhstan-holidays-page' }} />;
}
