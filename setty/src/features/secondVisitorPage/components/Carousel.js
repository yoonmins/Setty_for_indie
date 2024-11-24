import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ui-intro-page.css';


const ImgCarousel = ({imgData}) => {
  const prevIcon ="https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/arrow_back_ios.svg";
  const nextIcon="https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/arrow_forward_ios.svg";

  return (
    <Carousel 
      prevIcon={<img src={prevIcon} className="custom-prev-icon" />} // 이전 버튼 아이콘 커스터마이즈
      nextIcon={<img src={nextIcon} className="custom-next-icon" />} 
    >
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