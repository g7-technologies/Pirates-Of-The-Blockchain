import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 100px;
  text-align: center;
  padding-bottom: 50px;
  > div {
    .socialIcons {
      padding-top: 10px;
      a {
        text-decoration: none;
        color: #fff200;
        font-size: 40px;
        :not(:first-child) {
          margin-left: 15px;
          @media (max-width: 767px) {
            margin-left: 0;
          }
        }
        @media (max-width: 1024px) {
          font-size: 36px;
        }
      }
    }
  }
  .anchor {
    text-decoration: none;
    color: #ffffff;
  }
  .development {
    margin-top: 5px;
  }
`;

export default Wrapper;
