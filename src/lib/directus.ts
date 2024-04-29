import { createDirectus, rest, type DirectusClient, type RestClient, } from '@directus/sdk';

let directus: DirectusClient<any> & RestClient<any>;

function directusInitialization(url: string, token: string) {
  if (!url) {
    throw new Error('DIRECTUS_URL is not defined');
  }
  
  if (!token) {
    throw new Error('DIRECTUS_TOKEN is not defined');
  }

  directus = createDirectus(url).with(rest());
}

export {
  directusInitialization,
  directus
}