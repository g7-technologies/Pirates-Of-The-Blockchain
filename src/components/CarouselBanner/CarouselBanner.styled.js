import styled from "styled-components";
import Backgroundimg from "../../images/bg.png";

const Wrapper = styled.div`
  margin-top: 80px;
  .center_property {
    justify-content: center;
    margin-top: 100px;
  }
  .gif_img {
    width: 80%;
    height: 100%;
    border-radius: 15px;
  }
  h1 {
    font-size: 55px;
    font-weight: 600;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 50px;
    }
    span {
      color: #fff200;
    }
  }
  > div {
    margin: 30px 0;
    .bannerSlider {
      width: 100%;
      margin: auto;
      color: #ffffff;
      .swiper {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 10px;
        .swiper-button-prev,
        .swiper-button-next {
          display: none;
        }
        .swiper-wrapper {
          .swiper-slide {
            min-height: 300px;
            border: 2px solid #fff200;
            border-radius: 7px;
            padding: 20px;
            @media (max-width: 930px) {
              min-height: 250px;
            }
            .img-card {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              p {
                font-size: 16px;
                font-weight: 500;
                line-height: 3;
                margin-left: 25px;
                @media (max-width: 930px) {
                  margin-left: 0;
                }
              }
              .img-continer {
                /* margin-top: 50px; */
                text-align: center;
                img {
                  width: 100%;
                  object-fit: fill;
                }
              }
            }
          }
        }
      }
    }
    .sliderButtonGroups {
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        font-size: 20px;
        font-weight: 700;
        min-width: 70px;
        padding: 15px 0;
        background: #fff200;
        color: #000000;
        border: none;
        border-radius: 7px;
        cursor: pointer;
        :first-child {
          margin-right: 15px;
        }
        :last-child {
          margin-left: 15px;
        }
      }
      input {
        padding: 15px;
        border: none;
        max-width: 120px;
        width: 100%;
        font-size: 20px;
        font-weight: 700;
        background: #fff;
        color: #000000;
        border-radius: 7px;
        text-align: center;
        :focus {
          outline: none;
        }
      }
    }
    .mintBtn {
      text-align: center;
      margin-top: 20px;
      button {
        min-width: 250px;
        font-size: 20px;
        font-weight: 700;
        padding: 15px 20px;
        background: #fff200;
        color: #000000;
        border: none;
        border-radius: 7px;
        cursor: pointer;
        :first-child {
          margin-right: 15px;
        }
        :last-child {
          margin-left: 15px;
        }
      }
      a {
        min-width: 250px;
        font-size: 20px;
        font-weight: 700;
        padding: 15px 20px;
        background: #fff200;
        color: #000000;
        border: none;
        border-radius: 7px;
        cursor: pointer;
        :first-child {
          margin-right: 15px;
        }
        :last-child {
          margin-left: 15px;
        }
      }
    }
    .buttonBottomText {
      margin-top: 20px;
      text-align: center;
      font-size: 15px;
      .text {
        max-width: 1144px;
        margin: auto;
        margin-top: 25px;
        line-height: 1.8;
      }
    }
  }
  .bg-img {
    width:100%;
  }
  a {
    color: #000000;
    text-decoration: none;
  }

  a:hover {
      color:#000000; 
      text-decoration:none; 
      cursor:pointer;  
  }
`;

export default Wrapper;
