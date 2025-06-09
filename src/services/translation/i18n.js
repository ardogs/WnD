import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import EN from '../../locales/en.json';
import ES from '../../locales/es.json';
import KR from '../../locales/kr.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            EN: { translation: EN },
            ES: { translation: ES },
            KR: { translation: KR }
        },
        fallbackLng: 'ES',
        interpolation: { escapeValue: false },
        // detection: {
        //     order: ['localStorage', 'navigator'],
        //     caches: ['localStorage']
        // }
    });

export default i18n;