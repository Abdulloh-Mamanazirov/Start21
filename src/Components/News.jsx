import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import NewsCard from "./NewsCard";
import { news } from '../constants'
 
export default function NewsSlider() {
  const {t}=useTranslation()
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     centerMode: true,
      //   },
      // },
    ],
  };
  return (
    <Slider {...settings}>
      {news.map((n) => (
        <NewsCard
          image={n.image}
          exp={n.exp}
          name={t(n.name)}
          seen={n.seen}
          id={n.id}
        />
      ))}
    </Slider>
  );
}
