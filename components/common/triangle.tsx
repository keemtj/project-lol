import React from "react";
import styled, { css } from "styled-components";

type TriangleProps = {
  direction: string;
};

const Triangle = ({ direction }: TriangleProps) => {
  return <StTriangle direction={direction} />;
};

const directions = (direction: string) => {
  switch (direction) {
    case "up":
      return "270deg";
    case "down":
      return "90deg";
    case "right":
      return "0deg";
    case "left":
      return "180deg";
    default:
      return null;
  }
};

const StTriangle = styled.div<{ direction: string }>`
  ${({ direction }) =>
    direction === "right"
      ? css`
          border-left: 0.6rem solid ${({ theme }) => theme.color.chart};
        `
      : css`
          border-left: 0.6rem solid ${({ theme }) => theme.color.text};
        `};
  border-top: 0.5rem solid transparent;
  border-bottom: 0.5rem solid transparent;
  transform: ${({ direction }) => `rotate(${directions(direction)})`};
  position: absolute;
  top: 1rem;
  right: 0.8rem;
`;

export default Triangle;
