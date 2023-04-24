import { useEffect, useRef, useState } from "uelements";
import { Bag, Cross } from "../assets/Icons";
import { Ival } from "../types";
import StoryDrawer from "./StoryDrawer";
import { StateUpdater } from "preact/hooks";
import { JSXInternal } from "preact/src/jsx";

interface IStoryContainerProps {
  data: Ival;
  handleoverlay: () => void;
  handledata : ( data : number ) => void
  setshow :  StateUpdater<boolean>
}

function StoryContainer({ data, handleoverlay , handledata , setshow }: IStoryContainerProps) {
  const [isopen, setisopen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const intervalRef = useRef<null | number>(null);

  
  useEffect(() => {
    intervalRef.current = setInterval(updateProgress, 100);
    return () => clearInterval(intervalRef.current!);
  }, [data.id]);

  const handleproduct = () => {
    if (isopen) {
      setisopen((prev) => !prev);
      startProgress();
    }
  };

  const startProgress = () => {
    intervalRef.current = setInterval(updateProgress, 100);
  };
  const stopProgress = () => {
    clearInterval(intervalRef.current!);
  };

  const updateProgress = () => {
    setCurrentTime((prevProgress) => {
      if (prevProgress >= 100) {
        stopProgress();
        console.log(data.nextid);
        handledata(data.nextid!)
        return 0;
      }
      return prevProgress + 1;
    });
  };

  function handleTouchMove(event : JSXInternal.TargetedTouchEvent<HTMLDivElement> ) {
    const touch = event.touches[0];
    const targetRect =  (touch.target as Element).getBoundingClientRect();
    const distance = touch.clientY - targetRect.top;
    
    
    
    if (distance > 360 ) setshow(false)
    
  }

  return (
    <div
      className="StoryContainer"
      onPointerDown={stopProgress}
      onPointerUp={startProgress}
      onTouchMove={handleTouchMove}>
    
      <div className="playbar">
        <div
          className="playbarinline"
          style={{ transform: `scaleX(${currentTime / 100})` }}
        ></div>
      </div>

      <header className="main_StoryContainer_header">
        <nav className="StoryContainer_nav">
          <div className="StoryContainer_titlebar">
            <img src={data.image} alt="" />
            <h6 className="StoryContainer_title">{data.name}</h6>
          </div>
          <Cross onclose={handleoverlay} />
        </nav>
      </header>
      <main className="StoryContainer">
        <img className="data_img" src={data.largeimg} onClick={handleproduct} />
      </main>
      <div
        className="dot"
        onClick={() => {
          setisopen((prev) => !prev);
          stopProgress();
        }}
      >
        <span className="span_className" />
      </div>
      <StoryDrawer isOpen={isopen} productid={data.productid} />
    </div>
  );
}

export default StoryContainer;
