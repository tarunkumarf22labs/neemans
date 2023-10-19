import { useEffect, useRef, useState } from "uelements";
import { SmallComponentprops } from "../../types";
import { Playbutton } from "../../assets";
import { useDragnDrop } from "../../hook/useDragnDrop";

function SmallComponent({
  video,
  handlePopup,  
}: SmallComponentprops) {
  const [prevPos, setPrevPos] = useState({ x: 0, y: 0 });
  const { containerRef } = useDragnDrop()

  

  


  return (
    <>
      <>
        <div className={`drag-small-video-container-box`}
         ref={containerRef} 
         style={{position: 'fixed' ,touchAction : 'none'}}
        >
          <div className={"drag-smvideo-container"} data-customattribute={"red"}>
            <video
              id="drag-videos"
              src={video}
              autoPlay
              muted
              loop
              onMouseUp={(e) => {
                prevPos.x === e.pageX && handlePopup(e)
              }}
              onMouseDown={(e) => {
                setPrevPos({x: e.pageX, y: e.pageY})
              }}
              playsInline
              // ref={videoref}
              style={{objectFit: 'cover'}}
            />
          </div>

          <div className="drag-buttonDiv">
            <button onClick={handlePopup} className='drag-buttonStyle'>
              <Playbutton />
            </button>
          </div>
        </div>
      </>
    </>
  );
}

export default SmallComponent;
