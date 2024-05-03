import { useRef, useEffect, useState } from "react";
import TagCloud from "TagCloud";
import { useStore } from "@nanostores/react";
import { defaultLanguage } from "../../services/LanguageStore";
import type { HomeData } from "../../types/Home";

export type HomeProps = {
  data: HomeData[]
}

const Home = (props: HomeProps) => {
  const $defaultLanguage = useStore(defaultLanguage);
  const homeData = props.data.find(data => data.languages_code === $defaultLanguage);
  const sphereRef = useRef(null);
  const tagCloudRef = useRef(null);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!homeData) return;
    const myTags = homeData.home_words;
    if (tagCloudRef.current) {
      //@ts-ignore
      tagCloudRef.current.destroy();
    }
    //@ts-ignore
    const tagCloudInstance = TagCloud(sphereRef.current, myTags, {
      radius: width > 780 ? width/4:width/2.25,
      maxSpeed: "slow",
      initSpeed: "fast",
      //@ts-ignore
      direction: 100,
      keep: true,
    });

    //@ts-ignore
    tagCloudRef.current = tagCloudInstance;
  }, [$defaultLanguage, width]);

  return (
    <div className="container mx-auto">
      {homeData && (
        <div>
          <div className="relative">
            <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
              <h1 className="text-text text-xl md:text-4xl font-bold">{homeData.home_maintext}</h1>
              <p className="text-text">{homeData.home_subtext}</p>
            </section>
            <section className="text-center text-text opacity-40">
              <div className="inline-block">
                <span className="text-sm md:text-2xl sphere" ref={sphereRef}></span>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
