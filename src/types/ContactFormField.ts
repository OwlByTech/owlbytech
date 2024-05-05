export interface ContactFormField {
  id: number;
  type:
    | "text-input"
    | "email-input"
    | "file-input"
    | "checkbox"
    | "submit"
    | "text-area"
    | "recaptcha";
  required: boolean;
  enable: boolean;
  name: string;
  translations: Array<number>;
}
