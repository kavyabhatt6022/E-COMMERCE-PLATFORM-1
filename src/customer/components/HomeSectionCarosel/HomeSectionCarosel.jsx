import React, { useState, useRef }  from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import 'react-alice-carousel/lib/alice-carousel.css';

const HomeSectionCarosel = ({data , sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  //creating functionality for left and right moving buttons of carousel
  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex=({item})=>setActiveIndex(item);

  const items = data.slice(0, 10).map((item) => <HomeSectionCard  product={item} />);
  return (

    <div className=" border relative px-4 lg:px-8  ">

      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>

      <div className="relative p-5  ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          ref={carouselRef}
          onInitialized={syncActiveIndex}
          onSlideChanged={syncActiveIndex}
          px={20}
        />
        <div className="flex justify-between">
        {activeIndex < items.length-5 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            disabled={activeIndex == items.length - 5}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(60%) rotate(90deg)",
              bgcolor: activeIndex === items.length - 1 ? "gray" : "white", // change bgcolor when disabled
      "&:hover": {
        bgcolor: activeIndex === items.length - 1 ? "gray" : "white", // change hover bgcolor when disabled
      },
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: activeIndex == items.length - 5 ? "gray" : "black" }}
            />
          </Button>
        )}

      {activeIndex  > 0 &&  <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slidePrev}
          disabled={activeIndex == 0}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-60%) rotate(-90deg)",
            bgcolor: activeIndex === 0 ? "gray" : "white", // change bgcolor when disabled
      "&:hover": {
        bgcolor: activeIndex === 0 ? "gray" : "white", // change hover bgcolor when disabled
      }
          }}
          aria-label="prev"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: activeIndex === 0 ? "gray" : "black"  }}
          />
        </Button>}
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
