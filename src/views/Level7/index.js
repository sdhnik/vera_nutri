import { h, Fragment } from "preact";
import { useLanguage } from "../../hooks/LanguageContext";

import Level from "../../components/Level";

const levels = [
  [
    [
      {
        id: "weakness_fatigue",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "irritability_lability",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "insufficient_concentration",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "depressed_mood",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
  ],
  [
    [
      {
        id: "decreased_work_capacity",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "daytime_sleepiness",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "morning_headaches",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "hypotension_dizziness_tinnitus",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
  ],
  [
    [
      {
        id: "decreased_appetite",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "food_aversion",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "perverted_taste",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "perverted_smell",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
  ],
  [
    [
      {
        id: "lower_back_heaviness",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "involuntary_leg_movement",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "increased_infection_susceptibility",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "heavy_menstrual_bleeding",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
  ],
  [
    [
      {
        id: "shortness_of_breath",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "cold_hands_feet",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "dry_scaly_skin",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "stomatitis",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
  ],
  [
    [
      {
        id: "brittle_dull_nails",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "brittle_hair_loss",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "bluish_sclera",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "decreased_night_vision",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
  ],
  [
    [
      {
        id: "difficulty_swallowing",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "decreased_muscle_tone",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "urinary_urgency",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
    [
      {
        id: "unstable_stool",
        componentType: "select",
        variables: [
          { 0: "no" },
          { 1: "mildly" },
          { 2: "periodically" },
          { 3: "moderately" },
          { 4: "pronounced" },
        ],
      },
    ],
  ],
];

const Level7 = () => {
  const { t } = useLanguage();

  return (
    <Fragment>
      <div className="w-full text-left mb-[24px]">
        <h2 className="text-2xl font-semibold mb-[16px]">
          {t("iron_deficiency_anemia")}
        </h2>
        <p className="max-w-[680px] text-[#555]">{t("questionnaire_intro")}</p>
      </div>

      <Level levels={levels} />
    </Fragment>
  );
};

export default Level7;
