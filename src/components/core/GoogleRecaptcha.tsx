import { useEffect } from "react";

export type GoogleRecaptchaProps = {
    verifyCallback?: (token: string) => void;
    publicKey: string;
}

export function GoogleRecaptcha(props: GoogleRecaptchaProps) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit';
        script.async = true;
        document.body.appendChild(script);

        // @ts-ignore
        const callbackVerify = (r) => {
            // @ts-ignore
            props.verifyCallback(r)
        }

        const onloadCallback = () => {
            // reCAPTCHA script has loaded, render the widget
            // @ts-ignore
            window.grecaptcha.render('recaptcha', {
                sitekey: props.publicKey,
                callback: callbackVerify
            });
        };
        // @ts-ignore
        window.onloadCallback = onloadCallback;

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="recaptcha" className="w-full" style={{transform: "scale(0.87)", transformOrigin: "0 0"}}></div>
    );
}