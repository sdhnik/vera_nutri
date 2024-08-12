import { h } from "preact";
import classNames from "classnames";
import { useLanguage } from "../../hooks/LanguageContext";

const Select = ({
  value = '',
  onChange,
  className,
  id,
  name,
  disabled,
  required,
  variables,
}) => {
  const { t } = useLanguage();

  return (
    <div className={classNames("relative", { [className]: className })}>
      <select
        name={name}
        id={id}
        disabled={disabled}
        value={value || ''}
        required={required}
        onChange={onChange}
        className="border-[2px] border-solid border-[#e6e6e6] rounded-[4px] bg-white w-full h-[60px] text-[14px] text-[#656565] px-[20px] mb-[16px] transition outline-0 focus:shadow-[0px_7px_65px_rgba(0,0,0,0.07)] focus:border-[#4B8932] cursor-pointer appearance-none"
      >
        <option value="" selected>{t('select_placeholder')}</option>
        {variables.map((val) => {
          if (typeof val === 'object') {
            return (
              <option value={Object.keys(val)[0]}>{t(Object.values(val)[0])}</option>
            )
          } 
          return (
            <option value={val}>{val}</option>
          )
        })}
      </select>
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="border-l-[2px] border-l-[#e6e6e6] border-l-solid w-[30px] h-[24px] absolute top-[50%] right-[20px] mt-[-20px] pl-[16px] pointer-events-none text-[#60636c]"
      >
        <path
          fill="currentColor"
          d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
        ></path>
      </svg>
    </div>
  );
};

export default Select;
