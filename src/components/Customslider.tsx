// @ts-ignore

import { useState } from "uelements"
import { ImageElement } from "../types";


function Customslider({productimages } : {  productimages  : ImageElement[]   } ) {
 const [ state , setState ] =  useState(0)

 function handlecount() {
   if (state <= productimages.length - 1 ) {
     setState((prev) => prev + 1 )
   }
 }
 
 function handlecountslider(data : number) {
  if (data <= productimages.length - 1 ) {
    setState(data )
  }
 }


  return (
      <section class="slider" >
       {/* <img  style={{ width : '50px'  }} src={productimages[state].src}  />  
      <button onClick={() => { 
          handlecount()
       } } > + </button>
       {productimages.map((data) => {
          return  <img  style={{ width : '50px'  }} src={data.src} key={data.id} />
         } )} */}
         <div>
          <img src={productimages[state].src} alt="" className="main_icon"  />
         </div>
         <div>
          <div className="container">
          {productimages.map((data , i ) => {
          return  <img  style={{ width : '50px'  }}  className="sm_product_icon" src={data.src} key={data.id} onClick={() => handlecountslider(i)}  />
         } )}
          </div>
            

         </div>
      </section>
  )
}

export default Customslider