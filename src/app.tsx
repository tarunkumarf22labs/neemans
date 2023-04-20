
import { useEffect, useState } from "uelements";
import { nanoid } from "nanoid";
import nemmas1 from "./assets/neemans1.png";
import nemmas2 from "./assets/neemans2.png";
import nemmas3 from "./assets/neemans3.png";
import nemmas4 from "./assets/neemans4.png";
import nemmas5 from "./assets/neemans5.png";
import nemmas6 from "./assets/neemans6.png";
import nemmas7 from "./assets/neemans7.jpg";

import "./app.css";
import Ampstory from "./components/Ampstory";

interface Ival {
  id: string,
  image: string,
  largeimg : string,
  name: string,
}
export default function App({ dataURL }: { dataURL: string }) {
  const [show, setshow] = useState(false)
  const [data, setData] = useState<null | Ival >(null)
   function handledata(val : Ival  ) {
    setData(val)
    setshow((prev)  => !prev)
   }
  console.log(show);
  
  const headerImages = [
    {
      id: nanoid(),
      image: nemmas1,
      largeimg : nemmas6,
      name: "Relive Knit S...",
    },
    {
      id: nanoid(),
      image: nemmas2,
      largeimg : nemmas7,
      name: "Urban Casuals",
    },
    {
      id: nanoid(),
      image: nemmas3,
      largeimg : nemmas6,
      name: "Cotton Clas...",
    },
    {
      id: nanoid(),
      image: nemmas4,
      name: "Fluffy Flips",
      largeimg : nemmas7,
    },
    {
      id: nanoid(),
      image: nemmas4,
      name: "Fluffy Flips",
      largeimg : nemmas6,
    },
    {
      id: nanoid(),
      image: nemmas4,
      largeimg : nemmas7,
      name: "Fluffy Flips",
    },   {
      id: nanoid(),
      image: nemmas4,
      largeimg : nemmas6,
      name: "Fluffy Flips",
    },   {
      id: nanoid(),
      image: nemmas4,
      largeimg : nemmas7,
      name: "Fluffy Flips",
    },   {
      id: nanoid(),
      image: nemmas4,
      largeimg : nemmas6,
      name: "Fluffy Flips",
    },   {
      id: nanoid(),
      image: nemmas4,
      largeimg : nemmas7,
      name: "Fluffy Flips",
    }
  ];

  if (show) {
   return <Ampstory  data = {data} setshow= {setshow} />
  }


  return (
    <>

 
    <div style={{ display : 'flex' , borderBottom : "1px solid rgba(0,0,0,0.1)" , padding : '10px' }}  className="styles" >  
      {headerImages.map((items) => {
        return (
          <div onClick={() =>  handledata(items) } className="f22__stories" key={items.id}>
            <img src={items.image} />
            <h6>{items.name}</h6>
          </div>
        );
      })}
      </div>
    </>
  );
}
