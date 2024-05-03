import type { SocialMediaData } from "../../types/SocialMedia"
import type { PolicyData } from "../../types/PolicyData";
import type { ServicesData } from "../../types/Services";
import { useStore } from "@nanostores/react";
import { defaultLanguage } from "../../services/LanguageStore";
import type { MainData } from "../../types/Main";

export type FooterProps = {
    socialMedia: SocialMediaData[]
    policies: PolicyData[]
    services: ServicesData[]
    global: MainData
}

export default function Footer(props: FooterProps) {

    const $defaultLanguage = useStore(defaultLanguage)
    const socialMedia = props.socialMedia
    const global = props.global
    const filteredPolicy = props.policies.filter(data => data.languages_code === $defaultLanguage);
    const filteredServices = props.services.filter(data => data.languages_id === $defaultLanguage);

    console.log(global)
    return (
        <main className="">
            <hr className="mb-5 border-b-1 border-black w-5/6 mx-auto" />
            <div>
                {socialMedia.map(data => (
                    <p className="text-text">{data.name}</p>
                ))}
            </div>
            <div>
                {filteredPolicy.map(item => (
                    <p className="text-text">{item.title}</p>
                ))}
            </div>
            <div>
                {filteredServices.map(data => (
                    <p className="text-text">{data.title}</p>
                ))}
            </div>
            <hr className="mb-5 border-b-1 border-black w-5/6 mx-auto" />
            <div>
                <h1 className="text-text">{global.title}</h1>
                <img src={global.logo} alt="" />
            </div>
        </main>
    );

}