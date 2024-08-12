import { h } from "preact";
import classNames from "classnames";

const Button = ({ type, submit, className, children, ...props }) => {
  return (
    <button
      {...props}
      type={submit ? "submit" : "button"}
      className={classNames(className, {
        "min-w-[150px] px-[36px] py-[12px] rounded-full bg-[#4B8932] text-white hover:bg-[#3A6A2B] transition disabled:bg-[#bbb] disabled:pointer-events-none":
          type === "green",
        "min-w-[150px] px-[36px] py-[12px] rounded-full bg-[#eaeaea] text-[#2a2a2a] hover:bg-[#D1CECF] transition disabled:pointer-events-none":
          type === "gray",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
