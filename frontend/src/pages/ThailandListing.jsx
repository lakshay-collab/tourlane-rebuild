import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { thailand } from '../thailandListingData';

export default function ThailandListing() {
  return <DestinationListing d={thailand} testId="thailand-listing-page" />;
}

export function ThailandHolidays() {
  return <EgyptHolidays d={{ ...thailand, plannerSource: 'thailand-holidays', testId: 'thailand-holidays-page' }} />;
}
