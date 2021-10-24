import styled, { css } from "styled-components";
import Skeleton from "./common/skeleton";
import HistoryItem from "./historyItem";

type HistoryProps = {
  isLoading: boolean;
  mostLanes: object[];
  mostChampions: object[];
};

const History = ({ isLoading, mostLanes, mostChampions }: HistoryProps) => {
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
        {isLoading ? (
          <StLoadingWrapper>
            <Skeleton shape="long" />
            <Skeleton shape="long" />
            <Skeleton shape="long" />
            <Skeleton shape="long" />
          </StLoadingWrapper>
        ) : (
          <>
            {mostLanes.map((most: object, index: number) => (
              <HistoryItem most={most} key={index} />
            ))}
            {mostChampions
              .slice(0, 7 - mostLanes.length)
              .map((most: object, index: number) => (
                <HistoryItem most={most} key={index} />
              ))}
          </>
        )}
      </StHistory>
    </StArticle2>
  );
};

const StLoadingWrapper = styled.div`
  & > div + div {
    margin-top: 1rem;
  }
`;

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

export default History;
