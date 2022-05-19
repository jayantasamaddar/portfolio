/**
 * Authenticate talking to the Sanity backend and define how we get the client in order to communicate
 * with us.
 */

import { createClient } from 'next-sanity';
import { config } from './config';

export const sanityClient = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token:
    'skg2PGv5nXlmROUrT2QJyYmMw07KoebK3IXOdj0qBWPsHtChGoGIvRnB0H3CxTNzDx76OczJ4XmaNc1MQlBBU40D4ODzRah5CDyrKKw2jLe6B08zfAsrK6oFhDuAx1W5suAJZFMADw7q4e7AB7IvWMHIT9A8CkgYWA9He1J8sctmIRmCqrNt',
});

export const getClient = usePreview =>
  usePreview ? previewClient : sanityClient;
