import { useStore } from "@nanostores/react";
import { defaultLanguage } from "../../services/LanguageStore";
import type { CaseCard } from "../../types/CaseCard";
import type { GlobalData } from "../../types/Global";
import { useInView, animated } from '@react-spring/web'

export type CardCaseProps = {
  data: CaseCard[];
  mainData: GlobalData[];
};

export default function CardCase(props: CardCaseProps) {
  const $defaultLanguage = useStore(defaultLanguage);
  const mainData = props.mainData.filter(
    (item) => item.languages_code === $defaultLanguage,
  );
  const item = mainData[0];
  const filteredCaseCards = props.data.filter(
    (data) => data.languages_code === $defaultLanguage,
  );
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: '-10% 10%',
    }
  )

  return (
    <div id="1" className="text-text flex flex-col p-8 items-center md:p-32 gap-16">
      <div>
        <h1 className="text-text font-bold text-4xl md:text-6xl">
          {item.case_title}
        </h1>
        <p className="text-text text-center text-3xl font-thin">
          {item.case_subtitle}
        </p>
      </div>
      <animated.div ref={ref} style={springs}>
        <div className="flex flex-wrap justify-center md:justify-center gap-8">
          {filteredCaseCards.map((data) => (
            <div
              key={data.id}
              className="flex  justify-between flex-col max-w-xs rounded-xl overflow-hidden shadow-lg border border-gray-800 p-6 gap-2"
            >
              <div className="flex gap-4">
                <img
                  className="w-24 h-24 p-2 float-left rounded-xl border border-gray-800 object-contain"
                  src={data.image}
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <h1 className="text-text font-bold text-2xl md:text-3xl">
                    {data.title}
                  </h1>
                  <p className="text-text font-thin">{data.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {data?.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="flex border border-text rounded-md px-3 py-1 text-md text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </animated.div>
    </div>

  );
}
