import { h } from "preact";
import { forwardRef } from "preact/compat";
import classNames from "classnames";

const Input = forwardRef(
  ({ id, type, className, label, textarea, value = '', ...props }, ref) => {
    const renderInput = (
      <input
        ref={ref}
        type={type || "text"}
        className="border-[2px] border-solid border-[#e6e6e6] rounded-[4px] bg-white w-full h-[60px] text-[14px] text-[#656565] px-[20px] mb-[16px] transition outline-0 focus:shadow-[0px_7px_65px_rgba(0,0,0,0.07)] focus:border-[#4B8932] disabled:opacity-[0.6]"
        id={id ? `${id}-id` : null}
        value={value || ''}
        {...props}
      />
    );

    const renderTextarea = (
      <textarea
        ref={ref}
        className="border-[2px] border-solid border-[#e6e6e6] rounded-[4px] bg-white w-full h-[60px] text-[14px] text-[#656565] py-[12px] px-[20px] mb-[16px] transition outline-0 focus:shadow-[0px_7px_65px_rgba(0,0,0,0.07)] focus:border-[#4B8932] resize-none min-h-[150px] disabled:opacity-[0.6]"
        id={id ? `${id}-id` : null}
        value={value || ''}
        {...props}
      />
    );

    return label ? (
      <div className={classNames("flex flex-col justify-end w-full", className)}>
        <div className="leading-[1.8] font-semibold mb-[8px] text-left">
          {label}
        </div>
        <div>{textarea ? renderTextarea : renderInput}</div>
      </div>
    ) : (
      <div className={classNames("flex flex-col justify-end w-full", className)}>
        {textarea ? renderTextarea : renderInput}
      </div>
    );
  }
);

export default Input;
