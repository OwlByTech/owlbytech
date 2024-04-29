import React, { useRef, useEffect } from "react";
import TagCloud from "TagCloud";
import { useStore } from "@nanostores/react";
import { defaultLanguage } from "../services/LanguageStore";
import type { HomeData } from "../types/Home";

export type HomeProps = {
  data: HomeData[]
}

const Home = (props: HomeProps) => {
  const $defaultLanguage = useStore(defaultLanguage);
  const homeData = props.data.find(data => data.languages_code === $defaultLanguage);
  const sphereRef = useRef(null);
  const tagCloudRef = useRef(null);

  useEffect(() => {
    if (!homeData) return;
    const myTags = homeData.home_words;
    if (tagCloudRef.current) {
      tagCloudRef.current.destroy(); 
    }
    const tagCloudInstance = TagCloud(sphereRef.current, myTags, {
      radius: 400,
      maxSpeed: "slow",
      initSpeed: "fast",
      direction: 100,
      keep: true,
    });

    tagCloudRef.current = tagCloudInstance;
  }, [$defaultLanguage]);

  return (
    <div className="container mx-auto">
      {homeData && (
        <div>
          <div className="relative">
            <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
              <h1 className="text-text text-4xl font-bold">{homeData.home_maintext}</h1>
              <p className="text-text">{homeData.home_subtext}</p>
            </section>
            <section className="text-center text-text">
              <div className="inline-block">
                <span className="sphere" ref={sphereRef}></span>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
