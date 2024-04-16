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
            <button onClick={handleLanguageChange}>
                {currentLanguage === "es-ES" ? "Switch to en-US" : "Cambiar a es-ES"}
            </button>
            {currentLanguage}
        </div>
    );
}
