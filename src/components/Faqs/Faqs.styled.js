import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 170px;
  @media (max-width: 768px) {
    margin-top: 100px;
  }
  > div {
    .title {
      h2 {
        font-size: 40px;
        font-weight: 500;
        color: #fff200;
        text-align: center;
        @media (max-width: 400px) {
          font-size: 30px;
        }
      }
    }
    .container {
      margin: auto;
      margin-top: 50px;
      .firstrow {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .circle {
          width: 70px;
          height: 70px;
          border: none;
          border-radius: 50%;
          background: #fff200;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #000000;
          font-size: 24px;
          font-weight: 500;
          margin: 15px;
          :hover {
            cursor: pointer;
          }
        }
      }
      .second-row {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        text-align: center;
        .rectangle {
          max-width: 452px;
          width: 100%;
          min-height: 199px;
          padding: 10px;
          background: linear-gradient(
            108.01deg,
            rgba(196, 196, 196, 0.33) -2.19%,
            rgba(196, 196, 196, 0.24) 100%
          );
          border-radius: 4px;
          h3 {
            font-size: 22px;
            font-weight: 500;
            margin-top: 10px;
            margin-bottom: 20px;
          }
          p {
            font-size: 17px;
            font-weight: 400;
            line-height: 1.3;
          }
        }
      }
    }
  }
`;
export default Wrapper;
