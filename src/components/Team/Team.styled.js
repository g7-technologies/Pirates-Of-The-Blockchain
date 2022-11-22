import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 20px 0;
  > div {
    .title {
      margin: 30px 0;
      text-align: center;
      @media (max-width: 768px) {
        margin-bottom: 50px;
      }
      h2 {
        font-size: 40px;
        font-weight: 500;
        color: #fff200;
        margin: 15px;
      }
      p {
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5;
        @media (max-width: 768px) {
          font-size: 14px;
        }
      }
    }
    .team-container {
      width: 100%;
      margin: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      @media (max-width: 1000px) {
        justify-content: space-around;
      }
      .team {
        max-width: 300px;
        width: 100%;
        min-height: 300px;
        margin: 10px;
        margin-top: 30px;
        .flip-card {
          width: 300px;
          height: 290px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner,
        .flip-card:focus .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        .flip-card-front {
          color: #ffffff;
          z-index: 2;
          filter: drop-shadow(0px 4px 34px rgba(121, 103, 103, 0.5));
          p {
            font-size: 24px;
            font-weight: 600;
          }
        }

        .flip-card-back {
          color: #000000;
          background: #fff200;
          transform: rotateY(180deg);
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 10px;
          text-align: center;
          border-radius: 7px;
          h4 {
            font-size: 33px;
            font-weight: 600;
          }
          .subtitle {
            font-size: 15px;
            font-weight: 600;
            color: #3f3939;
            margin-bottom: 15px;
          }
          p {
            font-size: 13px;
            font-weight: 400;
            line-height: 18px;
          }
        }
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
  }
`;

export default Wrapper;
