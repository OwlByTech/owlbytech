import { useStore } from "@nanostores/react";
import { defaultLanguage } from "../../services/LanguageStore";
import type { SocialMediaData } from "../../types/SocialMedia";
import type { PolicyData } from "../../types/PolicyData";
import type { ServicesData } from "../../types/Services";
import type { MainData } from "../../types/Main";
import type { AboutUsFooter } from "../../types/AboutUsFooter";
import type { FooterTitles } from "../../types/FooterTiltes";

export type FooterProps = {
  socialMedia: SocialMediaData[];
  policies: PolicyData[];
  services: ServicesData[];
  global: MainData;
  aboutUsFooter: AboutUsFooter[];
  footerTitles: FooterTitles[];
};

export default function Footer(props: FooterProps) {
  const $defaultLanguage = useStore(defaultLanguage);
  const { socialMedia, policies, services, global, aboutUsFooter, footerTitles } = props;

  const filteredPolicy = policies.filter(
    (data) => data.languages_code === $defaultLanguage,
  );
  const filteredServices = services.filter(
    (data) => data.languages_id === $defaultLanguage,
  );
  const filteredAboutUs = aboutUsFooter.filter(
    (data) => data.languages_code === $defaultLanguage,
  );
  const filteredTitles = footerTitles.filter(
    (data) => data.languages_code === $defaultLanguage,
  );
  const titles = filteredTitles.map((data) => data.titles);

  return (
    <footer className="flex flex-col px-8 md:px-32 gap-5 justify-center items-center">
      <hr className="border-b-1 border-black w-full" />
      <div className="flex flex-col md:flex-wrap sm:flex-row w-full justify-between">
        <div className="flex flex-col text-center gap-4">
          <h3 className="text-text text-left text-lg font-semibold">
            {titles[0][0]}
          </h3>
          <div>
            {socialMedia.map((data, index) => (
              <a key={index} href={data.link}>
                <div className="flex space-x-2">
                  <img src={data.icon} alt="" className="h-5 w-5" />
                  <p className="text-text text-left">{data.name} </p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col text-center gap-4">
          <h3 className="text-text text-left text-lg font-semibold">
            {titles[0][1]}
          </h3>
          <div>
            {filteredServices.map((data, index) => (
              <p className="text-text text-left" key={index}>
                {data.title}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col text-center gap-4">
          <h3 className="text-text text-left text-lg font-semibold">
            {titles[0][2]}
          </h3>
          <div>
            {filteredAboutUs.map((data, index) => (
              <p key={index} className="text-text text-left">{data.title}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col text-center gap-4">
          <h3 className="text-text text-left text-lg font-semibold">
            {titles[0][3]}
          </h3>
          <div>
            {filteredPolicy.map((item, index) => (
              <p key={index} className="text-text text-left">{item.title}</p>
            ))}
          </div>
        </div>
      </div>
      <hr className="mt-8 border-b-1 border-black w-full" />
      <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4">
        <img src={global.logo} alt="" className="w-48" />
        <p className="text-text text-right">{global.copyright}</p>
      </div>
    </footer>
  );
}
