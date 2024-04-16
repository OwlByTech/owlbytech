import { useStore } from "@nanostores/react";
import { defaultLanguage } from "../services/LanguageStore";
import { casecards } from "../services/api";
import directus from "../lib/directus";

export default function CardCase() {
    const $defaultLanguage = useStore(defaultLanguage)
    return (<div>
        {casecards.filter(data => data.languages_code === $defaultLanguage).map(data => (
            <div>
                <img src={`${directus.url}assets/${data.image}?width=80`} alt="" />
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                {data.tags.map(tag => (
                    <p>{tag}</p>
                ))}
            </div>
        ))}

    </div>)
}