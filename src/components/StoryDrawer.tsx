//@ts-nocheck
import { useEffect, useState } from "uelements";
import Customslider from "./Customslider";
import { Variant, shopify } from "../types";
import { memo } from "preact/compat";
function StoryDrawer({
  isOpen,
  productid,
}: {
  isOpen: boolean;
  productid: number;
}) {
  console.log(productid , "productid" );
  
  function handledata(data) {
    let pattern = /^gid:\/\/shopify\/ProductVariant\//;    
    let new_text = data?.replace(pattern, "");
    return new_text;
  }
  const [product, setProduct] = useState<any>();
  const [variant, setVariant] = useState("");
  
  useEffect(() => {
    async function fetchdata(){
       const data = await fetch(`https://uug8c5euw1.execute-api.us-east-1.amazonaws.com/?productid=${productid}`) ;
       const value = await data.json()
       setProduct(value);
       setVariant(handledata(value?.variants[0].id));
       console.log(product?.images);
       
    } 
    fetchdata()
  }, [productid]);


  

  return (
      <div className="plugin-inner_container" onClick={(e) => { e.stopPropagation() }  } >
        { product ? (   
      <><Customslider productimages={product?.images} /><div className="size_container">
          {product.variants.map((p: Variant) => {
            return (
              <h6 className={`${variant === handledata(p.id) ? "selectedtag" : ""}`} onClick={() => setVariant(handledata(p.id))}>{p.title}</h6>
            );
          })}
        </div><div
          className="size_container"
          style={{ flexDirection: "column", justifyContent: "center" }}
        >
            <h5 style={{ fontSize: "14px", textAlign: "center" }}>
              {product.title}
            </h5>
            <h5
              style={{ fontSize: "14px", textAlign: "center", marginTop: "10px" }}
            >
              {" "}
              {product.variants[0].price.currencyCode}{" "}
              {product.variants[0].price.amount}{" "}
            </h5>
            <br />
            <button className="atc_button">
              <a
                href={`https://test-for-qa.myshopify.com/cart/add?id=${variant}&quantity=1&size=6`}
              >
                ADD TO CART
              </a>
            </button>
          </div></>
     )      :  "" }
     </div>
    
  );
}

export const MemoizedStoryDrawer = memo(StoryDrawer);
