//
import { define } from "uelements";
import App from "./app";
import AppDrag from "./components/AppDrag"
define(
  "f22-stories",
  (el) => <App dataURL={el.getAttribute("dataURL") || ""} />,
  ["dataURL"],
  () => console.log("F22 Plugin cleanup")
); 
  

define(
  "f22-stori",
  (el) => <AppDrag dataURL={el.getAttribute("dataURL") || ""} />,
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
        //@ts-ignore
        let  result = window.Shopify?.shop?.split(".")[0] || "9shine";
        // console.log(result);
        console.log(window.location);
        el.setAttribute("dataUrl", `https://s3.f22labs.cloud/shopclips/${result}.json`);
        mainelementsofstories.appendChild(el);
  
        let datael = document.createElement("f22-stori");
        datael.setAttribute("dataUrl", `https://s3.f22labs.cloud/shopclips/${result}.json`);
        console.log(el);
		    document.body.appendChild(datael)
      }
    };
  } catch (error) {
    console.error(error);
  }
}
handlevalue();