//@ts-nocheck
import { useEffect, useState } from "uelements";
import Customslider from "./Customslider";
import { Variant, shopify } from "../types";
import { memo } from "preact/compat";
import PoweredBy from "./PoweredBy";
function StoryDrawer({
  setIsOpen,
  isSizeOpen,
  setIsSizeOpen,
  productname,
  startProgress
}: {
  isOpen: boolean;
  productname: string;
}) {
  function handledata(xml) {
    const title = xml?.querySelector("title").textContent;
    // let description = xml?.querySelector("body-html").textContent;

    // function removeTags(str) {
    //   if ((str === null) || (str === ''))
    //     return false;
    //   else
    //     str = str.toString();

    //   // Regular expression to identify HTML tags in
    //   // the input string. Replacing the identified
    //   // HTML tag with a null string.
    //   return str.replace(/(<([^>]+)>)/ig, '');
    // }
    // description = removeTags(description);

    // console.log("Description -> ", description);
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


  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(
          `https://paperlondon.com/products/${productname}.xml`,
          { redirect: "follow" }
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
  }, [productname]);

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
          startProgress={startProgress}/>
          <div
            className="size_container">
            <a href={`https://paperlondon.com/cart/add?id=${variant.id}&quantity=1&size=6`} className="atc_button">
              ADD TO CART
            </a>
            <a href={`https://paperlondon.com/cart/${variant.id}:1?checkout`} className="atc_button">
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
