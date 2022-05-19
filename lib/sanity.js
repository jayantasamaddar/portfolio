import {
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { config } from './config';

// Setup a helper function to generate Sanity image URLs
export const urlFor = source => imageUrlBuilder(config).image(source);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const useCurrentUser = createCurrentUserHook(config);
