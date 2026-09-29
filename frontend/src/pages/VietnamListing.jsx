import React from 'react';
import DestinationListing from './DestinationListing';
import { vietnam } from '../vietnamListingData';

export default function VietnamListing() {
  return <DestinationListing d={vietnam} testId="vietnam-listing-page" />;
}
