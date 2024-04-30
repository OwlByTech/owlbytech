import { useStore } from "@nanostores/react";
import { defaultLanguage } from "../services/LanguageStore";
import type { CaseCard } from "../types/CaseCard";
import type { GlobalData } from "../types/Global";

export type CardCaseProps = {
    data: CaseCard[]
    mainData: GlobalData[]
}

export default function CardCase(props: CardCaseProps) {
    const $defaultLanguage = useStore(defaultLanguage);
    const mainData = props.mainData.filter(item => item.languages_code === $defaultLanguage);
    const item = mainData[0]
    const filteredCaseCards = props.data.filter(data => data.languages_code === $defaultLanguage);

    return (
        <div className="p-10 ml-12 mb-10">
            <h1 className="text-text font-bold text-6xl">
            {item.case_title}
            </h1>
            <p className="text-text mb-10 text-3xl">{item.case_subtitle}</p>
            <div className="grid py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {filteredCaseCards.map(data => (
                    <div key={data.id} className="max-w-xs rounded-xl overflow-hidden shadow-lg border border-gray-800">  
                        <div className="p-6">
                            <img className="w-16 h-16 float-left mr-6 rounded-xl border border-gray-800" src={data.image} alt="" />
                            <div className="">
                                <h1 className="text-text font-bold text-3xl mb-5 mt-5">{data.title}</h1>
                                <p className="text-text">{data.description}</p>
                            </div>
                        </div>
                        <div className="px-6 py-4">
                            <div className="mt-4">
                                {data?.tags?.map((tag, index) => (
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
