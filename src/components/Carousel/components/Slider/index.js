import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
    width: 35px;
    background-color: #00000040;
    height: 100%;
  }
  .slick-next {
    right: 0;
    background-color: #00000040;
    width: 35px;
    height: 100%;
  }

  @media (max-width: 640px) {
    .slick-prev, .slick-next {
      background-color: #00000000;
    }
    
    .slick-prev:before, .slick-next:before {
      display: none;
    }
  }

  .slick-prev:before {
    font-family: "Font Awesome\ 5 Free";
    content: "\f053";
    font-size: 30px;
    font-weight: 900;
  }
  .slick-next:before {
    font-family: "Font Awesome\ 5 Free";
    content: "\f054";
    font-size: 30px;
    font-weight: 900;
  }
`;

export const SliderItem = styled.li`
  margin-right: 4px;
  img {
    margin: 16px;
    object-fit: cover;
  }
  a:hover {
    transition:500ms;
    transform:scale(1.2);
    margin:0 30px 0 30px;
  }
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      slidesToShow: 5,
      slidesToScroll: 3,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;