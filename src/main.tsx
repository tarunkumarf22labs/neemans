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
      // setTimeout(async () => {
        // const data = await fetch("https://api.jsonbin.io/v3/b/644b7f5e9d312622a353b0e6");
        // const value = await data.json();
        // value.record.forEach((element : any ) => {
          const mainelementsofstories = document.querySelector(`#f22-storiesplugin1`);
          if (mainelementsofstories) {
            let el = document.createElement("f22-stories");
            el.setAttribute("dataUrl", "https://s3.f22labs.cloud/storiespluginassets/ps.json");
            mainelementsofstories.appendChild(el);
          }
        // });
      // }, 2000);
    };
  } catch (error) {
    console.error(error);
  }
}

handlevalue();
