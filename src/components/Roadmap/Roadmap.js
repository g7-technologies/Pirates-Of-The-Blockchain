import React, { useRef, useCallback } from "react";
import Wrapper from "./Roadmap.styled";
import Container from "../Container/Container";

// import Data
import { Roadmapdata } from "./Roadmap.data";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation} from 'swiper';
import 'swiper/swiper.min.css';
import { Icon } from "@iconify/react";
import "swiper/swiper-bundle.min.css";


function Roadmap() {
  const sliderRef = useRef(null);
  // go previus slide
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);
  // go next slide
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <Wrapper>
      <Container dflex={true} center={true}>
        <div className="title" id="roadmap">
          <h2>Community Influenced Roadmap</h2>
          <p>
            As we value our community and its creativity, our roadmap will be
            updated
            <br /> according to your comments and ideas.
          </p>
        </div>
      </Container>
      <Container dflex={true}>
        <div className="sliderButtonGroups"></div>
      </Container>
      <Container dflex={true} center={true}>
        <div className="roadmapContainer">
          {/*<button className="slideButtons" onClick={handlePrev}>
            <Icon icon="ant-design:left-outlined" />
          </button>
          <button className="slideButtons nextBtn" onClick={handleNext}>
            <Icon icon="ant-design:right-outlined" />
          </button>
          <Swiper
            ref={sliderRef}
            modules={[Navigation]}
            spaceBetween={0}
            navigation={true}
            breakpoints={{
              // when window width is >= 640px
              500: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
          >
            {Roadmapdata.map((item, index) => (
              <SwiperSlide key={item.id}>
                {index % 2 ? (
                  <div className="card">
                    <div className="card-head">
                      <img src={item.pic} alt="nft" />
                      <p>{item.pictext}</p>
                    </div>
                    <div className="card-body">
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                ) : (
                  <div className="card">
                    <div className="card-body">
                      <h4>{item.title}</h4>
                    </div>
                    <div className="card-head">
                      <img src={item.pic} alt="nft" />
                      <p>{item.pictext}</p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>*/}
        </div>
      </Container>
    </Wrapper>
  );
}

export default Roadmap;
