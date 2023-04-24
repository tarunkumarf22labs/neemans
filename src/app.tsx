import {  useCallback, useState } from "uelements";
import { headerImages } from "./data";
import StoryContainer from "./components/StoryContainer";
import { Ival } from "./types";
import "./app.css";
import Story from "./components/Story";

export default function App({ dataURL }: { dataURL: string }) {
  const [show, setshow] = useState(false)
  const [data, setData] = useState<null | Ival >(null)

  function handleoverlay() {
    setshow((prev)  => !prev)
   }

   const  memoizedhandleoverlay = useCallback((items : Ival ) => {
    setData(items)
    handleoverlay()
   } , [])

 const handledata = (itemid : number) => {
 let data =  headerImages.find((image) => {
   return image.productid === itemid
  } )
    setData(data!) 

 }

  return (
    <>
    <div style={{ display : 'flex' , borderBottom : "1px solid rgba(0,0,0,0.1)" , padding : '10px' }}  className="styles" >  
      {headerImages.map((items) => {
        return (
           <Story items={items} memoizedhandleoverlay={memoizedhandleoverlay} key={items.id}  />
        );
      })}
      </div>

      { show ? <StoryContainer data={data!} handleoverlay={handleoverlay}  handledata = {handledata}  setshow = {setshow}  /> : "" }
      
    </>
  );
}
