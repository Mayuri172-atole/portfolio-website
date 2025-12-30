import Marquee from "react-fast-marquee";
const commonSVGClass = "h-5 sm:h-8 md:h-10 hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer";

const brandLogos = [
  // Python 🌊
  <svg className={`${commonSVGClass}`} viewBox="0 0 48 48">
    <path fill="#3776AB" d="M24 1.5C11.8 1.5 2.1 11.2 2.1 23.4s9.7 21.9 21.9 21.9 21.9-9.7 21.9-21.9S36.2 1.5 24 1.5zm0 41.7c-10.4 0-18.9-8.5-18.9-18.9S13.6 5.7 24 5.7s18.9 8.5 18.9 18.9-8.5 18.9-18.9 18.9z"/>
    <path fill="#FF7B00" d="M24 7.2c-4.8 0-9.3 1.3-13.1 3.6 1.1 4.6 4.9 8.4 9.7 10.3V20c0-2.8-1.2-5.3-3.2-7.1 2.4-1 5-1.6 7.6-1.6 3.3 0 6.4 0.8 9.1 2.2-.9 3.7-3 6.8-5.8 9-1.3 1-2.1 2.6-2.1 4.4v1.3c4.8-1.9 8.6-5.7 9.7-10.3-2.7-2.3-6.3-3.7-10.2-3.7z"/>
  </svg>,

  // React ⚛️
  <svg className={`${commonSVGClass}`} viewBox="0 0 24 24">
    <path fill="#61DAFB" d="M12 2L2 22h20L12 2z"/>
    <path fill="#000" d="M11.37 8.28L16 17h-3l-1.37-3.14h-4.27L8 17H5l4.63-8.72h.02zM10.34 12L8 15.59 5.66 12H6.8l.74 1.65h2.56L13.2 12h1.14z"/>
  </svg>,

  // TensorFlow 🧠
  <svg className={`${commonSVGClass}`} viewBox="0 0 24 24">
    <path fill="#FF6F00" d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v13h4V6h-4z"/>
  </svg>,

  // Node.js 🟢
  <svg className={`${commonSVGClass}`} viewBox="0 0 24 24">
    <path fill="#68A063" d="M22.6 13.4L19 9.7l-1.9 4.7h-5.8l-1.9-4.7-3.6 3.7 4.7 4.8v5.2l3.8-2v-3.5l4.7 4.8v-5.2l4.7-4.8z"/>
  </svg>,

  // MongoDB 🟢
  <svg className={`${commonSVGClass}`} viewBox="0 0 24 24">
    <path fill="#47A248" d="M18.72 10.88l-6-4.8-6 4.8V20h12z"/>
  </svg>,

  // GitHub ⚫
  <svg className={`${commonSVGClass}`} viewBox="0 0 16 16">
    <path fill="#181717" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 2.03.06 2.5 1.06.73 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>,

  // Jupyter 🔶
  <svg className={`${commonSVGClass}`} viewBox="0 0 24 24" fill="#F37726">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>,

  // VS Code 🔵
  <svg className={`${commonSVGClass}`} viewBox="0 0 24 24">
    <path fill="#007ACC" d="M2 4v16h20V4H2zm2 2h16v12H4V6zm2 2v8h12V8H6z"/>
  </svg>,

  // PostgreSQL 🟦
  <svg className={`${commonSVGClass}`} viewBox="0 0 24 24">
    <path fill="#4169E1" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>,

  // Docker 🔵
  <svg className={`${commonSVGClass}`} viewBox="0 0 24 24">
    <circle fill="#2496ED" cx="12" cy="12" r="10"/>
    <path fill="#0DB7ED" d="M3 12a9 9 0 0 1 18 0"/>
  </svg>,

  // AWS 🟡 **FIXED**
  <svg className={`${commonSVGClass}`} viewBox="0 0 24 24">
    <path fill="#FF9900" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
  </svg>,

  // Kaggle 🟠
  <svg className={`${commonSVGClass}`} viewBox="0 0 24 24" fill="#FFA700">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>,

  // Streamlit 🟣
  <svg className={`${commonSVGClass}`} viewBox="0 0 24 24" fill="#FF4B4B">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
  </svg>,
];

const TechStack = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center">
        <p className="section-title mb-6">Tech Stack</p>
        <p className="text-[14px] sm:text-lg text-gray-600 font-normal">
          Tools for Data Science & ML
        </p>
      </div>
      <div className="w-full mt-8 p-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100">
        <Marquee pauseOnHover={true} speed={80} className="group">
          <p className="flex items-center pt-4 md:pt-10">
            {brandLogos?.map((logo, index) => (
              <span className="ps-5 sm:ps-10 md:ps-20 inline-block" key={index}>
                {logo}
              </span>
            ))}
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default TechStack;
