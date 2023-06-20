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
        // https://gastromotiva.org/wp-content/uploads/2018/09/placeholder-image.jpg
        image="https://media.istockphoto.com/id/515264678/photo/portrait-of-confident-caucasian-male-teacher-in-classroom.jpg?s=612x612&w=0&k=20&c=XxZPrrrC7XsjzLZN1TqKnp6k4OozMxLSv_zrvCDjP7I="
        exp="7"
        name="Tom"
        desc="lorem ipsum dolor sit amet"
      />
      <TeacherCard
        image="https://media.istockphoto.com/id/1023229588/photo/young-male-educator-stands-proudly-in-school-building.jpg?s=612x612&w=0&k=20&c=qra2owV9l3gp3X-fj0I5CUnPllyQIzpUSmOPmLjEeQo="
        exp="3"
        name="Jerry"
        desc="lorem ipsum dolor sit amet"
      />
      <TeacherCard
        image="https://media.istockphoto.com/id/839289908/photo/portrait-of-young-white-male-teacher-in-school-classroom.jpg?s=612x612&w=0&k=20&c=Q7J4H6vZzCJdiZXJHJL1NUrvBb5q6lG4gRpd2o7JT98="
        exp="5"
        name="Mikey"
        desc="lorem ipsum dolor sit amet"
      />
      <TeacherCard
        image="https://media.istockphoto.com/id/1201437847/photo/good-looking-male-business-professional-in-studio.jpg?s=612x612&w=0&k=20&c=xWZCmQDVE-56daMr_GwppH12xmfW_bANidnq6CT5ExI="
        exp="4"
        name="Arthur"
        desc="lorem ipsum dolor sit amet"
      />
      <TeacherCard
        image="https://media.istockphoto.com/id/1160926571/photo/portrait-of-male-elementary-school-teacher-standing-in-classroom.jpg?s=612x612&w=0&k=20&c=l_CVoCyASapk6kyppTvBGWZzNULZJauCrMBDSE3wI_k="
        exp="8"
        name="Adam"
        desc="lorem ipsum dolor sit amet"
      />
      <TeacherCard
        image="https://img.freepik.com/premium-photo/cheerful-male-teacher-giving-online-english-lesson-laptop-computer-showing-ok-gesture-office_116547-22351.jpg"
        exp="5"
        name="Paul"
        desc="lorem ipsum dolor sit amet"
      />
      <TeacherCard
        image="https://www.shutterstock.com/image-photo/portrait-young-teacher-near-whiteboard-260nw-1656704692.jpg"
        exp="6"
        name="Armin"
        desc="lorem ipsum dolor sit amet"
      />
      <TeacherCard
        image="https://img.freepik.com/free-photo/cheerful-enterprising-financial-advisor-with-beard-raising-pen-while-having-idea_1262-14140.jpg"
        exp="7"
        name="Larry"
        desc="lorem ipsum dolor sit amet"
      />
      <TeacherCard
        image="https://img.freepik.com/premium-photo/modern-business-man-formal-suit-standing-with-crossed-arms-isolated-grey-background-businesspeople-concept_533057-1641.jpg"
        exp="7"
        name="Samuel"
        desc="lorem ipsum dolor sit amet"
      />
    </Slider>
  );
}
