import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgs/sliderpic1.jpg"
          alt="First slide"
          height="50%"
          width="50%"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgs/sliderpic3.jpg"
          alt="Third slide"
          height="50%"
          width="50%"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgs/sliderpic4.jpg"
          alt="Third slide"
          height="50%"
          width="50%"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgs/sliderpic5.jpg"
          alt="Third slide"
          height="50%"
          width="50%"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;