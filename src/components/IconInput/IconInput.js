import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = {
    small: {
      "border-bottom": "1px solid black",
    },
    large: {
      "border-bottom": "3px solid black",
    },
  };
  return (
    <Wrapper style={{ "--width": width + "px", ...styles[size] }}>
      <SearchBar placeholder={placeholder} />
    </Wrapper>
  );
};

const SearchBar = styled.input`
  width: 100%;
  border: 0;
  line-height: 1.5;
  font-weight: 700;
  color: ${COLORS.gray700};
  &:focus {
    outline-offset: 4px;
  }
  &::placeholder {
    font-weight: 300;
  }
  &:hover,
  &:active {
    color: ${COLORS.black};
  }
`;

const Wrapper = styled.form`
  width: var(--width);
  background: red;
`;
export default IconInput;
