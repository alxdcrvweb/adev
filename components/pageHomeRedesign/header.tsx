import classNames from "classnames";
import { useEffect, useState } from "react";
import { concept, links } from "./variables";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Marquee from "react-fast-marquee";
import NavMenu from "./navMenu";
import CommonHeader from "../common/commonHeader";
const Header = ({ collaborate }: any) => {

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <CommonHeader/>
        </div>
      </div>
      <div className="header--title">
        <h2 className="h2">Push your project from</h2>
        <Marquee gradient={false} >
          <div className="title marquee">
            <div className="wrapper">
              {Array.from({ length: 30 }).map((el: any, i: number) => {
                return (
                  <div tabIndex={0} key={i} className="marquee_el">
                    <div className="arrow">
                      <svg
                        width={118}
                        height={88}
                        viewBox="0 0 118 88"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-52 35.9242C-26.9637 35.2462 -1.89363 31.8015 23.2929 31.3342C25.3476 31.296 27.4074 31.2415 29.4705 31.1805M29.4705 31.1805C49.8087 30.5786 70.4676 29.3378 89.8113 36.8292C100.703 41.0472 119.537 51.7282 116.715 66.1794C114.29 78.6033 98.4473 85.9923 87.1015 86.8667C58.5474 89.0675 22.0003 63.7254 29.2931 31.916C29.3502 31.6672 29.4093 31.4221 29.4705 31.1805ZM29.4705 31.1805C32.5858 18.8879 41.1045 15.8544 53.2294 16.2066C66.6683 16.5969 80.0335 17.1414 93.4678 17.275M93.4678 17.275C95.4517 17.2948 97.4371 17.3056 99.4245 17.3056C102.668 17.3056 110.483 19.0928 103.618 17.5642C102.651 17.3488 93.2953 15.8425 93.2953 16.7237C93.2953 16.9189 93.3548 17.1024 93.4678 17.275ZM93.4678 17.275C95.2379 19.9813 110.127 20.0338 114.612 20.6374M114.612 20.6374C115.106 20.7039 115.473 20.7771 115.683 20.8612C117.484 21.5831 116.661 21.3993 114.612 20.6374ZM114.612 20.6374C109.216 18.6314 95.321 12.618 98.4568 8.57811C99.7629 6.89547 101.418 5.55857 101.296 3.34163C101.148 0.671537 97.2312 1.01431 97.8116 1.01431M97.8763 28.0099C93.1478 22.0877 110.639 21.7598 113.435 19.658"
                          stroke="black"
                          strokeWidth="0.914321"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h1 className="h1">
                      the stars
                      <span>the stars</span>
                    </h1>
                    <img className="star" src="img/Star.png" alt="#" />
                    <h1 className="h1">
                      the scratch
                      <span>the scratch</span>
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </Marquee>
      </div>
      <div className="header--bottom">
        <div className="container">
          <div className="row">
            <div className="concept">
              {concept.map((el) => {
                return (
                  <a href={el.href} key={el.title} target={"_blank"} style={{pointerEvents:'none'}}>
                    {el.title}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <a
          onClick={() => {
            collaborate.current.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "end",
            });
          }}
          className="down"
        >
          <img src="img/down.png" alt="#" />
          <svg
            width={24}
            height={38}
            viewBox="0 0 24 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9393 37.0607C11.5251 37.6464 12.4749 37.6464 13.0607 37.0607L22.6066 27.5147C23.1924 26.9289 23.1924 25.9792 22.6066 25.3934C22.0208 24.8076 21.0711 24.8076 20.4853 25.3934L12 33.8787L3.51472 25.3934C2.92893 24.8076 1.97919 24.8076 1.3934 25.3934C0.807613 25.9792 0.807613 26.9289 1.3934 27.5147L10.9393 37.0607ZM10.5 6.57211e-08L10.5 36L13.5 36L13.5 -6.57211e-08L10.5 6.57211e-08Z"
              fill="#F2F2F2"
            />
          </svg>
        </a>

        
      </div>
    </header>
  );
};
export default Header;
