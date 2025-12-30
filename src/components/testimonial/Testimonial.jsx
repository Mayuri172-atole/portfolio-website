import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
   {
    message: "Master of Computer Applications (MCA)",
    quote: "2024–2026 | Pratibha Institute of Business Management",
    name: "Pursuing MCA",
    designation: "Data Science & ML Specialization",
  },
  {
    message: "B.Sc. Computer Science",
    quote: "2021–2024 | Vidya Pratishthan's Arts, Science & Commerce College, Baramati",
    name: "Strong CS Foundation",
    designation: "Programming, Algorithms, Databases",
  },
  {
    message: "Higher Secondary Certificate (HSC)",
    quote: "2021 | Creative International School & Jr. College, Baramati",
    name: "Science Stream",
    designation: "Mathematics & Computer Science",
  },
  {
    message: "Secondary School Certificate (SSC)",
    quote: "2019 | Shree Nageshwar English Medium School, Shetphal Gadhe",
    name: "Science Excellence",
    designation: "STEM Foundation",
  },

];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Education</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
