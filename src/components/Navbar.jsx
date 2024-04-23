import { defaultLanguage } from "../services/LanguageStore";
import { useStore } from "@nanostores/react";
import { navbar } from "../services/api";
import directus from "../lib/directus";
import Language from "./Language";

export default function Navbar() {
    const $defaultLanguage = useStore(defaultLanguage)
    const navbarData = navbar.find(data => data.languages_code === $defaultLanguage)

    return (
        <nav className="py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                   
                    <img className="h-12" src={`${directus.url}assets/${navbarData?.header_image}?width=80`} alt="" />
                    <h1 className="text-text m-2">{navbarData?.header_title}</h1>
                </div>
                <div className="flex">
                    {navbarData?.sections.map((item, index) => (
                        <p key={index} className="text-text ml-4">{item}</p>
                    ))}
                     <Language />
                </div>
            </div>
        </nav>
    )
}
