import { PhotoProvider, PhotoView } from "react-photo-view";
import img1 from "../../assets/Images/Gallery-1.jpg";
import img2 from "../../assets/Images/Gallery-2.jpg";
import img3 from "../../assets/Images/Gallery-3.jpg";

const Gellary = () => {
  return (
    <div className="py-20">
      <PhotoProvider>
        <div className="flex justify-between items-center gap-10">
          <div className="foo">
            <PhotoView src={img1}>
              <img src={img1} alt="" />
            </PhotoView>
          </div>
          <div className="foo">
            <PhotoView src={img2}>
              <img src={img2} alt="" />
            </PhotoView>
          </div>
          <div className="foo">
            <PhotoView src={img3}>
              <img src={img3} alt="" />
            </PhotoView>
          </div>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default Gellary;
