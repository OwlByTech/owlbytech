import { defaultLanguage } from "../../services/LanguageStore";
import { useStore } from "@nanostores/react";
import Language from "./Language";
import type { Navbar } from "../../types/Navbar";
import type { MainData } from "../../types/Main";

export type NavBarProps = {
  data: Navbar[];
  global: MainData;
};

export default function Navbar(props: NavBarProps) {
  const $defaultLanguage = useStore(defaultLanguage);
  const navbarData = props.data.find(
    (data) => data.languages_code === $defaultLanguage,
  );

  const handleClick = (sectionId: number) => {
    const section = document.getElementById(String(sectionId));
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="flex flex-col p-8 md:px-32 gap-3">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex justify-center items-center">
          <img src={props.global.logo} alt="" className="w-48" />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-wrap gap-2 justify-between">
            {navbarData?.sections?.map((item, index) => (
              <a
                key={index}
                onClick={() => handleClick(index)}
                className="cursor-pointer hover:font-bold text-text font-thin text-xl ml-4"
              >
                {item}
              </a>
            ))}
          </div>
          <Language />
        </div>
      </div>
      <hr className="border-b-1 border-black w-full mx-auto" />
    </nav>
  );
}
