import MyBtn from "../../../components/MyBtn/MyBtn";
import SocialButton from "../../../components/SocialButton/SocialButton";
import Subtitle from "../../../components/SubTitle/Subtitle";
import Navbar from "../Navbar/Navbar";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner px-5 lg:px-0  w-full ">
      <Navbar />
      <div className="py-20 md:py-28 lg:py-36">
        <div className="container mx-auto  ">
          <div className="w-full md:w-4/6">
            <Subtitle text={"urban moto artisans"} />
            <div className="py-5">
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className="banner-heading "
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">
                  FUELLED BY <br /> FREEDOM
                </h1>
              </div>
              <p className="text-white text-sm md:text-lg my-5">
                Unleash the power of precision automotive care with expertise
                that fuels your journey. Drive with confidence, fueled by our
                commitment to excellence.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <MyBtn label={`let's customize now`} />
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              className="mt-10 md:mt-0"
            >
              <SocialButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
