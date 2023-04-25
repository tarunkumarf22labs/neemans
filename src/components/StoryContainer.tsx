import { useEffect, useRef, useState } from "uelements";
import { Bag, Cross } from "../assets/Icons";
import { Ival } from "../types";
import { MemoizedStoryDrawer } from "./StoryDrawer";
import { StateUpdater } from "preact/hooks";
import { JSXInternal } from "preact/src/jsx";

interface IStoryContainerProps {
  data: Ival;
  handleoverlay: () => void;
  handledata: (data: number) => void;
  setshow: StateUpdater<boolean>;
}

function StoryContainer({
  data,
  handleoverlay,
  handledata,
  setshow,
}: IStoryContainerProps) {
  const [isopen, setisopen] = useState(false);
  const [currentTime, setCurrentTime] = useState(() => 0);
  const intervalRef = useRef<null | number>(null);
  const [actualTime, setactualTime] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(updateProgress, 100);
    return () => clearInterval(intervalRef.current!);
  }, [data.id, actualTime]);

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
        if (actualTime === data.count - 1) {
          stopProgress();
          setCurrentTime(0);
          console.log("stop");
          return;
        }

        if (prevProgress >= 100 && actualTime !== data.count) {
          stopProgress();
          setCurrentTime(0);
          setactualTime((prev) => prev + 1);
          return 0;
        } else {
          stopProgress();
          setactualTime(actualTime + 1);
          setCurrentTime(100);
          return 100;
        }
        // handledata(data.nextid!);
      }
      return prevProgress + 1;
    });
  };

  function handleTouchMove(
    event: JSXInternal.TargetedTouchEvent<HTMLDivElement>
  ) {
    const touch = event.touches[0];
    const targetRect = (touch.target as Element).getBoundingClientRect();
    const distance = touch.clientY - targetRect.top;

    if (distance > 360) setshow(false);
  }

    function handlePointerUp() {
      if (!isopen) {
        startProgress()
      }
    }

  return (
    <div
      className="StoryContainer"
      onPointerDown={stopProgress}
      onPointerUp={handlePointerUp}
      onTouchMove={handleTouchMove}
    >
      <div
        className="playbar"
        style={{ gridTemplateColumns: ` repeat(${data.count} ,1fr)` }}
      >
        {data?.childstories.map((child, i) => {
          return (
            <div
              style={{
                transform:
                  i == actualTime
                    ? `scaleX(${currentTime / 100})`
                    : "scaleX(0)",
              }}
              className={`playbarinline  ${i < actualTime ? "contain" : ""} `}
            ></div>
          );
        })}
     
      </div>

      <header className="main_StoryContainer_header">
        <nav className="StoryContainer_nav">
          <div className="StoryContainer_titlebar">
            <img src={data.image} alt="" />
            <h6 className="StoryContainer_title">{data.name}</h6>
          </div>
          <Cross onclose={handleoverlay} />
        </nav>


        <button
          onClick={() => {
            setactualTime((prev) => prev + 1);
            setCurrentTime(0);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setactualTime((prev) => prev - 1);
            setCurrentTime(0);
          }}
        >
          -
        </button>
      </header>

      {data?.childstories?.map((value, i) => {
        return (
          <main className={`  ${i === actualTime ? "StoryContainer" : "none"}`}>
            <img
              className={`  ${i < actualTime ? "none" : " data_img "} `}
              src={value.storiescontnet}
              onClick={handleproduct}
            />
          </main>
        );
      })}

      <div
        className="dot"
        onClick={() => {
          setisopen((prev) => !prev);
          stopProgress();
        }}
      >
        <span className="span_className" />
      </div>
      <MemoizedStoryDrawer
        isOpen={isopen}
        productid={data.childstories[actualTime]?.productid}
      />
    </div>
  );
}

export default StoryContainer;
