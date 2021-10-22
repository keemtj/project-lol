import type { NextPage } from "next";
import styled from "styled-components";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const SoloRank = "SoloRank";
  const { data, error } = useSWR(
    `https://api.kda.ai/kr/api/summoners/hide on bush?matchCategory=${SoloRank}`,
    fetcher
  );
  console.log(data);
  if (error) return <div>에러에러</div>;
  if (!data) return <div>로딩로딩..</div>;
  return (
    <main>
      <StDiv>hi</StDiv>
    </main>
  );
};

const StDiv = styled.div`
  color: ${({ theme }) => theme.color.chart};
`;

export default Home;
