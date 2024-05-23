import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import { HighlightText, CourseCard } from ".";

const tabsName = [
  "Free",
  "New to Coding",
  "Most Popular",
  "Skill Paths",
  "Career Paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };
  return (
    <div>
      <div className=" text-4xl font-semibold text-center">
        Unlock
        <HighlightText text={"the Power of Code"} />
      </div>
      <p className=" text-center text-richblack-800 text-base mt-3">
        Learn to Build Anything You Can Imagine
      </p>
      <div className="flex flex-row gap-2items-center bg-richblack-600 rounded-full mb-40 mt-5 border-richblack-200  px-1 py-1">
        {tabsName.map((element, index) => {
          return (
            <div
              className={`text-base ${
                currentTab == element
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : " text-richblack-200"
              } rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5
              px-7 py-2`}
              key={index}
              onClick={() => setMyCards(element)}
            >
              {element}
            </div>
          );
        })}
      </div>
      <div className=" absolute felx flex-row gap-10 justify-between w-full">
        {courses.map((element, index) => {
          return (
            <CourseCard
              cardData={element}
              key={index}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
