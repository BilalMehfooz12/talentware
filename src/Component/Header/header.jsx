import { X, Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../../Screen/Container/container";
import logo from "../../assets/Images/logo.png";
import { navData } from "../../Data/data";
import UIcon from "../../Screen/UIcon/icon";
import Input from "../../Screen/Input/input";
import Button from "../../Screen/Button/button";
import userImage from "../../assets/Images/user.png";
const Header = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <Container>
      <div>
        <div className="h-[70px] flex items-center justify-between w-full">
          <img src={logo} alt="logo" className="mr-[30px]" />
          <div className="lg:flex hide-nav-item">
            {navData.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "primary mr-[25px] font-[600] text-[16px] text-nowrap"
                      : "mr-[25px] gray-200 font-[500] text-[16px] text-nowrap"
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>

          <div className="hide-nav-item">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-[8px] mr-[20px]">
                <div>
                  <UIcon
                    icon="material-symbols-light:search-rounded"
                    iconStyle="gray-200 w-[25px] h-[25px]"
                  />
                </div>
                <Input
                  placeholder="Search"
                  type="text"
                  inputStyle="text-[14px] font-[500] outline-none"
                />
              </div>
              <div className="flex gap-x-[10px]">
                <div>
                  <Button
                    text="Resume Builder"
                    btnStyle="bg-primary text-white px-[20px] py-[8px] text-[16px]"
                  />
                </div>
                <div>
                  <img src={userImage} alt="user" />
                </div>
              </div>
            </div>
          </div>
          <button
            className="lg:hidden show-nav-item primary cursor-pointer"
            onClick={() => setIsOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div>
          {navData.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "primary flex flex-col py-[10px] border-b border-b-gray-200 font-[600] text-[16px]"
                    : "flex flex-col gray-200 border-b border-b-gray-200 py-[10px] font-[400] text-[16px]"
                }
              >
                {item.name}
              </NavLink>
            );
          })}

          <div className="">
            <div className="flex items-center gap-x-[8px] my-[25px]">
              <div>
                <UIcon
                  icon="material-symbols-light:search-rounded"
                  iconStyle="gray-200 w-[25px] h-[25px]"
                />
              </div>
              <Input
                placeholder="Search"
                type="text"
                inputStyle="text-[14px] font-[500] outline-none"
              />
            </div>
            <div className="pb-[20px]">
              <div>
                <Button
                  text="Resume Builder"
                  btnStyle="bg-primary text-white px-[20px] py-[8px] text-[16px]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Header;
