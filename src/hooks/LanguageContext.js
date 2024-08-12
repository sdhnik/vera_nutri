import { createContext } from "preact";
import { useState, useContext } from "preact/hooks";

const translations = {
  en: require("../locales/en.json"),
  gr: require("../locales/gr.json"),
  ru: require("../locales/ru.json"),
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = (key, params = {}) => {
    let translation = translations[language][key] || key;
  
    Object.keys(params).forEach((param) => {
      const value = params[param];
      if (typeof value === "number") {
        translation = translation.replace(
          `{${param}, plural, one {# item} other {# items}}`,
          value === 1 ? `${value} item` : `${value} items`
        );
      } else {
        translation = translation.replace(`{${param}}`, value);
      }
    });
  
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
