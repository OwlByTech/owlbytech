import {
  authentication,
  createDirectus,
  rest,
  type AuthenticationClient,
  type DirectusClient,
  type RestClient,
} from "@directus/sdk";

let directus: DirectusClient<any> & RestClient<any> & AuthenticationClient<any>;

async function directusInitialization(
  url: string,
  email: string,
  password: string,
) {
  if (!url) {
    throw new Error("DIRECTUS_URL is not defined");
  }

  if (!email) {
    throw new Error("DIRECTUS_BUSINESS_EMAIL is not defined");
  }

  if (!email) {
    throw new Error("DIRECTUS_BUSINESS_PASSWORD is not defined");
  }

  directus = createDirectus(url).with(authentication()).with(rest());
  await directus.login(email, password);
}

export { directusInitialization, directus };
