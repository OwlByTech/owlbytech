import { useStore } from "@nanostores/react";
import ContactStep1To3SVG from "../assets/contact/ContactStep1To3SVG";
import ContactStep4To5SVG from "../assets/contact/ContactStep4To5SVG";
import ContactStep6To9SVG from "../assets/contact/ContactStep6To9SVG";
import { contactFormHome } from "../services/api";
import ContactForm from "./ContactForm";
import OurTeam from "./OurTeam";
import { defaultLanguage } from "../services/LanguageStore";

export default function ContactFormHome() {
    const $defaultLanguage = useStore(defaultLanguage);
    const contactFormHomeData = contactFormHome.filter(data => data.languages_code === $defaultLanguage);

    console.log(contactFormHomeData);
    return (
        <div className="flex flex-col justify-center p-20">

            {contactFormHomeData.map((data, index) => {
                return (
                    <>
                    <div className="flex flex-col mb-32">
                        <h2 className="text-text text-9xl font-bold">{data.title}</h2>
                        <span className="text-right text-5xl font-thin text-text">{data.phrase}</span>
                    </div>


                        <ContactStep1To3SVG
                            step1={data.step1}
                            step2={data.step2}
                            step3={data.step3}
                        />
                        <ContactForm />
                        <ContactStep4To5SVG
                            step4={data.step4}
                            step5={data.step5}
                        />
                        <OurTeam />

                        <ContactStep6To9SVG

                            step6={data.step6}
                            step7={data.step7}
                            step8={data.step8}
                            step9={data.step9}
                            congratulation={data.congratulation}
                            phrase={data.phrase}
                        />
                    </>
                );
            })}


        </div>
    );
}