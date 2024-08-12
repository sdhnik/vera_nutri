import { h, Fragment } from "preact";
import { useLanguage } from "../../hooks/LanguageContext";

import Level from "../../components/Level";

const levels = [
  [
    [{ id: "meals_per_day", componentType: "textarea" }],
    [{ id: "breakfast_time", componentType: "textarea" }],
  ],
  [
    [{ id: "dinner_time", componentType: "textarea" }],
    [{ id: "diet_variety", componentType: "textarea" }],
  ],
  [
    [{ id: "water_intake" }],
    [{ id: "water_drinking_habits", componentType: "textarea" }],
  ],
  [
    [
      {
        id: "tea_coffee",
        componentType: "radio",
        variables: ['yes', 'no'],
        horizontal: true,
      },
    ],
    [
      {
        id: "tea_coffee_details",
        componentType: "textarea",
        requiredKey: "tea_coffee",
        requiredValue: "yes",
      },
    ],
    [
      {
        id: "tea_coffee_effect",
        componentType: "textarea",
        requiredKey: "tea_coffee",
        requiredValue: "yes",
      },
    ],
  ],
  [
    [{ id: "sugar_intake", componentType: "textarea" }],
    [{ id: "sugar_substitutes", componentType: "textarea" }],
  ],
  [
    [{ id: "sweets_intake", componentType: "textarea" }],
    [{ id: "chocolate_intake", componentType: "textarea" }],
  ],
  [
    [{ id: "bread_intake", componentType: "textarea" }],
    [
      {
        id: "juice_soda",
        componentType: "radio",
        variables: ['yes', 'no'],
        horizontal: true,
      },
    ],
    [{ id: "processed_food", componentType: "textarea" }],
  ],
  [
    [{ id: "fast_food", componentType: "textarea" }],
    [{ id: "dairy_products", componentType: "textarea" }],
  ],
  [
    [
      {
        id: "butter_coconut_olive_flaxseed_avocado",
        componentType: "textarea",
      },
    ],
    [{ id: "refined_oils", componentType: "textarea" }],
  ],
  [
    [{ id: "fruits_dried_fruits", componentType: "textarea" }],
    [{ id: "vegetables_intake", componentType: "textarea" }],
  ],
  [
    [{ id: "fresh_greens", componentType: "textarea" }],
    [{ id: "nuts_intake", componentType: "textarea" }],
  ],
  [
    [{ id: "berries_intake", componentType: "textarea" }],
    [{ id: "grains_intake", componentType: "textarea" }],
  ],
  [
    [{ id: "gluten_intake", componentType: "textarea" }],
    [{ id: "potato_intake", componentType: "textarea" }],
  ],
  [
    [
      {
        id: "soaking_nuts_grains",
        componentType: "radio",
        variables: ['yes', 'no'],
      },
    ],
    [{ id: "sprouting_grains", componentType: "textarea" }],
  ],
  [
    [{ id: "cooking_oil", componentType: "textarea" }],
    [{ id: "meat_intake", componentType: "textarea" }],
  ],
  [
    [{ id: "alcohol_intake", componentType: "textarea" }],
    [
      {
        id: "smoking",
        componentType: "radio",
        variables: ['yes', 'no'],
      },
    ],
  ],
];

const Level2 = () => {
  const { t } = useLanguage();

  return (
    <Fragment>
      <div className="w-full text-left mb-[24px]">
        <h2 className="text-2xl font-semibold mb-[16px]">{t("nutrition")}</h2>
        <p className="max-w-[680px] text-[#555]">{t("questionnaire_intro")}</p>
      </div>

      <Level levels={levels} />
    </Fragment>
  );
};

export default Level2;
