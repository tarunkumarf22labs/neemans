import { useCallback, useEffect, useState } from "uelements";
import StoryContainer from "./components/StoryContainer";
import { Ival } from "./types";
import "./app.css";
import Story from "./components/Story";

export default function App({ dataURL }: { dataURL: string }) {
  const [show, setshow] = useState(false);
  const [data, setData] = useState<null | Ival>(null);
  const [jsondata, setJsondata] = useState<[] | Ival[]>([]);

  useEffect(() => {
    async function handledata() {
      let data = await fetch(dataURL);
      let dataval = await data.json();
      setJsondata(dataval);
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

  const handledata = (itemid: number) => {
    let data = jsondata.find((image) => {
      return image.productid === itemid;
    });
    setData(data!);
  };

  return (
    <>
      <div className="f22storiesstyles">
        {jsondata?.map((items) => {
          return (
            <Story
              items={items}
              memoizedhandleoverlay={memoizedhandleoverlay}
              key={items.id}
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
        />
      ) : (
        ""
      )}
    </>
  );
}
