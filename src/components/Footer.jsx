import { useStore } from "@nanostores/react";
import { defaultLanguage } from "../services/LanguageStore";
import { policies, socialMedia, technologies } from "../services/api";

export default function Footer() {
    const $defaultLanguage = useStore(defaultLanguage);
    console.log(technologies);
    console.log(socialMedia);
    console.log(policies);
    const aboutUs = [
        {
            name: "Open Source",
            link: "#open-source"
        },
        {
            name: "Code of Conduct",
            link: "/code-of-conduct"
        },
        {
            name: "Team",
            link: "/about-us#team"
        }
    ];

    return (
        <div className="">
            {aboutUs.map(data => (
                <div>
                    <p className="text-text">{data.name}</p>
                    <p>{data.link}</p>
                </div>
            ))}
        </div>
    );

}