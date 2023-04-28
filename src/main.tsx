//
import { define } from "uelements";
import App from "./app";

define(
  "f22-stories",
  (el) => <App dataURL={el.getAttribute("dataURL") || ""} />,
  ["dataURL"],
  () => console.log("F22 Plugin cleanup")
);



async function loaderofdata() {
  const data = await fetch("http://localhost:3000/value");
  const value = await data.json();
  value.forEach((element: { id: string; url: string }) => {
    const mainelementsofstories = document.querySelector(`#${element.id}`);
     if (mainelementsofstories) {
      let el = document.createElement("f22-stories");
      el.setAttribute("dataUrl", element.url);
      mainelementsofstories?.appendChild(el);
      document.body.append(mainelementsofstories!);
      console.log(mainelementsofstories);
     }

  });
}
loaderofdata();
