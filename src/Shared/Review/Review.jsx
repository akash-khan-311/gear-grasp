// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// React Icons
import { BiSolidQuoteAltRight } from "react-icons/bi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Subtitle from "../../components/SubTitle/Subtitle";

const Review = () => {
  const [reveiws, setReveiws] = useState([]);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReveiws(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="mx-auto w-full  lg:w-3/5 text-center flex flex-col  justify-center items-center space-y-5">
        <Subtitle text={"testimonials"} />
        <SectionTitle title={"SATISFIED"} secondTitle={"wheels"} />
        <p className="text-white">
          Satisfied wheels, delighted customers. Experience excellence at
          GearGrasp, where satisfaction meets unparalleled service.
        </p>
      </div>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        spaceBetween={30}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="container mx-auto px-5 lg:px-0">
          {reveiws.map((review) => (
            <SwiperSlide key={review.id} className="my-20">
              <div className=" text-white border p-5  relative mx-6">
                <span className="text-blue-700 text-7xl absolute right-10 bottom-16">
                  <BiSolidQuoteAltRight />
                </span>
                <p className="italic text-sm lg:text-base">{`"${review.review}"`}</p>
                <div className="flex items-center gap-x-2 mt-10 ">
                  {/* Image */}
                  <div className="w-12 h-12 ">
                    <img
                      src={review.image}
                      className="h-full w-full rounded-full"
                      alt=""
                    />
                  </div>
                  {/* content */}
                  <div>
                    <h4 className="uppercase text-sm md:text-lg">
                      {review.name}
                    </h4>
                    <p className="text-blue-700 text-sm md:text-base">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Review;
