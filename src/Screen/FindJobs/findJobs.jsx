import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Container from "../Container/container";
import userCoverImage from "../../assets/Images/userCoverImage.png";
import userProfile from "../../assets/Images/userProfile.png";
import Input from "../../Screen/Input/input";

import {
  jobData,
  jobsData,
  locationData,
  featuredJobData,
  recommendedjobData,
} from "../../Data/data";
import { splitSentence } from "../Utils/util";
import UIcon from "../UIcon/icon";
import Button from "../Button/button";
import Card from "../Card/card";
const FindJobs = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectJob, setSelectJob] = useState("");
  const [selectLocation, setSelectLocation] = useState("");

  const handleSelectLocation = (e) => {
    setSelectLocation(e.target.value);
  };

  const handleSelectJob = (e) => {
    setSelectJob(e.target.value);
  };

  return (
    <div className="pt-[25px] gray-100 ">
      <Container>
        <div className="grid grid-cols-12 gap-x-[25px]">
          <div className="lg:col-span-4 md:col-span-12 sm:col-span-12 col-span-12 user-profile">
            <div className="relative">
              <img
                src={userCoverImage}
                alt="userCoverImage"
                className="rounded-t-[10px] w-full"
              />

              <div className="absolute top-[95%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <img src={userProfile} alt="userProfile" />
              </div>
            </div>

            <div className="pt-12 pb-6 bg-white rounded-b-[10px] text-center ">
              <p className="gray-300 text-[18px] font-semibold text-lg">
                Albert Flores
              </p>

              <div className="text-[14] gray-300">
                Senior Product Designer | UI/UX{" "}
                <div className="block">
                  {" "}
                  Designer | Graphic Designer | Web...
                </div>
              </div>

              <p className="text-[12px] text-[#585D6E] mt-[5px]">
                Clinton, Maryland
              </p>
            </div>

            <div className="mt-[10px] rounded-[10px] bg-white px-[20px] pt-[10px] pb-[10px]">
              {jobData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`flex justify-between py-[10px] ${
                      jobData.length - 1 == index
                        ? "border-none"
                        : "border-b border-b-gray-100"
                    }`}
                  >
                    <div className="text-[14px] font-[500] gray-300">
                      {item.title}
                    </div>
                    <div className="text-[16px] font-[500] primary">
                      {item.job}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className=" flex flex-col mt-[10px] bg-white rounded-[10px]">
              <div
                className="flex justify-between items-center p-[10px] "
                onClick={() => setOpen(!open)}
              >
                <div>
                  <p className="font-[600] text-[16px] gray-300">My calendar</p>
                  <p className="text-[14px] gray-200 leading-none">
                    Upcoming Interviews
                  </p>
                </div>
                <div>
                  {open ? (
                    <UIcon
                      icon="si:expand-less-alt-fill"
                      iconStyle="w-[25px] h-[25px] gray-300"
                    />
                  ) : (
                    <UIcon
                      icon="ooui:expand"
                      iconStyle="w-[20px] h-[20px] gray-300"
                    />
                  )}
                </div>
              </div>

              {open && (
                <div className="flex justify-center gray-100 pt-[10px]">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                      setOpen(false);
                    }}
                    inline
                    popperPlacement="top"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-8 md:col-span-12 col-span-12 lg:mt-0 mt-[20px] card">
            <p className="font-[600] gray-300 text-[22px]">
              {splitSentence("Find your Dream Job, Albert!").strBeforeComma},
              <span className="primary px-1">
                {splitSentence("Find your Dream Job, Albert!").strAfterComma}
              </span>
            </p>
            <p className="text-[14px] text-[#585D6E]">
              Explore the latest job openings and apply for the best
              opportunities available today!
            </p>
            <div className="bg-white rounded-[10px] py-[20px] px-[20px] mt-[20px]">
              <div className="grid grid-cols-12">
                <div className="md:col-span-6 col-span-12 md:text-start text-center">
                  <p className="font-[500] md:text-[14px] text-[16px] gray-400 mt-2">
                    Job Title, Company, or Keywords
                  </p>
                </div>
                <div className="md:col-span-6 col-span-12">
                  <div className="flex flex-wrap md:flex-nowrap items-center md:justify-end justify-center">
                    <div className="border-l border-l-gray-100 border-r border-r-gray-100">
                      <Input
                        type="select"
                        selectedValue="Select Location"
                        selectStyle="gray-400 focus:outline-none font-[500] text-[14px] md:mr-[20px] px-2 mr-[10px]"
                        data={locationData}
                        handleSelect={handleSelectLocation}
                        value={selectLocation}
                      />
                    </div>

                    <Input
                      type="select"
                      selectedValue="Job Type"
                      selectStyle="gray-400 focus:outline-none md:mx-[20px] mx-[8px] font-[500] text-[14px]"
                      data={jobsData}
                      handleSelect={handleSelectJob}
                      value={selectJob}
                    />

                    <div className="w-full flex md:justify-end justify-center md:w-auto mt-2 md:mt-0">
                      <Button
                        icon="material-symbols-light:search-rounded"
                        text="Search"
                        btnStyle="bg-primary text-white h-[35px] text-[14px] px-[30px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-wrap md:gap-x-[8px] gap-[8px] mt-[20px] border-b border-b-gray-200 pb-[5px]">
              <div className="gray-200 md:text-[14px] text-[12px] font-[500] mr-2">
                Similar:{" "}
              </div>
              <div>
                <Button
                  text="Frontend"
                  btnStyle="md:py-[6px] py-[4px] md:px-[18px] px-[10px] gray-200 border border-gray-300 md:text-[12px] text-[10px]"
                />
              </div>

              <div>
                <Button
                  text="Backend"
                  btnStyle="md:py-[6px] py-[4px] md:px-[18px] px-[10px] gray-200 border border-gray-300 md:text-[12px] text-[10px]"
                />
              </div>

              <div>
                <Button
                  text="Graphic Designer"
                  btnStyle="md:py-[6px] py-[4px] md:px-[18px] px-[10px] gray-200 border border-gray-300 md:text-[12px] text-[10px]"
                />
              </div>
            </div>
            <div className="flex items-center mt-[15px] ga  p-x-[15px]">
              <div>
                <p className="font-[500] text-[18px] gray-300">Featured Jobs</p>
              </div>
              <div>
                <p className="primary underline font-[500] text-[14px] cursor-pointer">
                  See Featured Jobs
                </p>
              </div>
            </div>
            <Card data={featuredJobData} />
            <div className="flex items-center mt-[50px] gap-x-[15px]">
              <div>
                <p className="font-[500] text-[18px] gray-300">
                  Recommended Jobs
                </p>
              </div>
              <div>
                <p className="primary underline font-[500] text-[14px] cursor-pointer">
                  See Recommended Jobs
                </p>
              </div>
            </div>
            <Card data={recommendedjobData} />
            <div className="mt-[10px]"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FindJobs;
