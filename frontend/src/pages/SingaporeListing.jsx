import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { singapore } from '../singaporeListingData';

export default function SingaporeListing() {
  return <DestinationListing d={singapore} testId="singapore-listing-page" />;
}

export function SingaporeHolidays() {
  return <EgyptHolidays d={{ ...singapore, plannerSource: 'singapore-holidays', testId: 'singapore-holidays-page' }} />;
}
