import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Sponsor = () => {
  var settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="my-14 ">
      <Slider {...settings}>
        <div className="flex justify-center items-center">
          <img
            className=" w-40  mx-auto"
            src="https://i.ibb.co/xDGjYkX/Partner-8.png"
            alt=""
          />
        </div>

        <div>
          <img
            className=" w-40  mx-auto"
            src="https://i.ibb.co/Nr2M3kM/Partner-7.png"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center w-full h-full">
          <img
            className=" w-40  mx-auto"
            src="https://i.ibb.co/JcyWBSc/Partner-4.png"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center w-full h-full">
          <img
            className=" w-40  mx-auto"
            src="https://i.ibb.co/xDGjYkX/Partner-8.png"
            alt=""
          />
        </div>
        <div>
          <img
            className=" w-40  mx-auto"
            src="https://i.ibb.co/myVCpqJ/Partner-5.png"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center w-full h-full">
          <img
            className=" w-40  mx-auto"
            src="https://i.ibb.co/mzR5X8S/Partner-6.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Sponsor;
