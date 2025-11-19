import React from "react";
import Workitem from "./Workitem";

const data = [
  {
    year: 2022,
    title: "Sidmach",
    duration: "2 years",
    details:
      "At SIDMACH, I played a key role in helping there frontend team create diffrent websites,i played a role in the WAEC estudy application and many more. ",
  },
  {
    year: 2020,
    title: "Soair",
    duration: "3 years",
    details:
      "Full Stack Developer at SOAIR (3 years). Built and maintained scalable web applications and responsive UIs using React, Redux, and modern JavaScript frameworks.",
  },
  {
    year: 2019,
    title: "OOU",
    duration: "5 years",
    details:
      "I graduated with a Second Class Upper in Computer Engineering. During my studies, I co-developed DocMySkin, a web-based platform for enhanced dermatological care. This project allowed me to apply my web development skills within a collaborative student team.",
  },
];
const Work = () => {
  return (
    <>
      <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] ">WORK</h1>
        {data.map((item, idx) => (
          <Workitem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </>
  );
};

export default Work;
