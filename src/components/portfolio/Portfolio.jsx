import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "DEEP LEARNING",
    title: "Sugarcane Leaf Disease Classification",
    description: "CNN model with 95%+ accuracy for early disease detection using image preprocessing & augmentation techniques.",
    link: "https://github.com/Mayuri172-atole/sugarcane-detection",
  },
  {
    id: 2,
    image: card2,
    category: "AI RESEARCH",
    title: "Tech Meets Tradition: Baramati Sugarcane AI",
    description: "98.2% accuracy AI framework with satellite sensing, CNN/ViT disease detection, and drip irrigation for sustainable farming.",
    link: "https://github.com/Mayuri172-atole/sugarcane-ai-research",
  },
  {
    id: 3,
    image: card3,
    category: "FULL-STACK",
    title: "Agri-Tech E-Commerce Platform",
    description: "MERN stack platform with AI recommendations, multilingual support, real-time chatbot, and secure payment systems.",
    link: "https://github.com/Mayuri172-atole/agritech-platform",
  },
  {
    id: 4,
    image: card4,
    category: "ML ENSEMBLE",
    title: "Diabetes Prediction (95.5% Accuracy)",
    description: "Hybrid Random Forest + XGBoost ensemble with ANN. Compared Logistic Regression, LightGBM, CatBoost models.",
    link: "https://github.com/Mayuri172-atole/Diabetes-Prediction-ML-Models",
  },
  {
    id: 5,
    image: card5,
    category: "COMPUTER VISION",
    title: "YOLOv11 Agentic Object Detection",
    description: "Real-time detection with YOLOv11 nano/YOLOE segmentation + Ultralytics, AutoGen, Gemini multimodal AI agents.",
    link: "https://github.com/Mayuri172-atole/YOLO-Agentic-Object-Detection",
  },
  {
    id: 6,
    image: card6,
     category: "FRONTEND",
    title: "Personal Portfolio Website",
    description: "Responsive portfolio built with React, Tailwind CSS, and optimized for SEO and Lighthouse performance.",
    link: "https://github.com/Mayuri172-atole/portfolio",
  
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            My best Data Science, ML, and Full-Stack projects for real-world impact.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/Mayuri172-atole?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          View GitHub →
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
