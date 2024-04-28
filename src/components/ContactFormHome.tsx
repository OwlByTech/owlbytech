import ContactStep1To3SVG from "../assets/contact/ContactStep1To3SVG";
import ContactForm from "./ContactForm";

export default function ContactFormHome(){
    return(
        <div className="flex flex-col justify-center p-20">
            <ContactStep1To3SVG
            step1="Define your idea"
            step2="Create the documentation"
            step3="Fill the following form"
            />
            <ContactForm/>
        </div>
    );
}