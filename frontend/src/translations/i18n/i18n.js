import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN_HOME from "../en/home.json";
import VN_HOME from "../vn/home.json";
import EN_PRICING from '../en/pricing.json';
import VN_PRICING from '../vn/pricing.json';
import EN_BMI from '../en/bmiCalculator.json';
import VN_BMI from '../vn/bmiCalculator.json';


export const translations = {
    en: "English",
    vn: "Tiếng Việt"
};
const resources = {
    en: {
        translation: {
            ...EN_HOME,
            ...EN_PRICING,
            ...EN_BMI
        }
    },
    vn: {
        translation: {
            ...VN_HOME,
            ...VN_PRICING,
            ...VN_BMI
        }
    }
};


i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
