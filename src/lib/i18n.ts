import _i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// the translations

const _initI18n = (
    loadPathProd,
    loadPathDev = '/locales/{{lng}}/{{ns}}.json'
) => () =>
    _i18n
        .use(Backend) // passes i18n down to react-i18next
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            backend: {
                loadPath: _DEV_
                    ? loadPathDev
                    : `${loadPathProd}/locales/{{lng}}/{{ns}}.json`
            },
            lng: 'ru',
            fallbackLng: 'ru',
            interpolation: {
                escapeValue: false // react already safes from xss
            },
            react: {
                useSuspense: true
            }
        });

export const initI18n = _initI18n('/payservice');

export const globalT = _i18n.t.bind(_i18n);
