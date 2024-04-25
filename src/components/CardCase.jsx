import { useStore } from "@nanostores/react";
import { defaultLanguage } from "../services/LanguageStore";
import { casecards } from "../services/api";
import directus from "../lib/directus";
import { main } from "../services/api";

export default function CardCase() {
    const $defaultLanguage = useStore(defaultLanguage);
    const mainData = main.filter(item => item.languages_code === $defaultLanguage);
    const item = mainData[0]
    const filteredCaseCards = casecards.filter(data => data.languages_code === $defaultLanguage);

    return (
        <div className="px-4 py-4">
            <h1 className="text-text font-bold px-4 text-6xl">
            {item.case_title}
            </h1>
            <p className="text-text px-4 text-2xl">{item.case_subtitle}</p>
            <div className="grid px-10 py-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {filteredCaseCards.map(data => (
                    <div key={data.id} className="max-w-xs rounded-xl overflow-hidden shadow-lg border border-gray-800">  
                        <div className="p-4">
                            <img className="w-16 h-16 float-left mr-6 rounded-xl border border-gray-800" src={`${directus.url}assets/${data.image}?width=80`} alt="" />
                            <div className="">
                                <h1 className="text-text font-bold text-3xl mb-5 mt-5">{data.title}</h1>
                                <p className="text-text">{data.description}</p>
                            </div>
                        </div>
                        <div className="px-6 py-4">
                            <div className="mt-4">
                                {data.tags.map((tag, index) => (
                                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 pb-1 pt-2">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
