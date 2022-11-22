import React from "react";
import { Wrapper } from "./Container.styled";
import PropTypes from "prop-types";

const Container = ({ children, dflex, between, center, around }) => {
  return (
    <Wrapper dflex={dflex} between={between} center={center} around={around}>
      {children}
    </Wrapper>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
