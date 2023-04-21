import { useState } from "uelements";
import { Bag, Cross } from "../assets/Icons";
import { Ival } from "../types";
import StoryDrawer from "./StoryDrawer";

interface IStoryContainerProps {
  data: Ival;
  handleoverlay: () => void;
}


function StoryContainer({ data, handleoverlay }: IStoryContainerProps) {
    const [isopen, setisopen] = useState(false)

  function handleproduct() {
    if(isopen){
        setisopen((prev)  => !prev )
    }
    
  }

  return (
    <div className="StoryContainer">
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
        <img className="data_img" src={data.largeimg}  onClick={handleproduct} />
      </main>
      <div className="dot" onClick={() => { setisopen((prev) => !prev ) } } >
        <span className="span_className" />
        {/* <Bag/>  <span className="money">$1000</span> */}
      </div>
      <StoryDrawer  isOpen={isopen} productid= {data.productid} />
    </div>
  );
}

export default StoryContainer;
