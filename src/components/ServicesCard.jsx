import { useStore } from "@nanostores/react";
import { defaultLanguage } from "../services/LanguageStore";
import { services } from "../services/api";
import { main } from "../services/api";

export default function ServicesCard() {
  const $defaultLanguage = useStore(defaultLanguage);
  const mainData = main.filter(item => item.languages_code === $defaultLanguage);
  const item = mainData[0]
  const filteredServices = services.filter(data => data.languages_id === $defaultLanguage);
  const itemHeight = 270; 
  const containerHeight = filteredServices.length * itemHeight; 

  return (
    <div className="p-10 ml-12"
      style={{
        height: `${containerHeight}px`
      }}
    >
      <h1 className="text-text font-bold px-4 text-6xl">{item.services_title}</h1>
      <p className="text-text px-4 mb-10 text-3xl">{item.services_subtitle}</p>
      <div className="grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-14 mx-auto max-w-screen-lg justify-center">
        {filteredServices.map((data, index) => (
          <div key={data.id} className="px-11 py-11 max-w-xl rounded-xl overflow-hidden shadow-lg border border-gray-800" style={{ transform: `translateY(${index * 50}px)` }}>
            <h1 className="text-text font-bold text-5xl mb-5 mt-5">{data.title}</h1>
            <p className="text-text">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

}  