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
  function handledata(data) {
    let text = "gid://shopify/ProductVariant/42920788197535";
    let pattern = /^gid:\/\/shopify\/ProductVariant\//;    
    let new_text = data?.replace(pattern, "");
    return new_text;
  }
  const [product, setProduct] = useState<any>();
  const [variant, setVariant] = useState("");
  console.log(variant);
  

  const apiKey = "a43de55bc7186e138cbb30e7d780e5e1";
  const password = "d56c777af55c5676766df25296e1e865";
  const storeName = "test-for-qa";

  useEffect(() => {
    // if (!client) {
    //   client = Client.buildClient({
    //     storefrontAccessToken: "ad407b91a1596e2f1a840e9b91b643c8",
    //     domain: "test-for-qa.myshopify.com",
    //     apiVersion: "2023-01",
    //   });
    // }

    // const productId = `gid://shopify/Product/${productid}`;
    // client.product.fetch(productId).then((product: any) => {
    //   // Do something with the product
    //   setProduct(product);
    //   setVariant(handledata(product?.variants[0].id));
    // });
    async function fetchdata(){
       const data = await fetch(`https://uug8c5euw1.execute-api.us-east-1.amazonaws.com/?productid=${productid}`) ;
       const value = await data.json()
       setProduct(value);
       setVariant(handledata(value?.variants[0].id));
    }
    fetchdata()
    //   fetch(`https://${  }:${password}@${storeName}.myshopify.com/admin/api/2021-07/products.json`)
    //   .then(response => response.json())
    //   .then(data => {
    //     // const productList = data.products;
    //  console.log(data);
    //     // setProducts(productList);
    //   })
    //   .catch(error => console.error(error));
  }, [productid]);

  if (!product) {
    return <div>Loading...</div>;
  }


  return (
    <div
      className={`drawer ${isOpen ? "open" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <Customslider productimages={product.images} />
      <div className="size_container">
        {product.variants.map((p: Variant) => {
          return (
            <h6  className={`${variant  === handledata(p.id)  ? "selectedtag" : "" }`}  onClick={() => setVariant(handledata(p.id))}>{p.title}</h6>
          );
        })}
      </div>
      <div
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
      </div>
    </div>
  );
}

export const MemoizedStoryDrawer = memo(StoryDrawer);
// export default StoryDrawer;
