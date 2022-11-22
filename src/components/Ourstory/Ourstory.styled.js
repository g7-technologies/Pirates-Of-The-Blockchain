import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 110px;
  text-align: center;
  justify-content: center;
  align-items: center;

  > div {
    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
    .storyimg {
      max-width: 440px;
      width: 100%;
      text-align: center;
      border-radius: 20px;
      img {
        width: 100%;
        border-radius: 20px;
        @media (max-width: 768px) {
          width: 90%;
          margin-bottom: 50px;
        }
      }
    }
    .storydescription {
      display: block;
      padding: 0 100px;
      margin-top: 5%;
      justify-content: center;
      align-items: center;
      @media (max-width: 350px) {
        padding: 0 10px;
        margin-top: 0%;
      }
      .storyTitle {
        display: block;
        align-items: center;
        margin-bottom: 20px;
        text-align: center;
        h3 {
          font-size: 31px;
          font-weight: 500;
          color: #fff200;
          text-align: center;
          @media (max-width: 350px) {
            font-size: 21px;
          }
        }
        .buttonGroups {
          button {
            border: 1px solid #fff200;
            outline: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 500;
            color: #fff200;
            background: #000000;
            padding: 12px 14px;
            cursor: pointer;
            :first-child {
              margin-right: 15px;
            }
          }
          .active {
            color: #000000;
            background: #fff200;
          }
        }
      }
      .storytext {
        font-size: 16px;
        font-weight: 500;
        color: #dfd9d9;
        p {
          line-height: 1.5;
        }
      }
    }
  }
`;

export default Wrapper;
