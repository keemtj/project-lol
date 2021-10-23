import styled from "styled-components";
import Triangle from "./triangle";

const Boundary = () => {
  return (
    <div>
      <div>
        <StActive />
      </div>
      <StTriangleWrapper>
        <Triangle direction="right" />
      </StTriangleWrapper>
    </div>
  );
};

const StActive = styled.div`
  position: absolute;
  top: -0.5rem;
  left: -2rem;
  width: 28.8rem;
  height: 4rem;
  border: 1px dashed ${({ theme }) => theme.color.text};
  border-radius: ${({ theme }) => theme.radius.l};
`;

const StTriangleWrapper = styled.div`
  position: absolute;
  top: 0rem;
  right: -3.4rem;
`;

export default Boundary;
