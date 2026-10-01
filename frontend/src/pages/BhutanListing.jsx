import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { bhutan } from '../bhutanListingData';

export default function BhutanListing() {
  return <DestinationListing d={bhutan} testId="bhutan-listing-page" />;
}

export function BhutanHolidays() {
  return <EgyptHolidays d={{ ...bhutan, plannerSource: 'bhutan-holidays', testId: 'bhutan-holidays-page' }} />;
}
