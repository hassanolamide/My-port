import React from "react";
import html from "./html.png";
import css from "./css.jpg";
import js from "./js.jpg";
import reactimg from "./react.png";
import tw from "./tw.png";
import git from "./git.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactimg,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tw,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: git,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div id="skills" className="w-full h-screen bg-gray-100">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-500">
        <div>
          <p className="text-4xl fonnt-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">This are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md  bg-white hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto " />
                <p className="mt-4">{title}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
