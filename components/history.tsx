import styled, { css } from "styled-components";
import Image from "next/image";
import Boundary from "./common/boundary";

const History = () => {
  const isShow = true;

  return (
    <StArticle2>
      <StIndex>
        <div>최근 30 경기</div>
        <div>승률</div>
        <div>인분</div>
        <div>라인전</div>
        <div>KDA</div>
      </StIndex>
      <StHistory>
        {[1, 2, 3].map((item, index) => (
          <StHistoryItem key={index}>
            <div>
              <Image
                src={"/images/square.png"}
                alt="image"
                width="3.2rem"
                height="3.2rem"
              />
              <div>
                <div>Jungle</div>
                <div>22 경기</div>
              </div>
            </div>
            <div>53%</div>
            <div>1.42</div>
            <div>6.3</div>
            <div>4.21</div>
            {isShow && <Boundary />}
          </StHistoryItem>
        ))}
      </StHistory>
    </StArticle2>
  );
};

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StArticle2 = styled.article`
  width: 25.5rem;
  margin: 0 auto;
`;

const StIndex = styled.nav`
  ${flexCenter}
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.font.size.r};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  & > :nth-child(1) {
    width: 10rem;
  }
  & > :nth-child(2),
  & > :nth-child(3),
  & > :nth-child(4),
  & > :nth-child(5) {
    ${flexCenter}
    width: 4rem;
  }
`;

const StHistory = styled.ul`
  margin-top: 1rem;
`;

const StHistoryItem = styled.li`
  ${flexCenter}
  width: 100%;
  height: 3rem;
  margin: 1rem 0rem;
  & > :nth-child(1) {
    width: 10rem;
    & {
      img {
        width: 3.2rem;
        border-radius: ${({ theme }) => theme.radius.s};
      }
      & > :nth-child(2) {
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        justify-content: space-evenly;
        width: 4rem;
        margin-left: 1rem;
        & > :first-child {
          color: ${({ theme }) => theme.color.text};
          font-size: ${({ theme }) => theme.font.size.m};
          font-weight: ${({ theme }) => theme.font.weight.bold};
        }
        & > :last-child {
          color: ${({ theme }) => theme.color.text};
          font-size: ${({ theme }) => theme.font.size.r};
          font-weight: ${({ theme }) => theme.font.weight.normal};
        }
      }
    }
    & {
      display: flex;
      & > :first-child {
        color: ${({ theme }) => theme.color.text};
        font-size: ${({ theme }) => theme.font.size.m};
        font-weight: ${({ theme }) => theme.font.weight.bold};
      }
      & > :last-child {
        color: ${({ theme }) => theme.color.text};
        font-size: ${({ theme }) => theme.font.size.r};
        font-weight: ${({ theme }) => theme.font.weight.normal};
      }
    }
  }
  & > :nth-child(2),
  & > :nth-child(3),
  & > :nth-child(4),
  & > :nth-child(5) {
    ${flexCenter}
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.font.size.l};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    width: 4rem;
  }
  position: relative;
`;

export default History;
