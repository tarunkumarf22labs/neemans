// @ts-nocheck
import "./css/customSlide.css";
import { useEffect, useState } from "uelements";
import { ImageElement } from "../types";

function Customslider({ productimages, productVariants ,setVariant }: { productimages: ImageElement[] }) {
    console.log(productVariants);
    
  const [slides, setSlides] = useState({
    currentImg: productimages[0].image,
    currentImgIndex: 0,
    imgData: productimages,
    currentSizeIndex: 0,
    currentSize: productVariants[0].title,
    sizeData: productVariants,
    totalSlides: productimages.length,
  });
  console.log(slides);
  
  
  useEffect(() => {
    setSlides({
      currentImg: productimages[0].image,
    currentImgIndex: 0,
    imgData: productimages,
    currentSizeIndex: 0,
    currentSize: productVariants[0].title,
    sizeData: productVariants,
    totalSlides: productimages.length,
    totalSizeSlides: productVariants.length
    })
  } ,[productimages[0].image] )
  const onCarouselProdClick = (index) => {
    const selectedProduct = slides.imgData[index];
    setSlides({
      ...slides,
      currentImg: selectedProduct.image,
      currentImgIndex: index,
    });
  };

  const onClickPrev = () => {
    if (slides.currentImgIndex - 1 >= 0)
      setSlides({
        ...slides,
        currentImg: productimages[slides.currentImgIndex - 1].image,
        currentImgIndex: slides.currentImgIndex - 1,
      });
  };
  const onClickNext = () => {
    if (slides.currentImgIndex + 1 < slides.imgData.length)
      setSlides({
        ...slides,
        currentImg: productimages[slides.currentImgIndex + 1].image,
        currentImgIndex: slides.currentImgIndex + 1,
      });
  };

  const onClickSizePrev = () =>{
    if (slides.currentSizeIndex - 1 >= 0){

      setSlides({
        ...slides,
        currentSize: productVariants[slides.currentSizeIndex - 1].title,
        currentSizeIndex: slides.currentSizeIndex - 1,
      });
      setVariant(slides.sizeData[slides.currentSizeIndex - 1])
    }
  }
  const onClickSizeNext = () =>{
    if (slides.currentSizeIndex + 1 < slides.sizeData?.length){

      setSlides({
        ...slides,
        currentSize: productVariants[slides.currentSizeIndex + 1].title,
        currentSizeIndex: slides.currentSizeIndex + 1,
      });
      setVariant(slides.sizeData[slides.currentSizeIndex + 1])
    }
  }
  const onSliderSizeClick = (index) =>{
    const selectedSize = slides.sizeData[index];
    console.log("selectedSize" , selectedSize ); 
    
    setVariant(selectedSize)
    console.log(index)
    setSlides({
      ...slides,
      currentSize: selectedSize.title,
      currentSizeIndex: index
    });
  }

  return (
    <div id="main__container">
      <SwipeableComponent
        onSwipeLeft={onClickPrev}
        onSwipeRight={onClickNext}
        slides={slides}
      >
        <MainSlide slides={slides} currImgIndex={slides.currentImgIndex} />
      </SwipeableComponent>
      <div className="all__slides__container">
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
        <div className="all_slides">
          <div className="slider__container">
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
      <div className="all__slides__container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          id="left__arrow"
          onClick={onClickSizePrev}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <div className="all_slides">
          <div className="slider__container">
            {slides.sizeData && slides.sizeData.map((slide, index) => (
              <SizeSlide
                key={slide.id}
                slide={slide}
                handler={onSliderSizeClick}
                index={index}
                currSize={slides.currentSize}
                currSizeIndex={slides.currentSizeIndex}
                totalSlides={slides.totalSizeSlides}
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
          onClick={onClickSizeNext}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
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
          <div className="main__slide__img">
            <img src={slide.image} key={slide.id} alt="product" />
          </div>
        ))
      }
    </div>
  );
};

const Slide = ({
  slide: { image },
  handler,
  currImgIndex,
  index,
  totalSlides,
}) => {
  return (
    <div
      className="slide__container"
      onClick={() => handler(index)}
      style={{
        transform: `${
          totalSlides - 3 > currImgIndex
            ? `translateX(-${currImgIndex * 100}%)`
            : `translateX(-${1* 100}%)`
        }`,
      }}
    >
      <img
        src={image}
        alt="product1"
        className={currImgIndex === index ? "active" : ""}
      />
    </div>
  );
};

const SizeSlide = ({ slide, handler, currSizeIndex, index, totalSlides }) => {
  console.log('Slide', slide.title,currSizeIndex, index, totalSlides )
  return (
    <div className={`slide__container ${currSizeIndex === index? "active__size": ""}`} onClick={() => handler(index)} style={{transform: `${totalSlides - 3 > currSizeIndex  ? `translateX(-${currSizeIndex * 100}%)`: `translateX(-${3.5 * 100}%)`}`}}>
      <h6 className="size__text">{slide?.title}</h6>
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
      onSwipeRight();
    }

    if (touchStart - touchEnd < -50) {
      // swipe left to right
      onSwipeLeft();
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="swipeable__component"
    >
      {children}
    </div>
  );
}

export default Customslider;