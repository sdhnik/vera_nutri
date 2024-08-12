import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import classNames from "classnames";

import Input from "../Input";

const Checkbox = ({
  value,
  onChange,
  className,
  id,
  name,
  disabled,
  checked = false,
  required,
  children,
  includeInput,
}) => {
  const [isValue, setIsValue] = useState(false);

  useEffect(() => {
    setIsValue(checked);
  }, [checked]);

  const handleClick = () => {
    if (includeInput && isValue) includeInput.changeData(includeInput.id, "");
    setIsValue(!isValue);
  };


//   <input type="checkbox"
//   class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#e6e6e6] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#e6e6e6] before:opacity-0 before:transition-opacity checked:border-[#4B8932] checked:bg-[#4B8932] checked:before:bg-[#4B8932] hover:before:opacity-10"
//   id="link" />
// <span
//   class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
//   <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
//     stroke="currentColor" stroke-width="1">
//     <path fill-rule="evenodd"
//       d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//       clip-rule="evenodd"></path>
//   </svg>
// </span>


  return (
    <div
      className={classNames("flex flex-wrap items-center gap-[16px_8px] lg:gap-0 mb-[8px]", {
        [className]: className,
      })}
    >
      <div className="flex items-center relative">
        <input
          id={id}
          name={name}
          disabled={disabled}
          type="checkbox"
          checked={isValue}
          value={value}
          required={required}
          onChange={onChange || handleClick}
          className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#e6e6e6] transition-all checked:border-[#4B8932] checked:bg-[#4B8932]"
        />
        <span
          className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
            stroke="currentColor" stroke-width="1">
            <path fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"></path>
          </svg>
        </span>
      </div>
      <label htmlFor={id} className="cursor-pointer ml-[8px] text-[16px] text-[#656565] flex-1 text-left">
        {children}
      </label>

      {includeInput && (
        <Input
          required={isValue}
          name={includeInput.id}
          id={includeInput.id}
          type={includeInput.type ? includeInput.type : "text"}
          onChange={includeInput.onChange}
          value={includeInput.value}
          disabled={!isValue}
          className="sm:w-[50%] sm:ml-auto sm:mb-[-16px]"
        />
      )}
    </div>
  );
};

export default Checkbox;
