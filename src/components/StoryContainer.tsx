import { useEffect, useRef, useState } from "uelements";
import { Bag, Cross } from "../assets/Icons";
import { Iloaction, Ival } from "../types";
import { MemoizedStoryDrawer } from "./StoryDrawer";
import { StateUpdater } from "preact/hooks";
import { JSXInternal } from "preact/src/jsx";
import { useLocalStorage } from "../hook/useLocalStorage";

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
  function handlecount(location  : Iloaction[] , ids :string  ) {
    console.log(location, ids);
    let  value 
    let opi = location.filter((e) => {
      if (e.id === ids) {
         value = e.count
        return e;
      }
    });
    return value;
  }

  const [isopen, setisopen] = useState(false);
  const [currentTime, setCurrentTime] = useState(() => 0);
  const intervalRef = useRef<null | number>(null);
  const [location, setLocation] = useLocalStorage("whentostart", []);
  const [actualTime, setactualTime] = useState(
    () => handlecount(location, data.id) || 0
  );
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
    setLocation((prev : Iloaction[] ) => {
      let val = prev.find((prevdata : Iloaction ) => prevdata.id === data.id);
      console.log("Sahiprev", val);
      if (!val) {
        return [...prev, { id: data.id, count: actualTime }];
      }
      if (val) {
        let arr = prev.filter((o) => o.id !== data.id);
        return [...arr, { id: data.id, count: actualTime }];
      }
      return prev;
    });
    clearInterval(intervalRef.current!);
  };

  const updateProgress = () => {
    setCurrentTime((prevProgress) => {
      if (prevProgress >= 100) {
        if (actualTime === data.count - 1) {
          stopProgress();
          setCurrentTime(0);
          setactualTime(0);
          handledata(data.nextid!);
          return 0;
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
      startProgress();
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
        style={{ gridTemplateColumns: ` repeat(${data?.count} ,1fr)  ` }}
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
            setisopen(false);
            setactualTime((prev) => prev - 1);
            // startProgress()
            setCurrentTime(0);
          }}
          className="stories_button"
        >
          -
        </button>

        <button
          onClick={() => {
            setisopen(false);
            setactualTime((prev) => prev + 1);
            // startProgress()
            setCurrentTime(0);
          }}
          className="stories_button"
        >
          +
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
          if (isopen) {
            startProgress();
          }
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
