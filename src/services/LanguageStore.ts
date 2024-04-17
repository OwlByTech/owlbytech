import { persistentAtom } from '@nanostores/persistent'


export const defaultLanguage =  persistentAtom('lang', 'en-US')

export function changeLanguage(language:any) {
    defaultLanguage.set(language);

}