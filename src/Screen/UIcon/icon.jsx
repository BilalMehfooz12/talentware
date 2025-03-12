import { Icon } from "@iconify/react";

const UIcon = ({ icon, iconStyle }) => {
  return (
    <div>
      <Icon icon={icon} className={iconStyle} />
    </div>
  );
};

export default UIcon;
