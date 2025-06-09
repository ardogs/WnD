import { useTranslation } from "react-i18next";
import i18n from '../services/translation/i18n';


export const useUITranslation = () => {

  const { t } = useTranslation();
  const changeUILanguage = (language) => i18n.changeLanguage(language);
  const currentLanguage = i18n.language;

  return {
    t,
    changeUILanguage,
    currentLanguage
  }
}
