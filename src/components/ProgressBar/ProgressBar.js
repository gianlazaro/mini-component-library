/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  let Component;
  if (size === "small") {
    Component = SmallBar;
  } else if (size === "medium") {
    Component = MediumBar;
  } else {
    Component = LargeBar;
  }
  return (
    <Component
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      size={size}
    >
      <BarFillWrapper>
        <BarFill style={{ "--percentage": value + "%" }} value={value}>
          <VisuallyHidden>{value}</VisuallyHidden>
        </BarFill>
      </BarFillWrapper>
    </Component>
  );
};

const BarWrapper = styled.div`
  width: 370px;
  background: ${COLORS.transparentGray15};
  border-radius: 4px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const SmallBar = styled(BarWrapper)`
  height: 8px;
`;
const MediumBar = styled(BarWrapper)`
  height: 12px;
`;
const LargeBar = styled(BarWrapper)`
  height: 24px;
  padding: 4px;
  border-radius: 8px;
`;

const BarFill = styled.div`
  background: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  width: var(--percentage);
  height: 100%;
`;

const BarFillWrapper = styled.div`
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  /* background: red; */
`;

export default ProgressBar;
