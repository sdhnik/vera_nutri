import { h, Fragment } from "preact";
import { useLanguage } from "../../hooks/LanguageContext";
import { useData } from "../../hooks/DataContext";

import Button from "../../components/Button";

import logo from "../../assets/imgs/logo.svg";

const Home = () => {
  const { t } = useLanguage();
  const { changePage } = useData();

  return (
    <Fragment>
      <img src={logo} className="h-[233px] pointer-events-none" alt="logo" />

      <h1 className="text-4xl font-semibold mt-[36px] mb-[24px]">
        {t("welcome")}
      </h1>
      <p className="text-xl font-semibold mb-[24px]">
        {t("personalized_plans")}
      </p>
      <p className="text-lg max-w-[580px] mx-auto mb-[36px] text-[#555]">
        {t("questionnaire_intro")}
      </p>
      <div>
        <Button type="green" onClick={() => changePage(2)}>{t("start_questionnaire")}</Button>
      </div>
    </Fragment>
  )
}

export default Home;