import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import CommonHeader from "../common/commonHeader";

const Header = () => {
  
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <CommonHeader/>
        </div>
      </div>
      <div className="header--title">
        <h2 className="h2">Our projects</h2>
        <Marquee gradient={false} loop={1}>
          <div className="title marquee">
            <div className="wrapper">
              {Array.from({ length: 30 }).map((el: any, i: number) => {
                return (
                  <div tabIndex={0} key={i}  className="marquee_el">
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
                        library
                        <span>library</span>
                    </h1>
                    <img className="star" src="img/Star_projects.png" alt="#" />
                    <h1 className="h1">
                        projects
                        <span>projects</span>
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </Marquee>
        
      </div>
    </header>
  );
};
export default Header;
