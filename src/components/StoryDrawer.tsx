//@ts-nocheck
import { useEffect, useState } from "uelements";
import Customslider from "./Customslider";
import { Variant, shopify } from "../types";
import { memo } from "preact/compat";
import PoweredBy from "./PoweredBy";
import Loader from "./Loader";
import { getClickdata } from "../hook/firebase";
function StoryDrawer({
  setIsOpen,
  isSizeOpen,
  setIsSizeOpen,
  productname,
  startProgress,
  videoRef
}: {
  isOpen: boolean;
  productname: string;
}) {
  function handledata(xml) {
    const title = xml?.querySelector("title").textContent;
    const val = xml?.querySelectorAll("variants variant");
    const variants = Array.from(val).map((vals) => {
      return {
        id: parseInt(vals?.querySelector("id")?.textContent),
        title: vals?.querySelector("title").textContent,
        price: vals?.querySelector("price")?.textContent,
      };
    });
    const images = Array?.from(xml?.querySelectorAll("images image")).map(
      (image, id) => {
        return {
          id: image?.querySelector("id").textContent,
          image: image?.querySelector("src").textContent,
        };
      }
    );

    const relevantData = {
      title,
      // description,
      variants: variants.filter((obj, index, self) => {
        return index === self.findIndex((el) => el.title === obj.title);
      }),
      images: images.filter((obj, index, self) => {
        return index === self.findIndex((el) => el.image === obj.image);
      }),
    };
    return relevantData;
  }
  const [product, setProduct] = useState<any>();
  const [variant, setVariant] = useState("");
  const [textforCart, setTextforCart] = useState("Add to cart")


  useEffect(() => {
    const Abortcontoller = new AbortController()
    async function fetchData() {
      try {
        const data = await fetch(
          `https://notthathigh.com/products/${productname}.xml`,
          { redirect: "follow" , signal : Abortcontoller.signal }
        );
        const value = await data.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(value, "application/xml");

        const relevantData = handledata(xml);
        setProduct(relevantData);
        setVariant(relevantData?.variants[0]);


      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
    setTextforCart("Add to cart")
    return () => {
      Abortcontoller.abort()
    }
  }, [productname]);

    
  const handleAddToCart = () => {

    setTextforCart(<Loader/>)
    const url = 'https://notthathigh.com/cart/add';

    const requestBody = {
      Style: 'Limited-2',
      quantity: 1,
      form_type: 'product',
      utf8: '✓',
      id: variant.id,
      sections: 'cart-notification-product,cart-notification-button,cart-icon-bubble',
      sections_url: '/products/gadwal-limited',
    };
    
    const jsonRequestBody = JSON.stringify(requestBody);
    
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
      body: jsonRequestBody, // Set the request body as the JSON string
    };
    
    fetch(url, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the response JSON if needed
      })
      .then(data => {
        // Handle the response data here
        setTextforCart("added to cart")
      })
      .catch(error => {
        // Handle any errors here
        setTextforCart("added to cart")
        console.error(error);
      });
      };
  return (
    <div
      className="plugin-inner_container"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {product ? (
        <>
          <Customslider 
          productimages={product?.images} 
          productName={productname} 
          // productDesc={product?.description} 
          productTitle={product.title} 
          productPrice={variant.price} 
          productVariants={product.variants} 
          setVariant={setVariant} 
          isSizeOpen={isSizeOpen} 
          setIsSizeOpen={setIsSizeOpen} 
          setIsOpen={setIsOpen}
          startProgress={startProgress}
          videoRef={videoRef}
          />
          
          <div
            className="size_container">
            <button  disabled={textforCart === "Add to cart"  ? false : true   }  onClick={(e) => {
              handleAddToCart(e);
              getClickdata("ADD_TO_CART")              
              }} className="atc_button" style={{ cursor: "pointer" }} >
 {textforCart}
             </button>
            <a href={`https://notthathigh.com/cart/${variant.id}:1?checkout`} className="atc_button" onClick={ () => getClickdata("BUYNOW")} >
              BUY NOW
            </a>
          </div>
        </>
      ) : (
        ""
      )}
      <PoweredBy/>
    </div>
  );
}

export const MemoizedStoryDrawer = memo(StoryDrawer);
