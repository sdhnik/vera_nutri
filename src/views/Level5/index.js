import { h, Fragment } from "preact";
import { useLanguage } from "../../hooks/LanguageContext";

import Level from "../../components/Level";

const levels = [
  [
    [{ id: "section_a", componentType: "label" }],
    [
      {
        id: "indigestion_after_eating",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "belching_bloating_after_eating",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "stomach_cramps",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "food_sits_in_stomach",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
  ],
  [
    [{ id: "section_a", componentType: "label" }],
    [
      {
        id: "bad_taste_mouth",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "quickly_get_full",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "skip_meals",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
  ],
  [
    [{ id: "section_b", componentType: "label" }],
    [
      {
        id: "strong_emotions_food",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "feel_hungry_soon",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "stomach_pain_burning",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "relieved_by_food",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
  ],
  [
    [{ id: "section_b", componentType: "label" }],
    [
      {
        id: "burning_sensation_lower_chest",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "digestive_problems_relief",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 8: "often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "spicy_fatty_food_discomfort",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "feeling_nauseous",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
  ],
  [
    [{ id: "section_b", componentType: "label" }],
    [
      {
        id: "difficulty_swallowing_1",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
  ],
  [
    [{ id: "section_c", componentType: "label" }],
    [
      {
        id: "left_rib_pain",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "indigestion_after_2_4_hours",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "discomfort_relieved_by_gas",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "specific_foods_indigestion",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
  ],
  [
    [{ id: "section_c", componentType: "label" }],
    [
      {
        id: "stool_consistency_changes",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "strong_stool_odor",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "undigested_food_in_stool",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "three_large_stools_daily",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "defecation_after_meals",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
  ],
  [
    [{ id: "section_d", componentType: "label" }],
    [
      {
        id: "lower_abdominal_discomfort",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "stress_raw_foods_bloating",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "constipation_straining",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "small_hard_stool",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
  ],
  [
    [{ id: "section_d", componentType: "label" }],
    [
      {
        id: "mucus_in_stool",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "alternating_constipation_diarrhea",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "anal_area_pain",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "lack_desire_defecate",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 8: "often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "constant_need_defecate",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 8: "often" }],
        horizontal: true,
      },
    ],
  ],
  [
    [{ id: "section_e", componentType: "label" }],
    [
      {
        id: "right_rib_pain",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "abdominal_pain_deep_breaths",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "night_pain_back_shoulder",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "bitter_belching_after_eating",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
  ],
  [
    [{ id: "section_e", componentType: "label" }],
    [
      {
        id: "discomfort_fatty_foods",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "temple_throbbing_overeating",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "unexplained_skin_itching",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "stool_color_changes",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
  ],
  [
    [{ id: "section_e", componentType: "label" }],
    [
      {
        id: "general_malaise",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "muscle_pain_no_exertion",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "frequent_belching",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "skin_redness_palms",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
  ],
  [
    [{ id: "section_e", componentType: "label" }],
    [
      {
        id: "strong_body_odor",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "bad_breath",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "sometimes" }, { 4: "often" }, { 8: "very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "bruises_easily",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 8: "often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "yellowish_eyes",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 8: "often" }],
        horizontal: true,
      },
    ],
  ],
];

const Level5 = () => {
  const { t } = useLanguage();

  return (
    <Fragment>
      <div className="w-full text-left mb-[24px]">
        <h2 className="text-2xl font-semibold mb-[16px]">
          {t("gastrointestinal")}
        </h2>
        <p className="max-w-[680px] text-[#555]">{t("questionnaire_intro")}</p>
      </div>

      <Level levels={levels} />
    </Fragment>
  );
};

export default Level5;
