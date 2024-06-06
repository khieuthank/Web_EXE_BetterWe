import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN_HOME from "../en/home.json";
import VN_HOME from "../vn/home.json";

export const translations = {
    en: "English",
    vn: "Tiếng Việt"
};

const resources = {
    en: {
        translation: EN_HOME
    },
    vn: {
        translation: VN_HOME
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'vn',
    fallbackLng: 'vn',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
