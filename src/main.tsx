//
import { define } from "uelements";
import App from "./app";

define(
  "f22-stories",
  (el) => <App dataURL={el.getAttribute("dataURL") || ""} />,
  ["dataURL"],
  () => console.log("F22 Plugin cleanup")
);



// async function loaderofdata() {
//   const data = await fetch("https://api.jsonbin.io/v3/b/644b7f5e9d312622a353b0e6");
//   const value = await data.json();
  //   value.record.forEach((element: { id: string; url: string }) => {
//     const mainelementsofstories = document.querySelector(`#${element.id}`);
//      if (mainelementsofstories) {
//       let el = document.createElement("f22-stories");
//       el.setAttribute("dataUrl", element.url);
//       mainelementsofstories?.appendChild(el);
//       document.body.append(mainelementsofstories!);
//      }
//   });

// }
// loaderofdata();


// let el = document.createElement('f22-stories')
// el.setAttribute('dataUrl', "https://api.jsonbin.io/v3/b/644b96d98e4aa6225e92895b")
// document.body.append(el)


//  function handlevalue() {
//  document.addEventListener("DOMContentLoaded" ,  async() => {
//   // setTimeout (async () => {
//     const data = await fetch("https://api.jsonbin.io/v3/b/644b7f5e9d312622a353b0e6");
//     const value = await data.json();
//       value.record.forEach((element: { id: string; url: string }) => {
//     const mainelementsofstories = document.querySelector(`#${element.id}`);
//      if (mainelementsofstories) {
//       let el = document.createElement("f22-stories");
//       el.setAttribute("dataUrl", element.url);
//       mainelementsofstories?.appendChild(el);
//      }
//   });
//   //  } , 2000 )
//  } ) 
// } 

// handlevalue()


function handlevalue() {
  try {
    window.onload = async () => {
      setTimeout(async () => {
        const data = await fetch("https://api.jsonbin.io/v3/b/644b7f5e9d312622a353b0e6");
        const value = await data.json();
        // value.record.forEach((element : any ) => {
          const mainelementsofstories = document.querySelector(`#f22-storiesplugin1`);
          if (mainelementsofstories) {
            let el = document.createElement("f22-stories");
            el.setAttribute("dataUrl", "https://s3.f22labs.cloud/stories/paper-story.json");
            mainelementsofstories.appendChild(el);
          }
        // });
      }, 2000);
    };
  } catch (error) {
    console.error(error);
  }
}

handlevalue();
