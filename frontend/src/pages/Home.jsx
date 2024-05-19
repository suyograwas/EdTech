import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  HighlightText,
  CTAButton,
  CodeBlocks,
} from "../components/core/homepage";
import Banner from "../assets/Images/banner.mp4";

const Home = () => {
  return (
    <div className="">
      {/* {section 1} */}

      <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between">
        <Link to={"/signUp"}>
          <div className=" group mt-16 p-1 mx-auto rounded-full bg-richblue-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] duration-200 hover:scale-95 w-fit group-hover:bg-richblack-900">
              <p>Become an Instructor </p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-7">
          Empower Your Future With
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className="mt-4 w-[80%]  text-center text-base  text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto={"/signUp"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className=" shadow-blue-200  w-11/12 my-16 mx-3">
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        <div className="">
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={"Coding potential "} />
                With our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              linkto: "/signUp",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html> \n <html>\n <head>  <title>Example</title> \n <linkrel="stylesheet"href="styles.css"> \n </head> \n <body> \n <h1>  <a href="/">Header</a> \n </h1> \n  <nav> <a href="one/">One</a> <ahref="two/">Two</a> \n <a href="three/">Three</a> \n <nav/>`}
            codeColor={"text-yellow-25"}
          />
        </div>

        <div className="">
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Start
                <HighlightText text={"coding in seconds "} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signUp",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html> \n <html>\n <head>  <title>Example</title> \n <linkrel="stylesheet"href="styles.css"> \n </head> \n <body> \n <h1>  <a href="/">Header</a> \n </h1> \n  <nav> <a href="one/">One</a> <a href="two/">Two</a> \n <a href="three/">Three</a> \n <nav/>`}
            codeColor={"text-yellow-25"}
          />
        </div>
      </div>

      {/* {section 2} */}
      <div className=" bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[333px]"></div>
      </div>
      {/* {section 3} */}
    </div>
  );
};

export default Home;
