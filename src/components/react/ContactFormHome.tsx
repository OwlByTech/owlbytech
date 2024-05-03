import { useStore } from "@nanostores/react";
import ContactStep1To3SVG from "../../assets/contact/ContactStep1To3SVG";
import ContactStep4To5SVG from "../../assets/contact/ContactStep4To5SVG";
import ContactStep6To9SVG from "../../assets/contact/ContactStep6To9SVG";
import ContactForm from "./ContactForm";
import { defaultLanguage } from "../../services/LanguageStore";
import OurTeam from "./OurTeam";
import { useEffect, useState, type ReactNode } from "react";

export type ContactFormHomeProps = {
    contactFormHome: any[];
    contactFormTranslation: any[];
    contactFormFields: any[];
    contactForm: any[];
    workers: any[];
    children: ReactNode
}


export default function ContactFormHome(props: ContactFormHomeProps) {
    const $defaultLanguage = useStore(defaultLanguage);
    const contactFormHomeData = props.contactFormHome.filter(data => data.languages_code === $defaultLanguage);

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

    const isMobile = width < 399 ? true: false;

    return (
        <div className="flex flex-col justify-center p-8 md:p-32">

            {contactFormHomeData.map((data, index) => {
                return (
                    <div key={index}>
                        <div className="flex flex-col sm:mb-32">
                            <h2 className="text-text text-6xl sm:text-9xl font-bold">{data.title}</h2>
                            <span className="text-right text-4xl md:text-5xl font-thin text-text">{data.subtitle}</span>
                        </div>


                        <ContactStep1To3SVG
                            step1={data.step1}
                            step2={data.step2}
                            step3={data.step3}
                            mobile={isMobile}
                        />

                        {props.children}

                        <ContactStep4To5SVG
                            step4={data.step4}
                            step5={data.step5}
                            mobile={isMobile}
                        />
                        <OurTeam  workers={props.workers}/>

                        <ContactStep6To9SVG

                            step6={data.step6}
                            step7={data.step7}
                            step8={data.step8}
                            step9={data.step9}
                            congratulation={data.congratulation}
                            phrase={data.phrase}
                            mobile={isMobile}
                        />
                    </div>
                );
            })}


        </div>
    );
}