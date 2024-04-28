export interface ContactFormField {
    id: number;
    languages_code: string;
    type: "text-input" | "email-input" | "file-input" | "checkbox" | "submit";
    required: boolean;
    placeholder: string;
    label: string;
}