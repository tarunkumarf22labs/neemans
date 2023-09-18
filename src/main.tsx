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
        //@ts-ignore
        let  result = window.Shopify?.shop?.split(".")[0] || "shlipashastra-studio";
        // console.log(result);
        console.log(window.location);
        el.setAttribute("dataUrl", `https://d2v2xr113se7rz.cloudfront.net/shlipashastra-studio/${result}.json`);
        mainelementsofstories.appendChild(el);
      }
    };
  } catch (error) {
    console.error(error);
  }
}
handlevalue();