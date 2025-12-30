import img1 from "../../assets/images/blog/blog-1.jpg";
import img2 from "../../assets/images/blog/blog-2.jpg";
import img3 from "../../assets/images/blog/blog-3.jpg";
import img4 from "../../assets/images/blog/blog-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

const custom_breakpoints = {
  640: { slidesPerView: 2, spaceBetween: 15 },
  768: { slidesPerView: 3, spaceBetween: 15 },
  1220: { slidesPerView: 4, spaceBetween: 24 },
};

const activitiesData = [
  {
    id: 1,
    image: img1,
    date: "2024-2025",
    comments: "Team Member",
    title: "Udaan – Intercollegiate Fest (Natya Street Play)",
    description: "Collaborated with team to script, rehearse, and deliver social-impact street play performance. Improved confidence & communication skills.",
    link: "#!",
  },
  {
    id: 2,
    image: img2,
    date: "2024",
    comments: "Presenter",
    title: "VidyaTech Project & Poster Presentation",
    description: "Presented technical projects to peers & faculty, explaining complex ML concepts and answering questions. Strengthened presentation skills.",
    link: "#!",
  },
  {
    id: 3,
    image: img3,
    date: "2025",
    comments: "Mentee",
    title: "Viosa Corporate Mentorship Program",
    description: "Structured mentorship focused on career guidance, soft skills, and industry expectations for software/data science roles.",
    link: "#!",
  },
  {
    id: 4,
    image: img4,
    date: "2025",
    comments: "Participant",
    title: "TCS iON Career Edge – Young Professional",
    description: "Completed modules on communication, corporate etiquette, and workplace readiness to build professional behavior & employability skills.",
    link: "#!",
  },
];

const Extracurricular = () => {
  return (
    <div className="content py-25 px-2 relative" id="activities">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Extracurricular Activities</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Building leadership, communication, and professional skills beyond academics.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {activitiesData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10"
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Extracurricular;
