import { useStore } from "@nanostores/react";
import { defaultLanguage } from "../services/LanguageStore";
import { emailForm } from "../services/api";

export default function EmailFrom() {
    const $defaultLanguage = useStore(defaultLanguage);
    return (
        <div className="">
            {emailForm.filter(data => data.languages_code === $defaultLanguage).map((data, index) => (
                <div key={index}>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
            ))}
        </div>
    )
}