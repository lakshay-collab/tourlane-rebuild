import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { maldives } from '../maldivesListingData';

export default function MaldivesListing() {
  return <DestinationListing d={maldives} testId="maldives-listing-page" />;
}

export function MaldivesHolidays() {
  return <EgyptHolidays d={{ ...maldives, plannerSource: 'maldives-holidays', testId: 'maldives-holidays-page' }} />;
}
