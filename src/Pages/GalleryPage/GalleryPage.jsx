import img1 from "../../assets/Images/Gallery-1.jpg";

import img3 from "../../assets/Images/Gallery-3.jpg";
import img4 from "../../assets/Images/Gallery-4.jpg";
import img5 from "../../assets/Images/Gallery-5.jpg";
import img6 from "../../assets/Images/Gallery-6.jpg";
import img7 from "../../assets/Images/Gallery-7.jpg";
import img8 from "../../assets/Images/Gallery-8.jpg";
import Gellary from "../../components/Gellary/Gellary";
import PageTitle from "../../components/PageTitle/PageTitle";
const GalleryPage = () => {
  return (
    <div>
      <div>
        <PageTitle title={"gallery"} />
      </div>
      <div className="container mx-auto px-5 lg:px-0 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="col-span-2">
            <Gellary img={img1} />
          </div>
          <div className="">
            <Gellary img={img4} />
          </div>
          <div>
            <Gellary img={img5} />
          </div>
          <div>
            <Gellary img={img6} />
          </div>
          <div>
            <Gellary img={img7} />
          </div>
          <div className="">
            <Gellary img={img8} />
          </div>
          <div className="col-span-2">
            <Gellary img={img3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
