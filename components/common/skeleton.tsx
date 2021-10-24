import React from "react";
import styled from "styled-components";

type SkeletonProps = {
  shape: string;
};

const Skeleton = ({ shape }: SkeletonProps) => {
  return <StSkeleton shape={shape} />;
};

const widthStyle = (shape: string) => {
  switch (shape) {
    case "short":
      return "10rem";
    case "wide":
      return "17.4rem";
    case "long":
      return "24.6rem";
    default:
      return null;
  }
};

const heightStyle = (shape: string) => {
  switch (shape) {
    case "short":
      return "2rem";
    case "wide":
      return "100%";
    case "long":
      return "3rem";
    default:
      return null;
  }
};

const StSkeleton = styled.div<{ shape: string }>`
  width: ${({ shape }) => widthStyle(shape)};
  height: ${({ shape }) => heightStyle(shape)};
  background-color: ${({ theme }) => theme.color.skeleton};
  border-radius: ${({ theme }) => theme.radius.m};
`;

export default Skeleton;
