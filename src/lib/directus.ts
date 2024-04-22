import { createDirectus, rest, } from '@directus/sdk';

const directusUrl = "https://cms.owlbytech.com"

if (!directusUrl) {
  throw new Error('DIRECTUS_URL is not defined');
}

const directus = createDirectus(directusUrl).with(rest());
export default directus;