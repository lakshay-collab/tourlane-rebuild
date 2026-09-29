import React from 'react';
import DestinationListing from './DestinationListing';
import { hero, crumbs, intro, tours, products, features, places, activities, themes, africa, holidaysPath, plan, faq, planner, reviews, egyptReviewItems } from '../egyptListingData';

const egypt = { pageTitle: 'Egypt Honeymoons and holidays | Hi Tours', hero, crumbs, intro, tours, products, features, places, activities, themes, related: africa, holidaysPath, plan, faq, planner, reviews: { ...reviews, items: egyptReviewItems }, plannerSource: 'egypt-planner' };

export default function EgyptListing() {
  return <DestinationListing d={egypt} testId="egypt-listing-page" />;
}
