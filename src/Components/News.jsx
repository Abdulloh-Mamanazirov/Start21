import React from "react";
import Slider from "react-slick";
import NewsCard from "./NewsCard";

export default function NewsSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <NewsCard
        image="https://media.istockphoto.com/id/865729776/photo/hand-with-scissors-cutting-red-ribbon-opening-ceremony.jpg?s=612x612&w=0&k=20&c=MCbqMZtCY_Eh8ckv6LPfh3aQufHShiIdYL1-g7xMchU="
        exp="7"
        name="Opening Cere mony of a new brach "
        seen="45"
      />
      <NewsCard
        image="/start_league.jpg"
        exp="3"
        name="Start21 League is about to begin"
        seen="37"
      />
      <NewsCard
        image="https://media.istockphoto.com/id/865729776/photo/hand-with-scissors-cutting-red-ribbon-opening-ceremony.jpg?s=612x612&w=0&k=20&c=MCbqMZtCY_Eh8ckv6LPfh3aQufHShiIdYL1-g7xMchU="
        exp="5"
        name="Opening Cere mony of a new brach "
        seen="50"
      />
      <NewsCard
        image="/start_league.jpg"
        exp="4"
        name="Start21 League is about to begin"
        seen="27"
      />
      <NewsCard
        image="https://media.istockphoto.com/id/865729776/photo/hand-with-scissors-cutting-red-ribbon-opening-ceremony.jpg?s=612x612&w=0&k=20&c=MCbqMZtCY_Eh8ckv6LPfh3aQufHShiIdYL1-g7xMchU="
        exp="8"
        name="Opening Cere mony of a new brach "
        seen="19"
      />
      <NewsCard
        image="https://media.istockphoto.com/id/865729776/photo/hand-with-scissors-cutting-red-ribbon-opening-ceremony.jpg?s=612x612&w=0&k=20&c=MCbqMZtCY_Eh8ckv6LPfh3aQufHShiIdYL1-g7xMchU="
        exp="5"
        name="Opening Cere mony of a new brach "
        seen="33"
      />
      <NewsCard
        image="/start_league.jpg"
        exp="6"
        name="Start21 League is about to begin"
        seen="21"
      />
    </Slider>
  );
}
