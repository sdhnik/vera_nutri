import { h, Fragment } from "preact";
import { useLanguage } from "../../hooks/LanguageContext";

import Level from "../../components/Level";

const levels = [
  [
    [
      {
        id: "prolonged_weakness_after_stress",
        componentType: "radio",
        variables: [
          { 0: "no" },
          { 1: "rarely" },
          { 4: "often" },
          { 8: "constantly" },
        ],
        horizontal: true,
      },
    ],
    [
      {
        id: "easily_tired",
        componentType: "radio",
        variables: [
          { 0: "no" },
          { 1: "rarely" },
          { 4: "often" },
          { 8: "constantly" },
        ],
        horizontal: true,
      },
    ],
    [
      {
        id: "strong_need_for_salty_food",
        componentType: "radio",
        variables: [
          { 0: "no" },
          { 1: "rarely" },
          { 4: "often" },
          { 8: "constantly" },
        ],
        horizontal: true,
      },
    ],
    [
      {
        id: "sensitive_weather_changes",
        componentType: "radio",
        variables: [
          { 0: "no" },
          { 1: "rarely" },
          { 4: "often" },
          { 8: "constantly" },
        ],
        horizontal: true,
      },
    ],
    [
      {
        id: "dizzy_when_standing_up",
        componentType: "radio",
        variables: [
          { 0: "no" },
          { 1: "rarely" },
          { 4: "often" },
          { 8: "constantly" },
        ],
        horizontal: true,
      },
    ],
  ],
  [
    [
      {
        id: "dark_circles_eyes",
        componentType: "radio",
        variables: [
          { 0: "no" },
          { 1: "rarely" },
          { 4: "often" },
          { 8: "constantly" },
        ],
        horizontal: true,
      },
    ],
    [
      {
        id: "nausea_vomiting",
        componentType: "radio",
        variables: [
          { 0: "no" },
          { 1: "rarely" },
          { 4: "often" },
          { 8: "constantly" },
        ],
        horizontal: true,
      },
    ],
    [
      {
        id: "easily_catch_colds",
        componentType: "radio",
        variables: [
          { 0: "no" },
          { 0: "rarely" },
          { 8: "often" },
          { 8: "constantly" },
        ],
        horizontal: true,
      },
    ],
    [
      {
        id: "slow_healing_wounds",
        componentType: "radio",
        variables: [
          { 0: "no" },
          { 0: "rarely" },
          { 8: "often" },
          { 8: "constantly" },
        ],
        horizontal: true,
      },
    ],
    [
      {
        id: "body_soreness_hypersensitive",
        componentType: "radio",
        variables: [
          { 0: "no" },
          { 1: "rarely" },
          { 4: "often" },
          { 8: "constantly" },
        ],
        horizontal: true,
      },
    ],
  ],
  [
    [
      {
        id: "puffiness_all_over",
        componentType: "radio",
        variables: [
          { 0: "no" },
          { 1: "rarely" },
          { 4: "often" },
          { 8: "constantly" },
        ],
        horizontal: true,
      },
    ],
    [
      {
        id: "skin_color_changes_no_sun",
        componentType: "radio",
        variables: [
          { 0: "no" },
          { 0: "rarely" },
          { 8: "often" },
          { 8: "constantly" },
        ],
        horizontal: true,
      },
    ],
  ],
];

const Level6 = () => {
  const { t } = useLanguage();

  return (
    <Fragment>
      <div className="w-full text-left mb-[24px]">
        <h2 className="text-2xl font-semibold mb-[16px]">
          {t("adrenal_glands")}
        </h2>
        <p className="max-w-[680px] text-[#555]">{t("questionnaire_intro")}</p>
      </div>

      <Level levels={levels} />
    </Fragment>
  );
};

export default Level6;
