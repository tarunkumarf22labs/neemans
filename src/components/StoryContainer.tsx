// @ts-nocheck
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
  function handlecount(location: Iloaction[], ids: string) {
    let value;
    location.filter((e) => {
      if (e.id === ids) {
        value = e.count;
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
  const [productid, setProductId] = useState()
  

  useEffect(() => {
    intervalRef.current = setInterval(updateProgress, 100);
    return () => clearInterval(intervalRef.current!);
  }, [data?.id, actualTime]);

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
    setLocation((prev: Iloaction[]) => {
      let val = prev.find((prevdata: Iloaction) => prevdata.id === data.id);
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
  
   if (actualTime === data?.childstories.length - 1 && data?.stop ) {
    setCurrentTime((prevProgress) =>  {
       if (prevProgress <= 100) {
        return  prevProgress + 1 
       } 
       stopProgress()
       return 
    })
    return 
   }
    setCurrentTime((prevProgress) => {
      if (prevProgress >= 100) {
        if (actualTime === data?.childstories.length - 1) {
          stopProgress();
          setactualTime(
            handlecount(location, data.whichlidtolookinlocal!) || 0
          );
       if (!data.stop) {
        handledata(data.nextid!);
        return 0
       }
           
            
          
        }

        if (prevProgress >= 100 && actualTime !== data?.childstories.length) {
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

  const handlenext = () => {
    if (actualTime >= data?.childstories.length - 1) {
      if (data.nextid) {
        stopProgress();
        setCurrentTime(0);
        setactualTime(handlecount(location, data.whichlidtolookinlocal!) || 0);
        handledata(data.nextid!);
        return;
      }
      return;
    }
    setactualTime((prev) => prev + 1);
    setCurrentTime(0);
  };

  const handleprevious = () => {


    if (actualTime <= 0) {
      if (data.previousid) {
        console.log(data.previousid);
        
        stopProgress();
        setCurrentTime(0);
        setactualTime(handlecount(location, data.whichlidtolookinlocalback!) || 0);
        handledata(data.previousid!);
        return;
      }
      return;
    }
    setactualTime((prev) => prev - 1);
    setCurrentTime(0);
  };

  return (
    <div
      className="StoryContainer"
      onPointerDown={stopProgress}
      onPointerUp={handlePointerUp}
      onTouchMove={handleTouchMove}
    >
      <div
        className="playbar"
        style={{ gridTemplateColumns: ` repeat(${data?.childstories.length} ,1fr)  ` }}
      >
        {data?.childstories.map((child, i) => {
          return (
            <div
              style={{
                transform:
                  i == actualTime
                    ? `scaleX(${currentTime / 100})`
                    : "scaleX(0)",
                    WebkitTransform:
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
            <img src={data?.image} alt="" />
            <h5 className="StoryContainer_title">{data?.name}</h5>
          </div>
          <Cross onclose={handleoverlay} />
        </nav>

        <button onClick={handleprevious} className="stories_button">
          -
        </button>

        <button onClick={handlenext} className="stories_button">
          +
        </button>
      </header>

      {data?.childstories?.map((value, i) => {
        return (
          <main className={`  ${i === actualTime ? "StoryContainer" : "none"}`}>
            <img
              className={`  ${i < actualTime ? "none" : " data_img "} `}
              src={value?.storiescontnet}
              onClick={handleproduct}
            />
          </main>
        );
      })}
  {/*  */}

  {data?.childstories[actualTime]?.dots?.map((value, i) => {
        return (
          <div
          key={value?.id}
          className="dot"
          style={{ top : `${value.x}%` ,left : `${value.y}%` }}
          onClick={() => {
            setProductId(value?.productid)
            setisopen((prev) => !prev);
            stopProgress();
            if (isopen) {
              startProgress();
            }
          }}
        >
          <span className="span_className" />
        </div>
        );
      })}

      <div
        className={`drawer ${isopen ? "open" : ""}`}
        onClick={() => {
          setisopen((prev) => !prev);
          startProgress();
        }}
      >
        <MemoizedStoryDrawer
          isOpen={isopen}
          productid={productid || data?.childstories[actualTime]?.dots?.[0]?.productid}
        />
      </div>
    </div>
  );
}

export default StoryContainer;
