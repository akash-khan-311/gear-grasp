import "./Footer.css";
import logo from "../../assets/Images/logo.png";
import SocialButton from "../../components/SocialButton/SocialButton";

const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="container mx-auto px-5 lg:px-0 ">
        <div className="py-44">
          <div className="text-white space-y-5 flex flex-col justify-center mx-auto items-center">
            <img className=" h-40 mx-auto" src={logo} alt="" />
            <p className="text-center w-full lg:w-1/2 mx-auto">
              Unleash the thrill of the ride with GearGrasp. Your ultimate
              destination for gear enthusiasts, bringing you the latest trends,
              reviews, and tips on all things gears and beyond.
            </p>
            <SocialButton />
          </div>
        </div>
        <hr />
        <div className="flex justify-center py-8">
          <p className="text-white">
            Copiright &copy; {new Date().getFullYear()} GearGrasp. All rights
            reserved build By{" "}
            <a
              href="https://www.facebook.com/iyaRahmanirRahim"
              rel={"noreferrer"}
              target="_blank"
            >
              Akash Khan
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
