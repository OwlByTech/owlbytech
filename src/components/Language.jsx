import React, { useState } from "react";
import { useStore } from "@nanostores/react";
import { defaultLanguage, changeLanguage } from "../services/LanguageStore";

export default function Language() {
    const $defaultLanguage = useStore(defaultLanguage);
    const [currentLanguage, setCurrentLanguage] = useState($defaultLanguage);

    const handleLanguageChange = () => {
        const newLanguage = currentLanguage === "es-ES" ? "en-US" : "es-ES";
        changeLanguage(newLanguage);
        setCurrentLanguage(newLanguage);
    };

    return (
        <div>
            <button onClick={handleLanguageChange} className="text-text px-3">
                {currentLanguage === "es-ES" ? "EN" : "ES"}
            </button>
            {currentLanguage}
        </div>
    );
}
