//@ts-nocheck
import { useEffect, useState } from "uelements";
import Customslider from "./Customslider";
import { Variant, shopify } from "../types";
import { memo } from "preact/compat";
function StoryDrawer({
  isOpen,
  isSizeOpen,
  setIsSizeOpen,
  productname,
}: {
  isOpen: boolean;
  productname: string;
}) {
  function handledata(xml) {
    const title = xml?.querySelector("title").textContent;
    console.log(title , "Sahi");
    
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

  // setProduct(value);

  return (
    <div
      className="plugin-inner_container"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {product ? (
        <>
          <Customslider productimages={product?.images} productTitle={product.title} productPrice={variant.price} productVariants = {product.variants} setVariant={setVariant} isSizeOpen={isSizeOpen} setIsSizeOpen={setIsSizeOpen}/>
          <div
            className="size_container"
            style={{ flexDirection: "column", justifyContent: "center" }}
          >
            <br />
              <a href={`https://paperlondon.com/cart/add?id=${variant.id}&quantity=1&size=6`} className="atc_button">
                ADD TO CART
              </a>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export const MemoizedStoryDrawer = memo(StoryDrawer);
