import { createDirectus, rest, } from '@directus/sdk';
import dotenv from 'dotenv';

dotenv.config();
const directusUrl = process.env.DIRECTUS_URL;

type Global = {
  title: string;
  description: string;
}

type Schema = {
  global: Global;
}

if (!directusUrl) {
  throw new Error('La variable de entorno DIRECTUS_URL no está definida');
}

const directus = createDirectus<Schema>(directusUrl).with(rest());
export default directus;