import { useStore } from "@nanostores/react";
import { defaultLanguage } from "../services/LanguageStore";
import type { SocialMediaData } from "../types/SocialMedia"
import type { PolicyData } from "../types/PolicyData";

export type FooterProps = {
    socialMedia: SocialMediaData[]
    policies: PolicyData[]
}

export default function Footer(props: FooterProps) {

    const socialMedia = props.socialMedia 
    return (
        <div className="">
            <hr className="mb-5 border-b-1 border-black w-5/6 mx-auto" />
            {socialMedia.map(data=>(
                <p className="text-text">{data.name}</p>
            ))}
            <hr className="mb-5 border-b-1 border-black w-5/6 mx-auto" />
        </div>
    );

}