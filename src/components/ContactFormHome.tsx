import ContactStep1To3SVG from "../assets/contact/ContactStep1To3SVG";
import ContactStep4To5SVG from "../assets/contact/ContactStep4To5SVG";
import ContactStep6To9SVG from "../assets/contact/ContactStep6To9SVG";
import ContactForm from "./ContactForm";
import OurTeam from "./OurTeam";

export default function ContactFormHome() {
    return (
        <div className="flex flex-col justify-center p-20">
            <ContactStep1To3SVG
                step1="Define your idea"
                step2="Create the documentation"
                step3="Fill the following form"
            />
            <ContactForm />
            <ContactStep4To5SVG
                step4="Our team work hard to make to develop your idea"
                step5="Send the form"
            />
            <OurTeam />

            <ContactStep6To9SVG
            
            step6="Design"
            step7="Develop"
            step8="Testing"
            step9="We deploy your idea to the world"
            congratulation="Congratulations!"
            phrase="The way was hard but you made your idea"
            />
        </div>
    );
}