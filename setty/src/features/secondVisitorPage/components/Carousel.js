import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ui-intro-page.css';


const ImgCarousel = ({imgData}) => {
  
  return (
    <Carousel>
        {imgData.map((image, index) => (
            <Carousel.Item key={index}>
            <img
                className="d-block w-100 carousel-img"
                src={image.src}
            alt={image.alt || `Slide ${index + 1}`}
            />
            </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default ImgCarousel;