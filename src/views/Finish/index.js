import { h, Fragment } from "preact";
import { useLanguage } from "../../hooks/LanguageContext";
import { useData } from "../../hooks/DataContext";

import Button from "../../components/Button";

import logo from "../../assets/imgs/logo.svg";

const Finish = () => {
  const { t } = useLanguage();

  return (
    <Fragment>
      <img src={logo} className="h-[233px] pointer-events-none" alt="logo" />

      <h1 className="text-4xl font-semibold mt-[36px] mb-[24px]">
        {t("thanks")}
      </h1>
      <p className="text-lg max-w-[580px] mx-auto mb-[36px] text-[#555]">
        {t("thanks_subtitle")}
      </p>
    </Fragment>
  )
}

export default Finish;