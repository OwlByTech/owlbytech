import { readSingleton } from "@directus/sdk";
import directus from "../lib/directus";
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
import type { ContactFormFieldTranslation } from "../types/ContactFormFieldTranslation";
import type { WorkerData } from "../types/Worker";

export const casecards = await directus.request<CaseCard[]>(() => ({
    path: "/items/case_card_translations",
    method: "GET",
  }));

export const navbar = await directus.request<Navbar[]>(readSingleton("navbar_translations")) 

export const home = await directus.request<HomeData[]>(readSingleton("home_translations"))

export const main = await directus.request<Global[]>(readSingleton("global_translations"))

export const services = await directus.request<ServicesData[]>(() => ({
  path: "/items/services_translations",
  method: "GET",
}));

export const contactFormFieldTranslation = await directus.request<ContactFormFieldTranslation[]>(readSingleton("contact_form_field_translations"));
export const contactFormField = await directus.request<ContactFormField[]>(readSingleton("contact_form_field"));
export const contactForm = await directus.request<ContactFormData[]>(readSingleton("contact_form_translations"));
export const technologies = await directus.request<TechnologyData[]>(readSingleton("technologies"));
export const socialMedia = await directus.request<SocialMediaData[]>(readSingleton("social_media"));
export const policies = await directus.request<PolicyData[]>(readSingleton("policies"));
export const aboutUs = await directus.request<AboutUsData[]>(readSingleton("about_us"));
export const workers = await directus.request<WorkerData[]>(readSingleton("worker"));