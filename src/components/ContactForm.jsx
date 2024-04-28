import { useStore } from "@nanostores/react";
import { defaultLanguage } from "../services/LanguageStore";
import { contactForm, contactFormField } from "../services/api";

export default function ContactForm() {
    const $defaultLanguage = useStore(defaultLanguage);
    const contactFormData = contactForm.filter(data => data.languages_code === $defaultLanguage);
    const contactFormFieldData = contactFormField.filter(data => data.languages_code === $defaultLanguage);

    return (
        <div className="container mx-auto flex border border-text border-solid rounded-xl gap-14 p-24 items-center text-text">
            {contactFormData.map((data, index) => (
                <div className="flex flex-col w-full gap-7" key={index}>
                    <h1 className="font-bold text-4xl">{data.title}</h1>
                    <p>{data.description}</p>
                </div>
            ))}

            <div className="flex flex-col w-full">
                {
                    contactFormFieldData.map((data, index) => {
                        return (
                            <div
                            key={index} 
                            className=""
                            >{data.placeholder}</div>
                        );
                    })
                }
            </div>
            
        </div>
    )
}