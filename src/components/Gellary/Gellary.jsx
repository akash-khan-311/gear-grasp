/* eslint-disable react/prop-types */
import { PhotoProvider, PhotoView } from "react-photo-view";

const Gellary = ({ img }) => {
  return (
    <div className="container mx-auto px-5 lg:px-0  w-full h-full">
      <PhotoProvider>
        <div className="foo w-full h-full">
          <PhotoView src={img}>
            <img src={img} className="w-full h-full" alt="" />
          </PhotoView>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default Gellary;
