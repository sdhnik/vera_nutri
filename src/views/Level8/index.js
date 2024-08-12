import { h, Fragment } from "preact";
import { useLanguage } from "../../hooks/LanguageContext";

import Level from "../../components/Level";

const levels = [
  [
    [
      {
        id: "hard_stool",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "food_allergies_sensitivity",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "constipation_infrequent_bowel_movements",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "small_volume_urination",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "no_sweat_properly",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
  ],
  [
    [
      {
        id: "fatigue_muscle_pain_headaches",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "fibromyalgia_chronic_fatigue",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "drink_unfiltered_tap_water",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "use_dry_cleaning",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "work_live_poor_ventilation",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
  ],
  [
    [
      {
        id: "live_city_industrial_area",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "use_chemicals",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "silver_fillings",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "eat_predatory_fish",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
  ],
  [
    [
      {
        id: "irritated_by_smells",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "negative_reaction_to_foods",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "caffeine_reaction",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
  ],
  [
    [
      {
        id: "regular_medications",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "had_jaundice",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "history_of_cancer",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "food_allergies_intolerance",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "family_history_neurological_diseases",
        componentType: "radio",
        variables: [{ 0: "no" }, { 1: "yes" }],
        horizontal: true,
      },
    ],
  ],
];

const Level8 = () => {
  const { t } = useLanguage();

  return (
    <Fragment>
      <div className="w-full text-left mb-[24px]">
        <h2 className="text-2xl font-semibold mb-[16px]">{t("toxins")}</h2>
        <p className="max-w-[680px] text-[#555]">{t("questionnaire_intro")}</p>
      </div>

      <Level levels={levels} />
    </Fragment>
  );
};

export default Level8;
