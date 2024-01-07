import { useState } from "react";
import "./Video.css";
import { IoIosPlay } from "react-icons/io";
import ModalVideo from "react-modal-video";

import Countup from "../../components/Countup/Countup";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="video-bg relative bg-gradient  my-10 px-5 py-20 lg:px-0 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Video button */}
          <div className="flex items-center justify-center gap-x-3 w-1/2">
            <button
              onClick={() => setIsOpen(true)}
              className="border border-blue-700 p-3 rounded-full text-8xl"
            >
              <IoIosPlay className="" />
            </button>
            <h1 className="uppercase text-4xl md:text-5xl lg:text-6xl font-semibold">
              Play <br />
              <span className="text-gradient">video</span>
              <>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="W7e-1XAAnPk"
                  onClose={() => setIsOpen(false)}
                />
              </>
            </h1>
          </div>
          {/* Video content */}
          <div className="w-full  md:w-1/2 mt-10 md:mt-0 ">
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row justify-around gap-10">
                <Countup count={10} text={"YEARS EXPERIENCE"} subText={"+"} />
                <Countup count={35} text={"MECHANIC & BUILDER"} subText={"+"} />
              </div>
              <div className="flex flex-col md:flex-row justify-around space-y-10 md:space-y-0 ">
                <Countup count={1250} text={"Project done"} subText={"+"} />
                <Countup count={70} text={"win awards"} subText={"+"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
