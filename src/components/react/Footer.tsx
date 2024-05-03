import React from "react";
import { useStore } from "@nanostores/react";
import { defaultLanguage } from "../../services/LanguageStore";
import type { SocialMediaData } from "../../types/SocialMedia"
import type { PolicyData } from "../../types/PolicyData";
import type { ServicesData } from "../../types/Services";
import type { MainData } from "../../types/Main";
import type { AboutUsFooter } from "../../types/AboutUsFooter";

export type FooterProps = {
    socialMedia: SocialMediaData[]
    policies: PolicyData[]
    services: ServicesData[]
    global: MainData
    aboutUsFooter: AboutUsFooter[]
}



export default function Footer(props: FooterProps) {
    const $defaultLanguage = useStore(defaultLanguage);
    const { socialMedia, policies, services, global, aboutUsFooter } = props;

    // Filtrando las políticas y servicios por el idioma predeterminado
    const filteredPolicy = policies.filter(data => data.languages_code === $defaultLanguage);
    const filteredServices = services.filter(data => data.languages_id === $defaultLanguage);
    const filteredAboutUs = aboutUsFooter.filter(data => data.languages_code === $defaultLanguage);

    return (
        <footer className="py-8">
            <hr className="mb-5 border-b-1 border-black w-5/6 mx-auto" />
            <div className="container mx-auto flex justify-center">
                <div className="w-1/4 text-center">
                    <h3 className="text-text text-left text-lg font-semibold mb-4">Redes Sociales</h3>
                    {socialMedia.map(data => (
                        <a href={data.link}>
                            <div className="flex space-x-2">
                                <img src={data.icon} alt="" className="h-5 w-5" />
                                <p className="text-text text-left">{data.name}  </p>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="w-1/4 text-center">
                    <h3 className="text-text text-left text-lg font-semibold mb-4">Servicios</h3>
                    {filteredServices.map(data => (
                        <p className="text-text text-left" key={data.id}>{data.title}</p>
                    ))}
                </div>

                <div className="w-1/4 text-center">
                    <h3 className="text-text text-left text-lg font-semibold mb-4">About Us</h3>
                    {filteredAboutUs.map(data => (
                        <p className="text-text text-left">{data.title}</p>
                    ))}
                </div>
                <div className="w-1/4 text-center">
                    <h3 className="text-text text-left text-lg font-semibold mb-4">Políticas</h3>
                    {filteredPolicy.map(item => (
                        <p className="text-text text-left">{item.title}</p>
                    ))}
                </div>
            </div>
            <hr className="mt-8 border-b-1 border-black w-5/6 mx-auto" />
            <div className="container mx-auto flex justify-between items-center">
                <img src={global.logo} alt="" className="w-80 h-80 w-1/2" />
                <p className="text-text text-right w-1/2">{global.copyright}</p>
            </div>
        </footer>
    );
}
