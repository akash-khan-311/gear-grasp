import Gellary from "../../../components/Gellary/Gellary";
import img1 from "../../../assets/Images/Gallery-1.jpg";
import img2 from "../../../assets/Images/Gallery-2.jpg";
import img3 from "../../../assets/Images/Gallery-3.jpg";

const Images = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-x-10">
        <Gellary img={img1} />
        <Gellary img={img2} />
        <Gellary img={img3} />
      </div>
    </div>
  );
};

export default Images;
