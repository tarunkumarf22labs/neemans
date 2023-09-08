//
import { define } from "uelements";
import App from "./app";

define(
  "f22-stories",
  (el) => <App dataURL={el.getAttribute("dataURL") || ""} />,
  ["dataURL"],
  () => console.log("F22 Plugin cleanup")
); 
  
 

function handlevalue() {
  try {
    window.onload = async () => {
  
        // value.record.forEach((element : any ) => {
          const mainelementsofstories = document.querySelector(`#f22-storiesplugin1`);
          if (mainelementsofstories) {
            let el = document.createElement("f22-stories");
            el.setAttribute("dataUrl", "https://s3.f22labs.cloud/shopclips/shilpashastrastudio.json");
            mainelementsofstories.appendChild(el);
          }
    };
  } catch (error) {
    console.error(error);
  }
}

handlevalue();
