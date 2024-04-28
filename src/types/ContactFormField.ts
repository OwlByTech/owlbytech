export interface ContactFormField {
    id: number;
    type: "text-input" | "email-input" | "file-input" | "checkbox" | "submit" | "text-area";
    required: boolean;
    name: string;
    translations: Array<number>
}