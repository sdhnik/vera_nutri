import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import classNames from 'classnames';

const RadioButton = ({
  value,
  onChange,
  className,
  id,
  name,
  disabled,
  checked = false,
  required,
  children,
}) => {
  const [isValue, setIsValue] = useState(false);

  useEffect(() => {
    setIsValue(checked);
  }, [checked]);

  return (
    <div
      className={classNames('flex items-center mb-[8px]', { [className]: className })}
    >
      <input
        id={id}
        name={name}
        disabled={disabled}
        type="radio"
        checked={isValue}
        value={value}
        required={required}
        onChange={onChange}
        className="rounded-full min-w-[22px] w-[22px] h-[22px] relative cursor-pointer appearance-none bg-[#e6e6e6] before:content-[''] before:absolute before:w-[12px] before:h-[12px] before:top-[50%] before:mt-[-6px] before:left-[0] before:right-[0] before:mx-auto before:my-0 before:rounded-full before:checked:bg-[#4B8932]"
      />
      <label
        htmlFor={id}
        className="cursor-pointer ml-[8px] text-[16px] text-[#656565]"
      >
        {children}
      </label>
    </div>
  );
};

export default RadioButton;
