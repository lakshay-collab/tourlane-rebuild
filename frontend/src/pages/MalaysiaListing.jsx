import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { malaysia } from '../malaysiaListingData';

export default function MalaysiaListing() {
  return <DestinationListing d={malaysia} testId="malaysia-listing-page" />;
}

export function MalaysiaHolidays() {
  return <EgyptHolidays d={{ ...malaysia, plannerSource: 'malaysia-holidays', testId: 'malaysia-holidays-page' }} />;
}
