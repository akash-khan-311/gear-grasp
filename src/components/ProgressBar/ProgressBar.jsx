/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { useSpring, animated } from "react-spring";
import ProgressProvider from "./ProgressProvider";
import { useInView } from "react-intersection-observer";

const AnimatedCircularProgress = animated(CircularProgressbarWithChildren);

const ProgressBar = ({ percentage, title }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setShouldAnimate(true);
    }
  }, [inView]);

  const animationProps = useSpring({
    value: shouldAnimate ? percentage : 0,
    from: { value: 0 },
    config: { duration: 1000 },
  });

  return (
    <div ref={ref}>
      <div className="w-44 h-44 mt-10">
        <ProgressProvider valueStart={0} valueEnd={percentage}>
          {(value) => (
            <AnimatedCircularProgress
              value={animationProps.value}
              styles={buildStyles({
                rotation: 0.0,
                strokeLinecap: "butt",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathColor: `#009EFF`,
                textColor: "#f88",
                trailColor: "",
                backgroundColor: "#3e98c7",
              })}
            >
              <div style={{ fontSize: 12, marginTop: -5 }}>
                <span className="text-lg">{Math.round(value)}%</span>
              </div>

              <h3 className="text-lg uppercase">{title}</h3>
            </AnimatedCircularProgress>
          )}
        </ProgressProvider>
      </div>
    </div>
  );
};

export default ProgressBar;
