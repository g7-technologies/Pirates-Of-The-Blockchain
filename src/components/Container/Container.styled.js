import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  @media (max-width: 575px) {
    padding: 0 10px;
  }
  ${(props) =>
    props.dflex &&
    css`
      display: flex;
    `}
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
    `}
    ${(props) =>
    props.between &&
    css`
      justify-content: space-between;
    `}
    ${(props) =>
    props.around &&
    css`
      justify-content: space-around;
    `}
`;
