import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { useLanguage } from "../../hooks/LanguageContext";
import { useData } from "../../hooks/DataContext";

import Input from "../../components/Input";
import RadioButton from "../RadioButton";
import Checkbox from "../Checkbox";
import Select from "../Select";
import Button from "../../components/Button";

const Level = ({ levels }) => {
  const { t } = useLanguage();
  const { changePage, pages, prev, changeData, sendData, data } = useData();
  const [disabled, setDisabled] = useState(false);

  const [level, setLevel] = useState(prev ? levels.length - 1 : 0);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (level < levels.length - 1) {
      setLevel(level + 1);
    } else {
      if (pages < 9) {
        changePage(pages + 1);
      } else {
        setDisabled(true);
        sendData();
      }
    }
  };

  const handlePrev = () => {
    if (level > 0) {
      setLevel(level - 1);
    } else {
      changePage(pages - 1);
    }
  };

  const renderComponent = (type, props) => {
    const isTextarea = type === "textarea";

    switch (type) {
      case "radio":
        return (
          <div className="flex flex-col justify-end w-full">
            <div className="leading-[1.8] font-semibold mb-[8px] text-left">
              {t(props.id)}
            </div>
            <div
              className={
                props.horizontal
                  ? "min-[768px]:grid min-[768px]:gap-[24px] mb-[16px]"
                  : "mb-[16px]"
              }
              style={{
                gridTemplateColumns: `repeat(${props.variables.length}, 1fr)`,
              }}
            >
              {props.variables.map((val, index) => (
                <RadioButton
                  name={props.id}
                  id={`${props.id}-${index}`}
                  onChange={({ target: { value } }) =>
                    changeData(props.id, value)
                  }
                  value={Object.keys(val).toString()}
                  required={index === 0}
                  checked={data[props.id] === Object.keys(val).toString()}
                >
                  {t(Object.values(val).toString())}
                </RadioButton>
              ))}
            </div>
          </div>
        );
      case "checkbox":
        return (
          <Checkbox
            name={props.id}
            id={props.id}
            onChange={({ target: { value } }) => changeData(props.id, value)}
            value={data[props.id]}
            checked={Boolean(data[props.id])}
          >
            {t(props.id)}
          </Checkbox>
        );
      case "checkbox-with-input":
        return (
          <Checkbox
            name={`${props.id}-checkbox`}
            id={`${props.id}-checkbox`}
            required={
              props.requiredKey && props.requiredValue
                ? data[props.requiredKey] === props.requiredValue
                : null
            }
            checked={Boolean(data[props.id])}
            includeInput={{
              id: props.id,
              name: props.id,
              onChange: ({ target: { value } }) => changeData(props.id, value),
              changeData,
              value: data[props.id],
            }}
          >
            {t(props.id)}
          </Checkbox>
        );
      case "select":
        return (
          <div className="flex flex-col justify-end w-full">
            <div className="leading-[1.8] font-semibold mb-[8px] text-left">
              {t(props.id)}
            </div>
            <div>
              <Select
                name={props.id}
                id={props.id}
                required={
                  props.requiredKey && props.requiredValue
                    ? data[props.requiredKey] === props.requiredValue
                    : true
                }
                onChange={({ target: { value } }) =>
                  changeData(props.id, value)
                }
                value={data[props.id]}
                variables={props.variables}
              />
            </div>
          </div>
        );
      case "label":
        return (
          <div className="flex flex-col justify-end w-full mb-[16px]">
            <div className="leading-[1.8] font-semibold pb-[16px] border-b-[1px] border-b-solid border-b-[#e6e6e6] text-left">
              {t(props.id)}
            </div>
          </div>
        );
      default:
        return (
          <Input
            required={
              props.requiredKey && props.requiredValue
                ? data[props.requiredKey] === props.requiredValue
                : true
            }
            name={props.id}
            id={props.id}
            type={props.type ? props.type : "text"}
            textarea={isTextarea || null}
            onChange={({ target: { value } }) => changeData(props.id, value)}
            value={data[props.id] || ""}
            label={t(props.id)}
          />
        );
    }
  };

  return (
    <form
      className="w-full p-0  flex-1 flex flex-col"
      onSubmit={handleFormSubmit}
    >
      {levels[level].map((row) => (
        <div
          className={`min-[768px]:grid min-[768px]:gap-[24px] w-full`}
          style={{ gridTemplateColumns: `repeat(${row.length}, 1fr)` }}
        >
          {row.map((item) => renderComponent(item.componentType, item))}
        </div>
      ))}

      <div className="flex justify-between items-center gap-[16px] w-full mt-auto">
        {(pages > 2 || level > 0) && (
          <Button type="gray" onClick={handlePrev}>
            {t("previous")}
          </Button>
        )}
        <Button
          className="ml-auto disabled:pointer-event-none"
          type={disabled ? "gray" : "green"}
          submit
          disabled={disabled}
        >
          {t(
            pages < 9 || (pages === 9 && level < levels.length - 1)
              ? "next"
              : "submit"
          )}
        </Button>
      </div>
    </form>
  );
};

export default Level;
