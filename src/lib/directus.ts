import { createDirectus, rest, } from '@directus/sdk';

const directusUrl = "https://cms.owlbytech.com"

if (!directusUrl) {
  throw new Error('La variable de entorno DIRECTUS_URL no está definida');
}

const directus = createDirectus(directusUrl).with(rest());
export default directus;