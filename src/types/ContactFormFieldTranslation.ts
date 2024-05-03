import type { ContactFormField } from "./ContactFormField";

export interface ContactFormFieldTranslation {
  id: number;
  languages_code: string;
  placeholder: string;
  label: string;
}

export type FormFieldTranslation = ContactFormFieldTranslation &
  ContactFormField;
