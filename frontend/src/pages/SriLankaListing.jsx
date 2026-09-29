import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { srilanka } from '../srilankaListingData';

export default function SriLankaListing() {
  return <DestinationListing d={srilanka} testId="srilanka-listing-page" />;
}

export function SriLankaHolidays() {
  return <EgyptHolidays d={{ ...srilanka, plannerSource: 'srilanka-holidays', testId: 'srilanka-holidays-page' }} />;
}
