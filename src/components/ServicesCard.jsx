import { useStore } from "@nanostores/react";
import { defaultLanguage } from "../services/LanguageStore";
import { services } from "../services/api";
import directus from "../lib/directus";


export default function ServicesCard() {
  const $defaultLanguage = useStore(defaultLanguage);
  
  return (
    <div>
      {services
        .filter(data => data.languages_id === $defaultLanguage)
        .map(data => (
          <div>
            <img src={`${directus.url}assets/${data.image}?width=80`} alt="" />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>
        ))
      }
    </div>
  )
}