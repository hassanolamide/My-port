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
      "During my 3-year tenure at SOAIR, a leading SOAIR solutions provider, I played a pivotal role in developing robust and scalable web applications. As a full stack developer, I worked closely with cross-functional teams to build and maintain the company's flagship software products, Engineered responsive and intuitive user interfaces using React, html,css, Redux, and modern JavaScript frameworks.",
  },
  {
    year: 2019,
    title: "OOU",
    duration: "5 years",
    details:
      "As part of my academic journey, I had the opportunity to work on a project named DocMySkin,a web-based platform designed to enhance dermatological care. This project allowed me to apply my skills in web development and contribute to a meaningful solution.Working in collaboration with a team of fellow students, I played a crucial role in developing the DocMySkin website.",
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
