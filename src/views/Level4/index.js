import { h, Fragment } from "preact";
import { useLanguage } from "../../hooks/LanguageContext";

import Level from "../../components/Level";

const levels = [
  [
    [{ id: "dopamine_system", componentType: "label" }],
    [
      {
        id: "attention_fatigue",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "procrastination",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "no_attention_to_details",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "impulse_control",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "listening_problem",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
  ],
  [
    [{ id: "dopamine_system", componentType: "label" }],
    [
      {
        id: "restless_behavior",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "interrupt_others",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "impulsive_decisions",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "seek_strong_impressions",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "need_stimulants",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
  ],

  [
    [{ id: "serotonin_system", componentType: "label" }],
    [
      {
        id: "upset_when_things_not_in_place",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "negative_thoughts",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "constant_worry",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "obsessive_behavior",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "envy_towards_people",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
  ],
  [
    [{ id: "serotonin_system", componentType: "label" }],
    [
      {
        id: "upset_when_not_my_way",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "cry",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "dislike_changes",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "need_things_done_my_way",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "difficulty_seeing_options",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
  ],

  [
    [{ id: "limbic_system", componentType: "label" }],
    [
      {
        id: "feel_sadness",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "feel_negative_emotions",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "dissatisfaction_with_self",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "feel_bored",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "low_energy",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
  ],
  [
    [{ id: "limbic_system", componentType: "label" }],
    [
      {
        id: "reduced_interest",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "feelings_of_hopelessness",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "cry_2",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "low_self_esteem",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "social_isolation",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
  ],

  [
    [{ id: "gaba_system_basal_ganglia", componentType: "label" }],
    [
      {
        id: "nervousness_anxiety",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "panic_feelings",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "muscle_stiffness_symptoms",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "tend_to_predict_worst",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "avoid_conflicts",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
  ],
  [
    [{ id: "gaba_system_basal_ganglia", componentType: "label" }],
    [
      {
        id: "excessive_fear_evaluation",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "excessive_motivation",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "lack_confidence",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "expecting_bad_things",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "easily_frightened",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
  ],

  [
    [{ id: "gaba_system_temporal_lobes", componentType: "label" }],
    [
      {
        id: "problems_with_patience",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "lose_temper_easily",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "irritation_builds_up",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "inconsistent_mood",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "think_others_comments_negative",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
  ],
  [
    [{ id: "gaba_system_temporal_lobes", componentType: "label" }],
    [
      {
        id: "experience_deja_vu",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "think_others_harm_me",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "dark_thoughts",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "difficulty_remembering_words",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "unknown_headaches_abdominal_pain",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
  ],

  [
    [{ id: "acetylcholine_system", componentType: "label" }],
    [
      {
        id: "forgetfulness",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "memory_problems",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "forget_scheduled_appointments",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "forget_medicines_on_time",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "remembering_recent_events",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
  ],
  [
    [{ id: "acetylcholine_system", componentType: "label" }],
    [
      {
        id: "difficulty_remembering_names",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "hard_to_memorize",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "forget_important_next_day",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "forget_mid_sentence",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
    [
      {
        id: "follow_instructions",
        componentType: "radio",
        variables: [{ 0: "never_rarely" }, { 1: "often_very_often" }],
        horizontal: true,
      },
    ],
  ],
];

const Level4 = () => {
  const { t } = useLanguage();

  return (
    <Fragment>
      <div className="w-full text-left mb-[24px]">
        <h2 className="text-2xl font-semibold mb-[16px]">
          {t("neurotransmitters")}
        </h2>
        <p className="max-w-[680px] text-[#555]">{t("questionnaire_intro")}</p>
      </div>

      <Level levels={levels} />
    </Fragment>
  );
};

export default Level4;
