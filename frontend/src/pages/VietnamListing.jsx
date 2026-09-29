import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { vietnam } from '../vietnamListingData';

export default function VietnamListing() {
  return <DestinationListing d={vietnam} testId="vietnam-listing-page" />;
}

export function VietnamHolidays() {
  return <EgyptHolidays d={{ ...vietnam, plannerSource: 'vietnam-holidays', testId: 'vietnam-holidays-page' }} />;
}
