import { Icon } from "@iconify/react";
import React from "react";

const Button = React.memo(({ text, icon, btnStyle }) => {
  return (
    <div>
      <button
        className={` font-[500] rounded-[8px] cursor-pointer text-nowrap flex items-center gap-x-[5px] ${btnStyle}`}
      >
        {icon && <Icon icon={icon} className="w-[25px] h-[25px]" />} {text}
      </button>
    </div>
  );
});

export default Button;
