// @ts-ignore
import './css/customSlide.css'
import { useState } from "uelements";
import { ImageElement } from "../types";

function Customslider({ productimages }: { productimages: ImageElement[] }) {
  // const [state, setState] = useState(0);

  // function handlecount() {
  //   if (state <= productimages.length - 1) {
  //     setState((prev) => prev + 1);
  //   }
  // }

  // function handlecountslider(data: number) {
  //   if (data <= productimages.length - 1) {
  //     setState(data);
  //   }
  // }
  console.log(productimages)

  const [slides, setSlides] = useState(() => ({
    currentImg: productimages[0].src,
    currentImgIndex: 0,
    imgData: productimages,
    totalSlides: productimages.length
  }));

  const onCarouselProdClick = (index) => {
    const selectedProduct = slides.imgData[index];
    setSlides({
      ...slides,
      currentImg: selectedProduct.src,
      currentImgIndex: index,
    });
  };

  const onClickPrev = () => {
    if (slides.currentImgIndex - 1 >= 0)
      setSlides({
        ...slides,
        currentImg: productimages[slides.currentImgIndex - 1].src,
        currentImgIndex: slides.currentImgIndex - 1,
      });
  };
  const onClickNext = () => {
    if (slides.currentImgIndex + 1 < slides.imgData.length)
      setSlides({
        ...slides,
        currentImg: productimages[slides.currentImgIndex + 1].src,
        currentImgIndex: slides.currentImgIndex + 1,
      });
  };

  return (
    <section class="slider">
      {/* <img  style={{ width : '50px'  }} src={productimages[state].src}  />  
      <button onClick={() => { 
          handlecount()
       } } > + </button>
       {productimages.map((data) => {
          return  <img  style={{ width : '50px'  }} src={data.src} key={data.id} />
         } )} */}
      
      <div>
        {/* <div className="container">
          {productimages.map((data , i ) => {
          return  <img  style={{ width : '50px'  }}  className="sm_product_icon" src={data.src} key={data.id} onClick={() => handlecountslider(i)}  />
         } )}
          </div> */}
        <div id="main__container">
          <SwipeableComponent
            onSwipeLeft={onClickPrev}
            onSwipeRight={onClickNext}
            slides={slides}
          >
            <MainSlide slides={slides} currImgIndex={slides.currentImgIndex} />
          </SwipeableComponent>
          <div id="all__slides__container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          id="left__arrow"
          onClick={onClickPrev}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <div id="all_slides">
          <div id="slider__container">
            {slides.imgData.map((slide, index) => (
              <Slide
                key={slide?.id}
                slide={slide}
                handler={onCarouselProdClick}
                index={index}
                currImgIndex={slides.currentImgIndex}
                totalSlides={slides.totalSlides}
              />
            ))}
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          id="right__arrow"
          onClick={onClickNext}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
        </div>
      </div>
    </section>
  );
}
const MainSlide = ({ slides, currImgIndex }) => {
  return (
    <div
      id="main__slide"
      style={{ transform: `translateX(-${currImgIndex * 100}%)` }}
    >
      {
        // eslint-disable-next-line react/prop-types
        slides.imgData.map((slide) => (
          <img src={slide.src} key={slide.id} alt="product" />
        ))
      }
    </div>
  );
};

const Slide = ({ slide: { src }, handler, currImgIndex, index, totalSlides }) => {
  return (
    <div className="slide__container" onClick={() => handler(index)} style={{transform: `${totalSlides - 3 > currImgIndex  ? `translateX(-${currImgIndex * 100}%)`: `translateX(-${2.1 * 100}%)`}`}}>
      <img
        src={src}
        alt="product1"
        className={currImgIndex === index ? "active" : ""}
      />
    </div>
  );
};


function SwipeableComponent({ children, onSwipeLeft, onSwipeRight }) {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // swipe right to left
      //   console.log('swiped right');
      onSwipeRight();
    }

    if (touchStart - touchEnd < -50) {
      // swipe left to right
      //   console.log('swiped left');
      onSwipeLeft();
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
}

export default Customslider;
