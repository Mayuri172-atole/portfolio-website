import person from "../../assets/images/person.jpeg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Updated for MCA Student profile
const informationSummaryData = [
  {
    id: 1,
    title: "Projects",
    description: "10+",
  },
  {
    id: 2,
    title: "GitHub Repos",
    description: "15+",
  },
  {
    id: 3,
    title: "Skills Mastered",
    description: "25+",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I'm
            <span className="text-nowrap shrink-0 inline-block w-full">
              Mayuri Atole
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I'm an <span className="bg-highlight">MCA student</span> and a 
            <span className="bg-highlight">Data Science & Machine Learning enthusiast</span> 
            based in <span className="bg-highlight">Pune, India</span>. 
            I strive to build intelligent, data-driven, and impactful applications 
            through well-structured code, deep learning techniques, and user-focused design.
          </p>

          <p className="text-center lg:text-start">
<a
  className="btn-primary btn btn-xs xxs:btn-lg text-white"
  href="/assets/resume/Mayuri_Atole_Resume.pdf"  // Update path to your resume
  download="Mayuri_Atole_Resume.pdf"
>
  Download Resume
</a>

          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="Mayuri Atole - MCA Student"
        />
      </div>
    </div>
  );
};

export default Introduction;
