import { readSingleton } from "@directus/sdk";
import directus from "../lib/directus";
import { type CaseCard } from "../types/CaseCard";
import { type HomeData } from "../types/Home"
import type { ServicesData } from "../types/Services";
import type { EmailData } from "../types/EmailData";
import type { Navbar } from "../types/Navbar";
import type { TechnologyData } from "../types/Technology";
import type { SocialMediaData } from "../types/SocialMedia";
import type { PolicyData } from "../types/PolicyData";
import type { AboutUsData } from "../types/AboutUs";

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

export const emailForm: EmailData[] = await directus.request<EmailData[]>(readSingleton("email_form_translations"))
export const technologies = await directus.request<TechnologyData[]>(readSingleton("technologies"));
export const socialMedia = await directus.request<SocialMediaData[]>(readSingleton("social_media"));
export const policies = await directus.request<PolicyData[]>(readSingleton("policies"));
export const aboutUs = await directus.request<AboutUsData[]>(readSingleton("about_us"));