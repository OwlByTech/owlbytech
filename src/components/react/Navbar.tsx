import { defaultLanguage } from "../../services/LanguageStore";
import { useStore } from "@nanostores/react";
import Language from "./Language";
import type { Navbar } from "../../types/Navbar";
import type { MainData } from "../../types/Main";

export type NavBarProps = {
    data: Navbar[];
    global: MainData
}

export default function Navbar(props: NavBarProps) {
    const $defaultLanguage = useStore(defaultLanguage)
    const navbarData = props.data.find(data => data.languages_code === $defaultLanguage)

    return (
        <nav className="flex flex-col p-8 md:px-32 gap-3">
            <div className="flex w-full flex-col md:flex-row justify-between items-center">
                <div className="flex justify-center items-center">
                    <img src={props.global.logo} alt="" className="w-48" />
                </div>
                <div className="hidden md:flex">
                    {navbarData?.sections?.map((item, index) => (
                        <p key={index} className="text-text text-bold text-xl ml-4">{item}</p>
                    ))}
                    <Language />
                </div>
            </div>
            <hr className="border-b-1 border-black w-full mx-auto" />

        </nav>
    );
}
