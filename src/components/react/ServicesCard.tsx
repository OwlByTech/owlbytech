import { useStore } from "@nanostores/react";
import { defaultLanguage } from "../../services/LanguageStore";
import type { ServicesData } from "../../types/Services";
import type { GlobalData } from "../../types/Global";
import { animated, useSpring } from '@react-spring/web'
import { useInView } from 'react-intersection-observer';

export type ServicesCardProps = {
  data: ServicesData[];
  mainData: GlobalData[];
};

export default function ServicesCard(props: ServicesCardProps) {
  const $defaultLanguage = useStore(defaultLanguage);
  const mainData = props.mainData.filter(
    (item) => item.languages_code === $defaultLanguage,
  );
  const item = mainData[0];
  const filteredServices = props.data.filter(
    (data) => data.languages_id === $defaultLanguage,
  );

  return (
    <div
      id="2"
      className="flex flex-col p-8 gap-10"
      style={{ minHeight: "400px", marginBottom: "300px" }}
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-text font-bold px-4 text-4xl md:text-6xl">
          {item.services_title}
        </h1>
        <p className="text-text px-4 font-thin mb-10 text-3xl">
          {item.services_subtitle}
        </p>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-between gap-8">
        {filteredServices.map((data, index) => {
          const [ref, inView] = useInView({
            triggerOnce: false,
            threshold: 0.1,
          });

          const springs = useSpring({
            opacity: inView ? 1 : 0,
            x: inView ? 0 : 100,
          });

          return (
            <animated.div key={data.id} ref={ref} style={springs}>
              <div
                className="flex flex-col gap-4 px-11 py-11 w-full md:max-w-sm lg:max-w-lg rounded-xl overflow-hidden shadow-lg border border-gray-800"
                style={{ transform: `translateY(${index * 50}px)` }}
              >
                <h1 className="text-text font-bold text-3xl md:text-5xl">
                  {data.title}
                </h1>
                <p className="text-text">{data.description}</p>
              </div>
            </animated.div>
          );
        })}
      </div>
    </div>
  );
}
