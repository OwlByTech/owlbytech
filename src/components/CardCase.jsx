import { useStore } from "@nanostores/react";
import { defaultLanguage } from "../services/LanguageStore";
import { casecards } from "../services/api";
import directus from "../lib/directus";

export default function CardCase() {
    const $defaultLanguage = useStore(defaultLanguage);

    const filteredCaseCards = casecards.filter(data => data.languages_code === $defaultLanguage);

    return (
        <div className="px-4 py-4">
            <div className="grid px-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {filteredCaseCards.map(data => (
                    <div key={data.id} className="max-w-xs rounded overflow-hidden shadow-lg border border-gray-800">
                        <div className="p-4">
                            <img className="w-16 h-16 float-left mr-6" src={`${directus.url}assets/${data.image}?width=80`} alt="" />
                            <div>
                                <h1 className="text-text text-lg font-bold mb-2">{data.title}</h1>
                                <p className="text-text text-base">{data.description}</p>
                            </div>
                        </div>
                        <div className="px-6 py-4">
                            <div className="mt-4">
                                {data.tags.map((tag, index) => (
                                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
