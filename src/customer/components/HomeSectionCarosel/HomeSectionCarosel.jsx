import React, { useRef } from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

const HomeSectionCarousel = ({ data, sectionName }) => {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 3 },
    640: { items: 4 },
    768: { items: 5 },
    1024: { items: 5 },
  };

  const slidePrev = () => carouselRef.current?.slidePrev();
  const slideNext = () => carouselRef.current?.slideNext();

  const items = data.map((item, index) => (
    <div key={index} className="flex justify-center px-1">
      <HomeSectionCard
        name={item.name}
        description={item.description}
        image={item.image}
        category={sectionName.toLowerCase()}
      />
    </div>
  ));

  return (
    <div className="relative px-2 sm:px-4 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 py-4 capitalize">
        {sectionName}
      </h2>

      <div className="relative border-2 px-2 py-4 sm:px-3 sm:py-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          infinite
          paddingLeft={0}
          paddingRight={0}
        />

                  {/* Right Arrow */}
        <Button
          variant="contained"
          className="z-50"
          onClick={slideNext}
          sx={{
            position: 'absolute',
            top: { xs: '4rem', md: '5.5rem' },
            right: 0,
transform: 'translateX(50%) rotate(90deg)',
            bgcolor: 'white',
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(+90deg)", color: 'black' }} />
        </Button>

        {/* Left Arrow */}
        <Button
          variant="contained"
          className="z-50"
          onClick={slidePrev}
          sx={{
            position: 'absolute',
            top: { xs: '4rem', md: '5.5rem' },
            left: 0,
            transform: 'translateX(-50%) rotate(90deg)',
            bgcolor: 'white',
          }}
          aria-label="prev"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: 'black' }} />
        </Button>
      </div>
    </div>
  );
};

 

export default HomeSectionCarousel;