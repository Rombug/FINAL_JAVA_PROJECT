import i18ttp from "i18next";
import {initReactI18next} from "react-i18next";
import en from "./translations/en.json";
import lt from "./translations/lt.json";
import languageDetector from "i18next-browser-languagedetector";

i18ttp
    .use(initReactI18next)
    .use(languageDetector)
    .init(
        {
            resources: {
                en, lt
            },
            whitelist: ['en', 'lt'],
            lang: "en",
            fallbackLng: "en",
            interpolation: {
                escapeValue: false
            }
        }
    );

export default i18ttp;