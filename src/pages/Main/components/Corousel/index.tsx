import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import russianWarShip from "../Corousel/images/russianWarShipFuckYou.jpg";
import forces from "../Corousel/images/ЗСУ.jpg";
import dots from "../Corousel/images/dots.jpg";
import mail from "../Corousel/images/mail.jpg";
import news from "../Corousel/images/news.jpg";

const MainCarousel = () => {
  return (
    <Carousel showStatus={false} showThumbs={false} showArrows={true}>
      <div
        onClick={() => {
          window.open(
            "https://bank.gov.ua/ua/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi",
            "_blank"
          );
        }}
      >
        <img src={russianWarShip} alt={"no picture"} />
      </div>
      <div
        onClick={() => {
          window.open(
            "https://bank.gov.ua/ua/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi",
            "_blank"
          );
        }}
      >
        <img src={forces} alt={"no picture"} />
      </div>
      <div
        onClick={() => {
          window.open("https://rozetka.com.ua/pages/open_points/", "_blank");
        }}
      >
        <img src={dots} alt={"no picture"} />
      </div>
      <div
        onClick={() => {
          window.open("https://rozetka.com.ua/pages/novaposhta/", "_blank");
        }}
      >
        <img src={mail} alt={"no picture"} />
      </div>
      <div
        onClick={() => {
          window.open("https://rozetka.com.ua/pages/channels/", "_blank");
        }}
      >
        <img src={news} alt={"no picture"} />
      </div>
    </Carousel>
  );
};

export default MainCarousel;
