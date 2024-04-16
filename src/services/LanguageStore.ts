import { atom } from 'nanostores';

export const defaultLanguage = atom("en-US");

export function changeLanguage(language:any) {
    defaultLanguage.set(language);

}