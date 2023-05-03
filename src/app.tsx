// @ts-nocheck
import { useCallback, useEffect, useState } from "uelements";
import StoryContainer from "./components/StoryContainer";
import Story from "./components/Story";
import "./app.css";
import { Ival } from "./types";

export default function App({ dataURL }: { dataURL: string }) {
  const [show, setshow] = useState(false);
  const [data, setData] = useState<null | Ival>(null);
  const [jsondata, setJsondata] = useState<[] | Ival[]>([]);
  const [next, setNext] = useState(0);
  useEffect(() => {
    async function handledata() {
      let data = await fetch(dataURL);
      let dataval = await data.json();
      setJsondata(dataval.record);
    }
    handledata();
  }, []);

  function handleoverlay() {
    setshow((prev) => !prev);
  }

  const memoizedhandleoverlay = useCallback((items: Ival) => {
    setData(items);
    handleoverlay();
  }, []);

  const handledata = (type: string) => {
     console.log(type);
     
    let data = jsondata.find((data , i) => {
            if (type === "plus") {
              return i === next + 1 
            }
            else if(type === "minus"){
               if (next === 0) {
                   return 
               }
              return  i === next - 1 ;
            }  
    });
    setData(data!);
  };



  return (
    <>
      <div className="f22storiesstyles">
        {jsondata?.map((items , i) => {
          return (
            <Story
              items={items}
              memoizedhandleoverlay={memoizedhandleoverlay}
              key={items.id}
              onClick = {() => setNext(i) }
            />
          );
        })}
      </div>

      {show ? (
        <StoryContainer
          data={data!}
          handleoverlay={handleoverlay}
          handledata={handledata}
          setshow={setshow}
          setNext={setNext}
          next = {next}
          jsondata = {jsondata}
        />
      ) : (
        ""
      )}
    </>
  );
}
