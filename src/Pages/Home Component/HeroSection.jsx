import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//* import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// "https://i.postimg.cc/wMpD4F1c/aditi-gautam-6E0k2y-Nuk8c-unsplash.jpg",
//   "https://i.postimg.cc/6qfnkRZY/annie-spratt-c-VEOh-JJm-EE-unsplash.jpg",
//   "https://i.postimg.cc/vTtfJ9nz/ayoola-salako-ix-CWR36ON3I-unsplash.jpg",
//   "https://i.postimg.cc/4yQVDtcW/hossein-azarbad-1IQJ1s-B1T00-unsplash.jpg",
//   "https://i.postimg.cc/PJQYgZDR/imdadul-hussain-Yi-A4wq-Vp-LQQ-unsplash.jpg",
//   "https://i.postimg.cc/WzwgBrZ0/jem-sahagun-O33v-BPD6h-Aw-unsplash.jpg",
//   "https://i.postimg.cc/RhLKkft7/joel-muniz-3k3l2brxmw-Q-unsplash.jpg",
//   "https://i.postimg.cc/XqkdRF5g/joel-muniz-A4Ax1Apccf-A-unsplash.jpg",
//   "https://i.postimg.cc/MHmVCRB4/seth-doyle-zf9-yi-Aek-Js-unsplash.jpg",
const images = [
  "https://i.postimg.cc/G36vfLsK/husniati-salma-ldk-HWg5s3Ec-unsplash.jpg",
  "https://i.postimg.cc/V5ysWHvT/pexels-ceekris-1714940.jpg",
  "https://i.postimg.cc/bdXY9Fr4/pexels-cottonbro-7097455.jpg",
  "https://i.postimg.cc/PfCmKpNN/pexels-kampus-8949827.jpg",
  "https://i.postimg.cc/bYZQLDd0/pexels-ks-jay-339538217-14092191.jpg",
  "https://i.postimg.cc/05zpZMrz/pexels-pavel-danilyuk-7653088.jpg",
  "https://i.postimg.cc/d3ZtdKsj/pexels-pixabay-162540.jpg",
  "https://i.postimg.cc/pyNVJ1rg/pexels-pixabay-47863.jpg",
  "https://i.postimg.cc/T2KrQLhV/pexels-quang-nguyen-vinh-222549-6711518.jpg",
  "https://i.postimg.cc/jCVq4kCd/pexels-rdne-6646918.jpg",
  "https://i.postimg.cc/XXMNkDqR/pexels-safari-consoler-3290243-11834928.jpg",
  "https://i.postimg.cc/fWVx5tkJ/pexels-shkrabaanthony-5215000.jpg",
  "https://i.postimg.cc/fWVx5tkH/pexels-shvetsa-5231224.jpg",
  "https://i.postimg.cc/8k7hwJsx/the-tampa-bay-estuary-program-Ic-UQNza-Hrvg-unsplash.jpg",
];

const HeroSection = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((img) => (
          <SwiperSlide>
            <img
              className="h-150 w-full rounded-2xl"
              src={img}
              alt=""
              srcset=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
