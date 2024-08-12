import { h } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";
import { useLanguage } from "../../hooks/LanguageContext";

import en from "./svg/uk.svg";
import gr from "./svg/gr.svg";
import ru from "./svg/ru.svg";

const svg = {
  en,
  gr,
  ru,
};

const titles = {
  en: "English",
  gr: "Ελληνικά",
  ru: "Русский",
}

const LangSwitch = ({ className }) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={className}>
      <button
        ref={dropdownRef}
        type="button"
        className="inline-flex justify-center w-[32px] h-[32px] rounded-full p-0 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        title={titles[language]}
      >
        <img src={svg[language]} className="rounded-full border-[1px] border-[#eee] border-solid" />
      </button>
      {isOpen && (
        <ul className="origin-top-right absolute right-0 mt-2 w-[48px] p-[8px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {language !== 'en' && (
            <li>
              <button
                onClick={() => changeLanguage("en")}
                className="inline-flex justify-center w-[32px] h-[32px] rounded-full"
                title={titles['en']}
              >
                <img src={svg.en} className="rounded-full border-[1px] border-[#eee] border-solid" />
              </button>
            </li>
          )}
          {language !== 'gr' && (
            <li className="mt-[8px]">
              <button
                onClick={() => changeLanguage("gr")}
                className="inline-flex justify-center w-[32px] h-[32px] rounded-full"
                title={titles['gr']}
              >
                <img src={svg.gr} className="rounded-full border-[1px] border-[#eee] border-solid" />
              </button>
            </li>
          )}
          {language !== 'ru' && (
            <li className="mt-[8px]">
              <button
                onClick={() => changeLanguage("ru")}
                className="inline-flex justify-center w-[32px] h-[32px] rounded-full"
                title={titles['ru']}
              >
                <img src={svg.ru} className="rounded-full border-[1px] border-[#eee] border-solid" />
              </button>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default LangSwitch;
