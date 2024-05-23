import React from "react";
import { Instructor } from "../../../assets";
import { CTAButton, HighlightText } from "./";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className="flex flex-row gap-20 items-center mt-16">
      <div className="w-[50%]">
        <img src={Instructor} alt="" />
      </div>
      <div className="w-[50%] flex flex-col gap-10">
        <div className="text-4xl font-semibold w-[50%]">
          Become an <HighlightText text={" instructor"} />
        </div>
        <p className=" font-medium text-base w-[80%] text-richblack-800">
          Instructors from around the world teach millions of students on
          StudyNotion. We provide the tools and skills to teach what you love.
        </p>
        {/* <div className="w-full"> */}
        <CTAButton active={true} linkto={"/signUp"}>
          <div className="flex flex-row items-center gap-2">
            Start Teaching Today
            <FaArrowRight />
          </div>
        </CTAButton>
        {/* </div> */}
      </div>
    </div>
  );
};

export default InstructorSection;
