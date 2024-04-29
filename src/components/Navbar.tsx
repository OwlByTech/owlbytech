import { defaultLanguage } from "../services/LanguageStore";
import { useStore } from "@nanostores/react";
import { directusAssets, navbar } from "../services/api";
import Language from "./Language";
import type { Navbar } from "../types/Navbar";

export type NavBarProps = {
    data: Navbar[];
}

export default function Navbar(props: NavBarProps) {
    const $defaultLanguage = useStore(defaultLanguage)
    const navbarData = props.data.find(data => data.languages_code === $defaultLanguage)

    return (
        <>
            <nav className="p-7">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <img className="h-12" src={navbarData?.header_image ?? ""} alt="" />
                        <h1 className="text-text text-bold text-2xl ml-4">{navbarData?.header_title}</h1>
                    </div>
                    <div className="flex">
                        {navbarData?.sections?.map((item, index) => (
                            <p key={index} className="text-text text-bold text-xl ml-4">{item}</p>
                        ))}
                        <Language />
                    </div>
                </div>
            </nav>
            <hr className="border-b-1 border-black w-5/6 mx-auto" />
        </>
    );
}
