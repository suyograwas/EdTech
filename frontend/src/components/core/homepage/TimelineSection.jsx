import React from "react";
import { Logo1, Logo2, Logo3, Logo4, TimelineImage } from "../../../assets";

const timeline = [
  {
    logo: Logo1,
    heading: "Leadership",
    description: "Fully committed to the success company",
  },
  {
    logo: Logo2,
    heading: "Responsibility",
    description: "Students will always be our top priority",
  },
  {
    logo: Logo3,
    heading: "Flexibility",
    description: "The ability to switch is an important skills",
  },
  {
    logo: Logo4,
    heading: "Solve the problem",
    description: "Code your way to a solution",
  },
];
const TimelineSection = () => {
  return (
    <div className="flex  flex-row gap-15 items-center ">
      <div className="w-[45%]  flex flex-col gap-5">
        {timeline.map((element, index) => {
          return (
            <div className="flex flex-row gap-6" key={index}>
              <div className="w-[50px] h-[50px] bg-white flex  items-center rounded-full justify-center">
                <img src={element.logo} alt="" />
              </div>
              <div className="">
                <h2 className="font-semibold text-lg">{element.heading}</h2>
                <p className="text-base">{element.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative shadow-blue-200 ">
        <img
          src={TimelineImage}
          alt="timelineImage"
          className="shadow-white object-cover h-fit"
        />
        <div
          className="absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-6 
         left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <div className="flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7">
            <p className="text-3xl font-bold">10</p>
            <p className="text-caribbeangreen-300 text-sm">YEARS EXPERIENCES</p>
          </div>
          <div className="flex gap-5 items-center px-7">
            <p className="text-3xl font-bold">250</p>
            <p className="text-caribbeangreen-300 text-sm">TYPES OF COURSES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
