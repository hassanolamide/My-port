import React from "react";
import Workitem from "./Workitem";

const data = [
  {
    year: 2022,
    title: "Sidmach",
    duration: "2 years",
    details:
      "At SIDMACH, I played a key role in helping there frontend team create diffrent websites,i played a role in the WAEC estudy application and many more. During my tenure, I successfully  learn new styless of building websites,and successfully created different  project. Overall, my experience at SIDMACH allowed me to make a valuable impact through WAEC e-tudy application. I developed a strong proficiency in Frontend that will enable me to excel in different roles moving forward.",
  },
  {
    year: 2020,
    title: "Soair",
    duration: "3 years",
    details:
      "During my 3-year tenure at SOAIR, a leading SOAIR solutions provider, I played a pivotal role in developing robust and scalable web applications. As a full stack developer, I worked closely with cross-functional teams to build and maintain the company's flagship software products, Engineered responsive and intuitive user interfaces using React, html,css, Redux, and modern JavaScript frameworks, Implemented comprehensive unit and integration tests, ensuring high code quality and maintainability,Utilized MongoDB and MySQL databases for efficient data storage and retrieval,Designed and implemented RESTful APIs using Node.js and Express.I successfully created major project for the company such as Real-estate, and many more.",
  },
  {
    year: 2019,
    title: "OOU",
    duration: "5 years",
    details:
      "As part of my academic journey, I had the opportunity to work on a project named DocMySkin,a web-based platform designed to enhance dermatological care. This project allowed me to apply my skills in web development and contribute to a meaningful solution.Working in collaboration with a team of fellow students, I played a crucial role in developing the DocMySkin website. The platform aimed to provide users with a convenient way to upload images of their skin conditions and receive professional medical advice from dermatologists,Developed the front-end user interface using HTML, CSS, and JavaScript, ensuring a seamless and intuitive experience for users,Integrated a secure image upload functionality, allowing users to submit high-quality photos of their skin concerns,Conducted thorough testing and debugging to ensure the website's functionality and performance.",
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
