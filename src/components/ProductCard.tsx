// @ts-nocheck
import { useEffect, useState } from "uelements";
import "./ProductCard.css";

type Props = {
  productname: string;
};

const ProductCard = ({
  productname,
  stopProgress,
  isOpen,
  setIsOpen,
  triggers,
}: Props) => {
  const [product, setProduct] = useState<any>();
  const [variant, setVariant] = useState("");
  const [isVariantSelectorOpen, setIsVariantSelectorOpen] = useState(false);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

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

      variants: variants.filter((obj, index, self) => {
        return index === self.findIndex((el) => el.title === obj.title);
      }),
      images: images.filter((obj, index, self) => {
        return index === self.findIndex((el) => el.image === obj.image);
      }),
    };
    return relevantData;
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(
          `https://shilpashastrastudio.in/products/${productname}.xml`,
          { redirect: "follow" }
        );
        const value = await data.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(value, "application/xml");

        const relevantData = handledata(xml);
        setProduct(relevantData);
        setVariant(relevantData?.variants[0].id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
    setSelectedVariantIndex(0);
    setIsVariantSelectorOpen(false);
  }, [productname]);

  const handleVariantSelection = (id, index) => {
    stopProgress();
    setVariant(id);
    setSelectedVariantIndex(index);
    setIsVariantSelectorOpen(true);
  };
  const handleOpenProductDetails = () => {
    triggers.setProductId(productname);
    triggers.dotclickedtoupdate(
      triggers.productid ||
        triggers.data?.childstories[triggers.actualTime]?.dots?.[0]
          ?.productname,
      triggers.data?.childstories[triggers.actualTime],
      triggers.data
    );
    setIsOpen((prev) => !prev);
    stopProgress();
    if (isOpen) {
      startProgress();
    }
  };
  const handleAddToCart = () => {
    const url = "https://shilpashastrastudio.in/cart/add";
    const data = {
      quantity: 1,
      id: variant,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data).toString(),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "https://shilpashastrastudio.in/cart";
        } else {
          throw new Error("Failed to add to cart");
        }
      })
      .then((responseText) => {
        console.log("Cart Add Response:", responseText);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="product-card">
      <div className="product-card-content">
        <div
          className="product-card-img"
          onClick={() => handleOpenProductDetails()}
        >
          <img src={product?.images[0].image} alt={product?.title} />
        </div>
        <div
          className="product-card-info"
          onClick={() => handleOpenProductDetails()}
        >
          <span className="product-card-info-title">{product?.title}</span>
          <span className="product-card-info-price">
            £{product?.variants[0].price}
          </span>
        </div>
        <div
          className={`product-card-variants ${
            isVariantSelectorOpen ? "product-variant-open" : ""
          }`}
        >
          {product?.variants?.map((variant, index) => (
            <div
              className={`product-card-variant ${
                selectedVariantIndex == index
                  ? "product-card-variant-active"
                  : ""
              }`}
              onClick={() => handleVariantSelection(variant.id, index)}
            >
              {variant?.title}
            </div>
          ))}
        </div>
      </div>
      {isVariantSelectorOpen ? (
        <button
          className="add-to-cart-product-card"
            onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      ) : (
        <button
          className="add-to-cart-product-card"
          onClick={() => {
            setVariant(product?.variants[0]?.id);
            stopProgress();
            setIsVariantSelectorOpen(true);
          }}
        >
          Add to Cart
        </button>
      )}
      <div id="powered_by_product_card">
        <span>
          Powered By{" "}
          <svg
            width="18"
            height="18"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7.95724" cy="7" r="7" fill="white" />
            <path
              d="M7.9293 2.5L12.7188 9.30263L11.8767 10.5L9.74509 8.97368L7.9293 10.0132L6.0872 8.97368L3.96877 10.5L3.15298 9.30263L7.9293 2.5Z"
              fill="#272727"
            />
            <path
              d="M7.92951 10.0132L6.0874 8.97368L6.10028 5.10526L7.92951 2.5L9.7453 5.07902V8.97368L7.92951 10.0132Z"
              fill="#555555"
            />
            <path
              opacity="0.2"
              d="M3.15298 9.30263L7.9293 2.5L8.84065 3.79442L6.0872 8.97368L3.96877 10.5L3.15298 9.30263Z"
              fill="white"
            />
            <path
              opacity="0.3"
              d="M7.92917 2.5L12.7186 9.30263L11.8765 10.5L9.74496 8.97368L7.0589 3.73948L7.92917 2.5Z"
              fill="#272727"
            />
          </svg>{" "}
          F22 LABS
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
