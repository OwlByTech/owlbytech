import React, { useState } from "react";
import { useStore } from "@nanostores/react";
import { defaultLanguage, changeLanguage } from "../services/LanguageStore";
import spanishFlag from "../../public/spanish.png"
import englishFlag from "../../public/english.png";

export default function Language() {
    const $defaultLanguage = useStore(defaultLanguage);
    const [currentLanguage, setCurrentLanguage] = useState($defaultLanguage);
    const flagImage = currentLanguage === "es-ES" ?  englishFlag: spanishFlag;

    const handleLanguageChange = () => {
        const newLanguage = currentLanguage === "es-ES" ? "en-US" : "es-ES";
        changeLanguage(newLanguage);
        setCurrentLanguage(newLanguage);
    };

    return (
        <div>
            <button onClick={handleLanguageChange} className="text-text text-xl px-3">
                <img className="h-7 w-7" src={flagImage.src} alt="Language Flag" />
            </button>
        </div>
    );
}
