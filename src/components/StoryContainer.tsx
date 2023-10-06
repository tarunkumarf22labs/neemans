// @ts-nocheck
import { useEffect, useRef, useState } from "uelements";
import { Bag, Cross } from "../assets/Icons";
import { Iloaction, Ival } from "../types";
import { MemoizedStoryDrawer } from "./StoryDrawer";
import { StateUpdater } from "preact/hooks";
import { JSXInternal } from "preact/src/jsx";
import { useLocalStorage } from "../hook/useLocalStorage";
import ProductCard from "./ProductCard";
import Spinner from "./Loader/Spinner";
interface IStoryContainerProps {
  data: Ival;
  handleoverlay: () => void;
  handledata: (data: number) => void;
  setshow: StateUpdater<boolean>;
  setNext: StateUpdater<number>;
  handler: () => void;
  dotclickedtoupdate: () => void;
  fetchUsers: fetchUsers;
}
function StoryContainer({
  data,
  handleoverlay,
  handledata,
  setshow,
  setNext,
  jsondata,
  next,
  handler,
  dotclickedtoupdate,
  creationparentdata,
  fetchUsers,
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(() => 0);
  const intervalRef = useRef<null | number>(null);
  const [location, setLocation] = useLocalStorage("whentostart", []);
  const [actualTime, setactualTime] = useState(0);
  const [duration, setDuration] = useState(0)
  const [productid, setProductId] = useState();
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const [loaded, setLoaded] = useState(false);
 console.log(loaded , "loaded");
 
  useEffect(() => {
    const currentObject = data?.childstories?.[actualTime];
    console.log(currentObject , "currentObjectbini");
    
  if  (currentObject?.storiescontnet?.includes("jpg")) {
    if (loaded) {
      intervalRef.current = setInterval(updateProgress, 100);
    }
  
  } 
   if (currentObject?.storiescontnet?.includes("mp4")) {
    if (loaded) {
      videoRef.current?.addEventListener("timeupdate"  ,handleTimeUpdate)
    }    
   }    
    return () => {
      clearInterval(intervalRef.current!);
      videoRef.current!?.removeEventListener("timeupdate", handleTimeUpdate);  
    };
  }, [data?.id, actualTime , duration , loaded]);
 
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
    creationparentdata(data.name);
    if (actualTime === data?.childstories.length - 1 && data?.stop) {
      setCurrentTime((prevProgress) => {
        if (prevProgress <= 100) {
          return prevProgress + 1;
        }
        stopProgress();
        return;
      });
      return;
    }
    setCurrentTime((prevProgress) => {
      if (prevProgress >= 100) {
        if (actualTime === data?.childstories.length - 1) {
          stopProgress();
          if (!data.stop) {
            handledata("plus");
            setNext((prev) => prev + 1);
            setLoaded(true);
            if (jsondata.length === next + 2) {
              setactualTime(handlecount(location, data.id + 1) || 0);
              return 0;
            }
            setactualTime(handlecount(location, data.id + 1) || 0);
            return 0;
          }
        } 
        if (prevProgress >= 100 && actualTime !== data?.childstories.length) {
          stopProgress();
          setCurrentTime(0);
          setactualTime((prev) => prev + 1);
          setLoaded(false);
          return 0;
        } else {
          stopProgress();
          setactualTime(actualTime + 1);
          setCurrentTime(100);
              setLoaded(false);
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
    if (distance > 360) {
      setshow(false);
      fetchUsers();
    }
  }
  function handlePointerUp() {
    if (!isopen) {
      startProgress();
              videoRef.current.play();
    }
  }
  const handlenext = () => {
    if (actualTime >= data?.childstories.length - 1) {
      if (jsondata.length > next + 1) {
        stopProgress();
        setCurrentTime(0);
        setactualTime(0);
        // handler(data?.childstories[actualTime], data);
        handledata("plus");
        setNext((prev) => prev + 1);
        setDuration(0);
        return;
      }
      return;
    }
    setactualTime((prev) => prev + 1);
    setLoaded(false)
    // handler(data?.childstories[actualTime + 1], data);
    setDuration(0);
    setCurrentTime(0);
  
  };
  const handleprevious = () => {
    if (actualTime <= 0) {
      if (next > 0) {
        stopProgress();
        setCurrentTime(0);
        setactualTime(handlecount(location, next!) || 0);
        handledata("minus");
        setDuration(0);
        setNext((prev) => prev - 1);
        return;
      }
      return;
    }
    setactualTime((prev) => prev - 1);
    setLoaded(false);
    setDuration(0);
    setCurrentTime(0);
  };
  function handleChangeVideo(newVideoSrc) {
    // Pause the currently playing video
    if (videoRef.current) {
      videoRef.current.pause();
    }
    // Set the new video source
    videoRef.current.src = newVideoSrc;
    clearInterval(intervalRef.current!);
    // Load and play the new video
    videoRef.current.load();
    videoRef.current.play();
  }
  const handleLoadedMetadata = () => {
    const video = videoRef.current!;
    if (!video) return 
    setDuration(video.duration)
    // dispatch({ type : 'SETVIDEOLENGTH' , payload :  })
  };
    const handleTimeUpdate = (event) => {  
    const progress = (videoRef.current?.currentTime / videoRef.current?.duration) * 100;
       if (progress) {
        setCurrentTime(progress);
       }
    
    if ( videoRef.current?.currentTime >= videoRef.current?.duration) {
      intervalRef.current = setInterval(updateProgress, 100);
      handlenext()
      if (!data?.stop) {
        setLoaded(false);
      }
      // console.log("Sajno");
      
  
     
      startProgress()
    }
  };
  const imageLoaded = () => {
    // if (!data?.stop) {
      setLoaded(true);
    // }
  }
  const renderMedia = () => {
    // console.log(data?.childstories);
    
    const currentObject = data?.childstories[actualTime];
    //  console.log(currentObject?.storiescontnet?.includes("mp4") , "Sahi" , currentObject[0] , currentObject);
      // console.log(data?.childstories , data?.childstories?.[currentTime] , "data?.childstories[currentTime];" , currentTime);
      
    if (currentObject?.storiescontnet?.includes("jpg")) {
      setIsVideo(false);
      return (
        <div className="image-container" >
          <img src={currentObject?.storiescontnet} alt="Story" 
                          style={{ pointerEvents: "none" }}
                          loading="eager" 
                          onLoad={imageLoaded}
                className={" data_img "}          
          />
          {/* <div ref={durationBarRef} className="duration-bar"></div> */}
        </div>
      );
    } else if (currentObject?.storiescontnet?.includes("mp4")) {
      setIsVideo(true);
      return (
        <div className="video-container">
          <video ref={videoRef}
            onLoadedMetadata={handleLoadedMetadata}
            src={currentObject?.storiescontnet}
            alt="Story"
            autoPlay
            playsInline
            onLoadedData={imageLoaded}
            onEnded={() => {
              console.log("sahi");
              
            } }
            // onEnded={nextObject}
          />
          {/* <div ref={durationBarRef} className="duration-bar"></div> */}
        </div>
      );
    }
  };
  
  // console.log("Story -> ", data?.childstories[actualTime].dots[0].id);
  return (
    <div
      className="StoryContainer"
      // onPointerDown={() => {
      //   stopProgress();
      //   videoRef.current.pause();
      // }}
      // onPointerUp={() => {
      //   handlePointerUp();
      // }}
      // onTouchMove={handleTouchMove}
    >
      <div
        className="playbar"
        style={{
          gridTemplateColumns: ` repeat(${data?.childstories.length} ,1fr)  `,
        }}
      >
             {data?.childstories.map((child, i) => {
          return (
            <div className="playbarinline__wrapper">
              <div
                style={{
                  display: "block !important",
                  transform:
                    i == actualTime
                      ? `scaleX(${ Math.floor(currentTime) / 100})`
                      : "scaleX(0)",
                  WebkitTransform:
                    i == actualTime
                      ? `scaleX(${Math.floor(currentTime) / 100})`
                      : "scaleX(0)",
                }}
                className={`playbarinline  ${i < actualTime ? "contain" : ""} `}
              ></div>
              <div className="playbarinline__background"></div>
            </div>
          );
        })}
      </div>
      <header className="main_StoryContainer_header">
        <nav className="StoryContainer_nav">
          <div className="StoryContainer_titlebar">
            <img src={data?.image} alt="" loading="eager"/>
            <h5 className="StoryContainer_title">{data?.name}</h5>
          </div>
          <div className="story-container-nav-actions">
            
            
            {isVideo && ( isMuted ? (<div class="story-container-nav-actions-background"><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mute-icon"
              onClick={() => {
                setIsMuted(false);
                if(videoRef.current)
                  videoRef.current.muted = false;
              }}
            >
              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
            </svg></div>):(<div class="story-container-nav-actions-background"><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mute-icon"
              onClick={() => {
                setIsMuted(true);
                if(videoRef.current)
                  videoRef.current.muted = true;
              }}
            >
              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
              <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
            </svg></div>) )}
            
            <div class="story-container-nav-actions-background"><Cross onclose={handleoverlay} fetchUsers={fetchUsers} /></div>
          </div>
        </nav>
        <button onClick={handleprevious} className="stories_button">
          -
        </button>
        <button onClick={handlenext} className="stories_button">
          +
        </button>
      </header>
      <div id="story-overlay"></div>
      
      {/* {data?.childstories?.map((value, i) => {
        // return (
        //   <main className={`${i === actualTime ? "StoryContainer" : "none"}`}>
        //     {value?.storiescontnet.split(".")[
        //       value?.storiescontnet.split(".").length - 1
        //     ] === "mp4" ? (
        //       <video
        //         ref={videoRef}
        //         onLoadedMetadata={handleLoadedMetadata}
        //         autoPlay
        //         loop
        //         src={value?.storiescontnet}
        //         playsInline
        //         muted={true}
        //       />
        //     ) : (
        //       <img
        //         style={{ pointerEvents: "none" }}
        //         className={`  ${i < actualTime ? "none" : " data_img "} `}
        //         src={value?.storiescontnet}
        //         // onClick={handleproduct}
        //       />
        //     )}
        //   </main>
        // );
      })} */}
      
       <main className= {"StoryContainer"} >
       {!loaded && (
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                left: 0,
                top: 0,
                background: "rgba(0, 0, 0, 0.9)",
                zIndex: 9,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#ccc",
              }}
            >
              { <Spinner />}
            </div>
          )}
       {renderMedia()}
       </main>
      <div
        className="product-cards-container"
        onClick={() =>{
        } }
        style={{
          justifyContent: `${
            data?.childstories[actualTime]?.dots?.length > 1
              ? "flex-end"
              : "center"
          }`,
        }}
      >
        <div className="product-cards">
          {data?.childstories[actualTime]?.dots?.map((prod) => (
            <ProductCard
              key={prod.id}
              productname={prod.productname}
              stopProgress={stopProgress}
              startProgress={startProgress}
              isOpen={isopen}
              setIsOpen={setisopen}
              videoRef={videoRef}
              triggers={{
                setProductId,
                dotclickedtoupdate,
                productid,
                data,
                actualTime,
              }}
            />
          ))}
        </div>
      </div>
      <div
        className={`f22storiesdrawer ${isopen ? "f22open" : ""}`}
        onClick={() => {
          setisopen((prev) => !prev);
          startProgress();
          videoRef.current.play();
          setIsSizeOpen(false);
        }}
      >
        <MemoizedStoryDrawer
          isOpen={isopen}
          setIsOpen={setisopen}
          isSizeOpen={isSizeOpen}
          setIsSizeOpen={setIsSizeOpen}
          startProgress={startProgress}
          videoRef={videoRef}
          productname={
            productid || data?.childstories[actualTime]?.dots?.[0]?.productname
          }
        />
      </div>
    </div>
  );
}
export default StoryContainer;
