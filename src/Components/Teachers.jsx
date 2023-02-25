import React from "react";
import Slider from "react-slick";
import TeacherCard from "./TeacherCard";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 500,
    // centerMode:true,
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
      {
        breakpoint: 400,
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
      <TeacherCard
        image="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        exp="7"
        name="Tom"
        desc="lorem ipsum dolor sit amet"
      />
      <TeacherCard
        image="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        exp="3"
        name="Jerry"
        desc="lorem ipsum dolor sit amet"
      />
      <TeacherCard
        image="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        exp="5"
        name="Mikey"
        desc="lorem ipsum dolor sit amet"
      />
      <TeacherCard
        image="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        exp="4"
        name="Arthur"
        desc="lorem ipsum dolor sit amet"
      />
      <TeacherCard
        image="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        exp="8"
        name="Adam"
        desc="lorem ipsum dolor sit amet"
      />
      <TeacherCard
        image="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        exp="5"
        name="Paul"
        desc="lorem ipsum dolor sit amet"
      />
      <TeacherCard
        image="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        exp="6"
        name="Armin"
        desc="lorem ipsum dolor sit amet"
      />
      <TeacherCard
        image="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        exp="7"
        name="Larry"
        desc="lorem ipsum dolor sit amet"
      />
      <TeacherCard
        image="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        exp="7"
        name="Samuel"
        desc="lorem ipsum dolor sit amet"
      />
    </Slider>
  );
}
