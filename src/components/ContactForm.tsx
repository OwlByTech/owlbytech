import { useStore } from "@nanostores/react";
import { defaultLanguage } from "../services/LanguageStore";
import { contactForm, contactFormField, contactFormFieldTranslation } from "../services/api";
import TextInput from "./core/TextInput";
import Submit from "./core/Submit";
import TextArea from "./core/TextArea";
import type { ContactFormFieldTranslation } from "../types/ContactFormFieldTranslation";
import type { ContactFormField } from "../types/ContactFormField";
import EmailInput from "./core/EmailInput";
import FileInput from "./core/FileInput";
import Checkbox from "./core/Checkbox";

type FormFieldTranslation = ContactFormFieldTranslation & ContactFormField;

export default function ContactForm() {
    const $defaultLanguage = useStore(defaultLanguage);
    const contactFormData = contactForm.filter(data => data.languages_code === $defaultLanguage);
    const contactFormFieldTranslationsData = contactFormFieldTranslation.filter(data => data.languages_code === $defaultLanguage);

    const contactFormFields: Array<FormFieldTranslation> = contactFormField.map((field) => {
        const translation = contactFormFieldTranslationsData.find((translation) => {
            return field.translations.includes(translation.id);
        }) as ContactFormFieldTranslation;

        return {
            ...field as ContactFormField,
            ...translation,
            id: field.id,
        }
    });

    return (
        <div className="container mx-auto flex flex-col sm:flex-row border border-text border-solid rounded-xl gap-14 p-24 items-center text-text">
            {contactFormData.map((data, index) => (
                <div className="flex flex-col w-full gap-7" key={index}>
                    <h1 className="font-bold text-4xl">{data.title}</h1>
                    <p>{data.description}</p>
                </div>
            ))}


            <form className="flex flex-col w-full gap-6">
                {
                    contactFormFields.map((data, index) => {
                        console.log(data.type);
                        switch (data.type) {
                            case 'text-input':
                                return <TextInput
                                    name={data.name}
                                    key={index}
                                    label={data.label}
                                    placeholder={data.placeholder!}
                                />
                            case 'submit':
                                return <Submit key={index} value={data.label} />
                            case 'text-area':
                                return <TextArea key={index} name={data.name} placeholder={data.placeholder} />
                            case 'email-input':
                                return <EmailInput name={data.name} placeholder={data.placeholder}/>
                            case 'file-input':
                                return <FileInput/>
                            case 'checkbox':
                                return <Checkbox name={data.name} value={data.placeholder}/>
                        }

                        return (
                            <div
                                key={index}
                                className=""
                            >{data.placeholder}</div>
                        );
                    })
                }
            </form>
        </div>
    )
}