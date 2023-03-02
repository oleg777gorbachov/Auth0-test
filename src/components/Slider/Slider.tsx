import { ReactNode, useState } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import "./Slider.css";

interface SliderI {
  children: ReactNode;
  items: number;
}

function Slider({ children, items }: SliderI) {
  const [counter, setCounter] = useState(0);

  const leftAction = () => {
    if (counter - 1 < 0) {
      setCounter(items - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  const rightAction = () => {
    if (counter + 1 > items - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  return (
    <div className="slider">
      <AiFillLeftCircle className="slider-left" onClick={leftAction} />
      <div
        className="slider-items"
        style={{
          width: `${items}00%`,
          transform: `translate(-${(100 / items) * counter}%)`,
        }}
      >
        {children}
      </div>
      <AiFillRightCircle className="slider-right" onClick={rightAction} />
    </div>
  );
}

export default Slider;
