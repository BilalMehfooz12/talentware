import React from "react";
import featureJobImg from "../../assets/Images/featureJob.png";
import UIcon from "../UIcon/icon";
import Button from "../Button/button";
import { splitJobStats } from "../Utils/util";

const Card = React.memo(({ data }) => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 md:gap-x-[16px] gap-[16px] mt-[15px] ">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div className="bg-white py-[10px] px-[10px]  rounded-[10px]">
              <p className="font-[600] text-[10px] gray-300">{item.title}</p>
              <div className="flex items-center">
                <div>
                  <img src={featureJobImg} alt="featureJobImg" />
                </div>
                <div className="flex flex-col">
                  <p className="gray-300 font-[500] text-[13px]">
                    {item.position}
                  </p>
                  <p className="gray-300 font-[500] text-[12px]">{item.text}</p>
                </div>
              </div>

              <div className="flex items-center gap-x-[5px] mt-[5px]">
                <div>
                  <UIcon icon="mynaui:location" iconStyle="gray-400" />
                </div>
                <div className="gray-400 font-[500] card-text">
                  {item.location}
                </div>
              </div>

              <div className="flex items-center gap-x-[5px] mt-[5px]">
                <div>
                  <UIcon icon="mdi-light:clock" />
                </div>
                <div className="gray-400 font-[500] card-text">
                  <p>
                    {splitJobStats(item.time).timeAgo}
                    <span className="primary">
                      |{splitJobStats(item.time).applicantsInfo}
                    </span>
                  </p>

                  {/* {item.time} */}
                </div>
              </div>

              <div className="flex justify-between items-center mt-[15px]">
                <div>
                  <Button
                    text="Apply Now"
                    btnStyle="bg-primary text-white h-[30px] text-[12px] px-[25px]"
                  />
                </div>

                <div>
                  <UIcon
                    icon="material-symbols:bookmark-outline"
                    iconStyle="text-[#AAAAAA]"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default Card;
