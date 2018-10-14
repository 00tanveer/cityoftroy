import React from "react";
import styled from "styled-components";

const Underline = props => {
  const StyledUnderLine = styled.div`
    height: 0px;
    svg {
      //width: ${props => props.width};
      stroke-dasharray: 1000;
			//opacity: 0;
      stroke-dashoffset: 1000;
      animation: dash 0.7s ease-in forwards;
			transition: all 0.7s ease-in forwards;
    }

    @keyframes dash {
      to {
        stroke-dashoffset: 0;
      }
    }
  `;

  return (
    <StyledUnderLine>
      <svg width="100%" stroke="white" stroke-width="3">
        <path d="M0 0 L300 0" />
      </svg>
    </StyledUnderLine>
  );
};

export default Underline;
