import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Machine Learning",
    description: "Build CNN, ResNet50, YOLOv11 models for image classification, object detection, and multimodal AI with 95%+ accuracy.",
  },
  {
    id: 2,
    title: "Data Science",
    description: "Expertise in EDA, feature engineering, ensemble models (XGBoost, LightGBM, CatBoost), and Kaggle competitions (Top 20%).",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description: "MERN stack with React, Node.js, MongoDB. Real-time chatbots, Agri-Tech platforms, and responsive dashboards.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I Do?</p>
        <div className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}>
  <p className={``}>
    MCA student specializing in Data Science, ML model development (92.2% sugarcane disease detection), 
    and full-stack web applications for intelligent systems.
  </p>
  <p className="mt-3">
   YOLOv11 agentic AI | Kaggle Top 20% | MERN Agri-Tech platforms | 
    Diabetes prediction (95.5% ensemble) | Multimodal NLP research.
  </p>
</div>

<div className="mt-8 flex max-md:justify-center gap-4">
  <a
    href="https://github.com/Mayuri172-atole"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
  >
    <svg className="w-5 h-5" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 2.03.06 2.5 1.06.73 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
    </svg>
    View GitHub
  </a>
</div>

      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
