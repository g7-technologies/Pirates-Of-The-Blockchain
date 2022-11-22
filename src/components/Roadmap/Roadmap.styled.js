import styled from "styled-components";
import Backgroundimg from "../../images/roadmapbackground.png";
const Wrapper = styled.div`
  margin-top: 50px;
  background: #000000;
  > div {
    padding: 0;
    .title {
      margin: 50px 0;
      text-align: center;
      h2 {
        font-size: 40px;
        font-weight: 500;
        text-align: center;
        color: #fff200;
      }
    }
    .roadmapContainer {
      background: url(${Backgroundimg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100vh;
      position: relative;
      @media (max-width: 768px) {
        padding: 10px;
      }
      .swiper {
        width: 90%;
        margin: auto;
        @media (max-width: 800px) {
          width: 80%;
        }
        @media (max-width: 425px) {
          width: 70%;
        }
        .swiper-button-prev {
          display: none;
        }
        .swiper-button-next {
          display: none;
        }
        .swiper-wrapper {
          width: 100%;
          .swiper-slide {
            .card {
              border:none;
              background:transparent;
              .card-head {
                border: 1px solid #fff200;
                min-height: 330px;
                padding: 25px;
                text-align: center;
                background: rgba(0, 0, 0, 0.5);
                img {
                  max-width: 100px;
                }
                p {
                  margin-top: 10px;
                  font-size: 16px;
                  font-weight: 400;
                }
                @media (min-width: 1024px) and (max-width: 1075px) {
                  min-height: 360px;
                }
              }
              .card-body {
                min-height: 330px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10px;
                text-align: center;
                @media (min-width: 1024px) and (max-width: 1075px) {
                  min-height: 360px;
                }
                h4 {
                  color: #fff200;
                  font-size: 25px;
                  font-weight: 500;
                }
              }
            }
          }
        }
      }
      .slideButtons {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        font-size: 16px;
        font-weight: bold;
        border: 1px solid #fff200;
        cursor: pointer;
        background: #000000;
        color: #fff200;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 576px) {
          width: 40px;
          height: 40px;
        }
      }
      .nextBtn {
        left: auto;
        right: 10px;
      }
    }
  }
`;
export default Wrapper;
