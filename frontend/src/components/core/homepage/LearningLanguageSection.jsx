import React from "react";
import {
  Know_your_progress,
  Plan_your_lessons,
  Compare_with_others,
} from "../../../assets";
import { CTAButton, HighlightText } from ".";

const LearningLanguageSection = () => {
  return (
    <div className="flex flex-col gap-5 mt-32 mb-32 items-center">
      <div className=" text-4xl font-semibold text-center">
        Your swiss knife for
        <HighlightText text={"learning any language"} />
      </div>
      <div className="text-center text-richblack-600 mx-auto text-base font-medium w-[70%] ">
        Using spin making learning multiple languages easy. with 20+ languages
        realistic voice-over, progress tracking, custom schedule and more.
      </div>

      <div className="flex flex-row items-center justify-center mt-5">
        <img
          src={Know_your_progress}
          alt=""
          className=" object-contain -mr-32"
        />
        <img src={Compare_with_others} alt="" className=" object-contain" />
        <img
          src={Plan_your_lessons}
          alt=""
          className=" object-contain -ml-32"
        />
      </div>
      <div className=" w-fit ">
        <CTAButton active={true} linkto={"/signUP"}>
          Learn More
        </CTAButton>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
