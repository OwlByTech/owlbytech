import { useState } from "react";
import { useStore } from "@nanostores/react";
import { changeLanguage, defaultLanguage } from "../../services/LanguageStore";

export default function Language() {
    const $defaultLanguage = useStore(defaultLanguage);
    const [currentLanguage, setCurrentLanguage] = useState<string>($defaultLanguage);

    const handleLanguageChange = () => {
        const newLanguage = currentLanguage === "es-ES" ? "en-US" : "es-ES";
        changeLanguage(newLanguage);
        setCurrentLanguage(newLanguage);
    };

    return (
        <div>
            <button onClick={handleLanguageChange} className="text-text text-xl px-3">
                {currentLanguage === "es-ES" ? "EN" : "ES"}
            </button>
        </div>
    );
}
