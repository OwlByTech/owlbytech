import { readSingleton } from "@directus/sdk";
import { directus } from "../lib/directus";
import { type CaseCard } from "../types/CaseCard";
import { type HomeData } from "../types/Home"
import type { ServicesData } from "../types/Services";
import type { ContactFormData } from "../types/ContactForm";
import type { Navbar } from "../types/Navbar";
import type { TechnologyData } from "../types/Technology";
import type { SocialMediaData } from "../types/SocialMedia";
import type { PolicyData } from "../types/PolicyData";
import type { AboutUsData } from "../types/AboutUs";
import type { ContactFormField } from "../types/ContactFormField";
import type { ContactFormFieldTranslation, FormFieldTranslation } from "../types/ContactFormFieldTranslation";
import type { WorkerData } from "../types/Worker";
import type { ContactFormHomeData } from "../types/ContactFormHome";
import type { GlobalData } from "../types/Global";
import type { MainData} from "../types/Main"

let casecards, navbar: Navbar[], home, main, services, contactFormFieldTranslation, contactFormField, contactFormHome, contactForm, technologies, socialMedia, policies, aboutUs, workers;

export function directusAssets(path: string) {
  return `${directus.url}assets/${path}`;
}

export async function navbarFetching() {
  return await directus.request<Navbar[]>(readSingleton("navbar_translations"))
}

export async function homeFetching() {
  return await directus.request<HomeData[]>(readSingleton("home_translations"))
}

export async function caseCardFetching() {
  return await directus.request<CaseCard[]>(() => ({
    path: "/items/case_card_translations",
    method: "GET",
  }));
}

export async function mainFetching() {
  return await directus.request<GlobalData[]>(readSingleton("global_translations"))
}

export async function servicesFetching() {
  return await directus.request<ServicesData[]>(() => ({
    path: "/items/services_translations",
    method: "GET",
  }));
}
export async function socialMediaFetching() {
  return await directus.request<SocialMediaData[]>(readSingleton("social_media"));
}

export async function policiesFetching() {
  return await directus.request<PolicyData[]>(readSingleton("policies_translations"));
}

export async function ContactFormHomeFetching(): Promise<ContactFormHomeData[]> {
  return await directus.request<ContactFormHomeData[]>(readSingleton("contact_form_home_translations"));
}

export async function ContactFormFetching(): Promise<ContactFormData[]> {
  return await directus.request<ContactFormData[]>(readSingleton("contact_form_translations"));
}

export async function ContactFormFieldFetching() {
  return await directus.request<ContactFormField[]>(readSingleton("contact_form_field"));
}

export async function ContactFormFieldTranslationFetching() {
  return await directus.request<ContactFormFieldTranslation[]>(readSingleton("contact_form_field_translations"));
}

export async function globalFetching(){
  return await directus.request<MainData[]>(readSingleton("global"))
}

export async function WorkerFetching(): Promise<WorkerData[]> {
  const workers = await directus.request<WorkerData[]>(readSingleton("worker"));
  return workers.map((data) => {
    data.github
    return {
      ...data,
      character: directusAssets(data.character)
    }
  })
}

async function apiFetchAll() {
  casecards = await directus.request<CaseCard[]>(() => ({
    path: "/items/case_card_translations",
    method: "GET",
  }));

  navbar = await directus.request<Navbar[]>(readSingleton("navbar_translations"))

  home = await directus.request<HomeData[]>(readSingleton("home_translations"))

  main = await directus.request<GlobalData[]>(readSingleton("global_translations"))

  services = await directus.request<ServicesData[]>(() => ({
    path: "/items/services_translations",
    method: "GET",
  }));

  contactFormFieldTranslation = await directus.request<ContactFormFieldTranslation[]>(readSingleton("contact_form_field_translations"));
  contactFormField = await directus.request<ContactFormField[]>(readSingleton("contact_form_field"));
  contactFormHome = await directus.request<ContactFormHomeData[]>(readSingleton("contact_form_home_translations"));
  contactForm = await directus.request<ContactFormData[]>(readSingleton("contact_form_translations"));

  technologies = await directus.request<TechnologyData[]>(readSingleton("technologies"));
  socialMedia = await directus.request<SocialMediaData[]>(readSingleton("social_media"));
  policies = await directus.request<PolicyData[]>(readSingleton("policies"));

  aboutUs = await directus.request<AboutUsData[]>(readSingleton("about_us"));
  workers = await directus.request<WorkerData[]>(readSingleton("worker"));
}

export { apiFetchAll, casecards, navbar, home, main, services, contactFormFieldTranslation, contactFormField, contactFormHome, contactForm, technologies, socialMedia, policies, aboutUs, workers }
