import { h, Fragment } from "preact";
import { useLanguage } from "../../hooks/LanguageContext";

import Level from "../../components/Level";

const levels = [
  [
    [{ id: "current_symptoms", componentType: "textarea" }],
    [{ id: "daily_stool", componentType: "textarea" }],
  ],
  [
    [{ id: "kidney_gallstones", componentType: "textarea" }],
    [{ id: "chronic_diseases", componentType: "textarea" }],
  ],
  [
    [{ id: "cancer_family_history", componentType: "textarea" }],
    [{ id: "morning_tongue_plaque", componentType: "textarea" }],
  ],
  [
    [{ id: "pregnancy_plans", componentType: "textarea" }],
    [{ id: "cold_frequency", componentType: "textarea" }],
  ],
  [
    [{ id: "menstrual_cycle_duration", componentType: "textarea" }],
    [{ id: "menstrual_cycle_disorders", componentType: "textarea" }],
  ],
  [
    [{ id: "gynecological_diseases", componentType: "textarea" }],
    [{ id: "candidiasis", componentType: "textarea" }],
  ],
  [
    [{ id: "antibiotics_use", componentType: "textarea" }],
    [{ id: "other_treatments", componentType: "textarea" }],
  ],
  [
    [{ id: "hair_condition", componentType: "textarea" }],
    [
      {
        id: "hair_dyeing",
        componentType: "radio",
        variables: ['yes', 'no'],
      },
    ],
  ],
  [
    [{ id: "skin_manifestations", componentType: "label" }],
    [{ id: "acne", componentType: "checkbox-with-input" }],
    [{ id: "redness", componentType: "checkbox-with-input" }],
    [{ id: "dryness", componentType: "checkbox-with-input" }],
    [{ id: "cracks", componentType: "checkbox-with-input" }],
    [{ id: "other_skin", componentType: "checkbox-with-input" }],
  ],
  [
    [{ id: "symptom_frequency", componentType: "label" }],
    [{ id: "belching", componentType: "checkbox-with-input" }],
    [{ id: "heartburn", componentType: "checkbox-with-input" }],
    [{ id: "bloating", componentType: "checkbox-with-input" }],
    [{ id: "abdomen_pain", componentType: "checkbox-with-input" }],
    [{ id: "swelling", componentType: "checkbox-with-input" }],
    [{ id: "nausea", componentType: "checkbox-with-input" }],
  ],
  [
    [{ id: "symptom_frequency", componentType: "label" }],
    [{ id: "diarrhea", componentType: "checkbox-with-input" }],
    [{ id: "body_odor", componentType: "checkbox-with-input" }],
    [{ id: "varicose_veins", componentType: "checkbox-with-input" }],
    [{ id: "cold_extremities", componentType: "checkbox-with-input" }],
    [{ id: "rapid_heartbeat", componentType: "checkbox-with-input" }],
    [{ id: "high_blood_pressure", componentType: "checkbox-with-input" }],
  ],
  [
    [
      {
        id: "current_vitamins_supplements",
        componentType: "radio",
        variables: ['yes', 'no'],
      },
    ],
    [{ id: "oral_contraceptives", componentType: "textarea" }],
  ],
  [
    [{ id: "covid_history", componentType: "textarea" }],
    [{ id: "covid_vaccine", componentType: "textarea" }],
  ],
  [[{ id: "allergies", componentType: "textarea" }]],
];

const Level3 = () => {
  const { t } = useLanguage();

  return (
    <Fragment>
      <div className="w-full text-left mb-[24px]">
        <h2 className="text-2xl font-semibold mb-[16px]">{t("symptoms")}</h2>
        <p className="max-w-[680px] text-[#555]">{t("questionnaire_intro")}</p>
      </div>

      <Level levels={levels} />
    </Fragment>
  );
};

export default Level3;
