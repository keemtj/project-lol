import React from "react";
import styled from "styled-components";

type LayoutProps = {
  pos: string;
  children: React.ReactNode;
};

const Layout = ({ pos, children }: LayoutProps) => {
  return <StLayout pos={pos}>{children}</StLayout>;
};

const alignItems = (pos: string) => {
  switch (pos) {
    case "center":
      return "center";
    case "right":
      return "flex-end";
    case "left":
      return "flex-start";
    default:
      return "center";
  }
};

const justifyContent = (pos: string) => {
  switch (pos) {
    case "center":
      return "center";
    case "right":
      return "flex-end";
    case "left":
      return "flex-start";
    default:
      return "center";
  }
};

const StLayout = styled.div<{ pos: string }>`
  display: flex;
  align-items: ${({ pos }) => alignItems(pos)};
  justify-content: ${({ pos }) => justifyContent(pos)};
  width: 100vw;
  height: 100vh;
`;

export default Layout;
