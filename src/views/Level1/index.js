import { h, Fragment } from "preact";
import { useLanguage } from "../../hooks/LanguageContext";

import Level from "../../components/Level";

const levels = [
  [
    [{ id: "name" }, { id: "email", type: "email" }],
    [{ id: "birth_date" }, { id: "height_weight" }],
    [{ id: "waist_hip_circumference" }, { id: "resting_pulse" }],
    [{ id: "marital_status" }],
  ],
  [
    [{ id: "main_problem_goal", componentType: "textarea" }],
    [{ id: "when_problem_goal", componentType: "textarea" }],
  ],
  [
    [{ id: "work_info", componentType: "textarea" }],
    [
      {
        id: "love_job",
        componentType: "radio",
        variables: [{ yes: "Yes" }, { no: "No" }],
      },
    ],
  ],
  [
    [{ id: "vacation_info", componentType: "textarea" }],
    [{ id: "weekend_info", componentType: "textarea" }],
  ],
  [
    [{ id: "sleep_info" }, { id: "wake_up_time" }],
    [{ id: "room_temperature" }],
    [{ id: "sleep_disorder", componentType: "textarea" }],
  ],
  [
    [{ id: "outdoor_activity", componentType: "textarea" }],
    [{ id: "physical_activity", componentType: "textarea" }],
    [{ id: "screen_time" }],
  ],
  [
    [
      {
        id: "stress_level",
        componentType: "select",
        variables: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    ],
    [{ id: "fatigue_info", componentType: "textarea" }],
    [{ id: "crying_info", componentType: "textarea" }],
  ],
  [
    [{ id: "nutrition_courses", componentType: "textarea" }],
    [{ id: "yoga_meditation", componentType: "textarea" }],
  ],
];

const Level1 = () => {
  const { t } = useLanguage();

  return (
    <Fragment>
      <div className="w-full text-left mb-[24px]">
        <h2 className="text-2xl font-semibold mb-[16px]">
          {t("general_info")}
        </h2>
        <p className="max-w-[680px] text-[#555]">{t("questionnaire_intro")}</p>
      </div>

      <Level levels={levels} />
    </Fragment>
  );
};

export default Level1;
