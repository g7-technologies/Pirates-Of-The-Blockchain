import styled from "styled-components";

const Wrapper = styled.div`
  background: #000000;
  padding: 15px 0;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 767px) {
      position: relative;
    }
    @media (max-width: 575px) {
      padding: 0 20px;
    }
    .buttonGroups {
      width: auto;
      @media (max-width: 767px) {
        position: fixed;
        left: 0;
        top: 0;
        min-height: 100%;
        display: flex;
        width: 0%;
        flex-direction: column;
        align-items: center;
        background: #000000;
        border-radius: 0 5px 5px 0;
        overflow: hidden;
        transition: 0.3s ease;
        z-index: 9999;
      }
      a {
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
        color: #ffffff;
        padding: 10px;
        width: 100%;
        padding-left: 25px;
      }
      .closeMobileMenu {
        color: #ffffff;
        display: none;
        font-size: 24px;
        border: none;
        background-color: transparent;
        margin-left: auto;
        padding: 30px;
        @media (max-width: 767px) {
          display: block;
        }
      }
    }
    .logo {
      @media (min-width: 767px) {
        margin-right: 20%;
      }
    }
    .mobileMenu,
    .socialMenu {
      display: none;
      border: none;
      font-size: 26px;
      color: #ffffff;
      background-color: transparent;
      @media (max-width: 767px) {
        display: block;
      }
    }
    .socialMenu {
      padding-right: 15px;
    }
    .socialIcons {
      padding-top: 10px;
      padding-right: 15px;
      @media (max-width: 767px) {
        position: absolute;
        right: 0;
        top: 100%;
        margin-top: 15px;
        background: #000000;
        padding: 0;
        width: 80px;
        overflow: hidden;
        transition: 0.3s ease;
      }
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
        @media (max-width: 767px) {
          font-size: 35px;
          display: block;
          text-align: center;
        }
      }
    }
  }
`;

export default Wrapper;
