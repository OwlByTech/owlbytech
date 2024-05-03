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
        <footer className="flex flex-col px-32 gap-5 justify-center items-center">
            <hr className="border-b-1 border-black w-full" />
            <div className="flex flex-col sm:flex-row w-full justify-between">
                <div className="flex flex-col text-center gap-4">
                    <h3 className="text-text text-left text-lg font-semibold">Redes Sociales</h3>
                    <div>
                        {socialMedia.map(data => (
                            <a href={data.link}>
                                <div className="flex space-x-2">
                                    <img src={data.icon} alt="" className="h-5 w-5" />
                                    <p className="text-text text-left">{data.name}  </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col text-center gap-4">
                    <h3 className="text-text text-left text-lg font-semibold">Servicios</h3>
                    <div>
                        {filteredServices.map(data => (
                            <p className="text-text text-left" key={data.id}>{data.title}</p>
                        ))}
                    </div>

                </div>

                <div className="flex flex-col text-center gap-4">
                    <h3 className="text-text text-left text-lg font-semibold">About Us</h3>
                    <div>
                        {filteredAboutUs.map(data => (
                            <p className="text-text text-left">{data.title}</p>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col text-center gap-4">
                    <h3 className="text-text text-left text-lg font-semibold">Políticas</h3>
                    <div>
                        {filteredPolicy.map(item => (
                            <p className="text-text text-left">{item.title}</p>
                        ))}
                    </div>

                </div>
            </div>
            <hr className="mt-8 border-b-1 border-black w-full" />
            <div className="flex w-full justify-between items-center">
                <img src={global.logo} alt="" className="w-80 h-80" />
                <p className="text-text text-right">{global.copyright}</p>
            </div>
        </footer>
    );
}
