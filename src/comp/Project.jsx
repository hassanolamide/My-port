import Projecitem from "./Projectitem";
import img11 from "../assets/Screenshot (6).png";
import img1 from "../assets/Screenshot (9).png";
import img2 from "../assets/Screenshot (14).png";
import img3 from "../assets/Screenshot (15).png";
import img4 from "../assets/chat.png";

const Project = () => {
  return (
    <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] ">
        Projects
      </h1>
      <p className="text-center py-8 ">
        Throughout my academic and professional journey, I have had the
        opportunity to work on a diverse range of projects, each presenting
        unique challenges and opportunities for growth. On this page, I showcase
        a curated selection of projects that highlight my skills, expertise, and
        passion for technology.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        <Projecitem img={img11} title="Iphone" />
        <Projecitem img={img1} title="Docmyskin" />
        <Projecitem img={img2} title="Ethereals" />
        <Projecitem img={img3} title="Estate" />
        <Projecitem img={img4} title="Chat-app" />
      </div>
    </div>
  );
};

export default Project;
