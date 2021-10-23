import Head from "next/head";
import styled from "styled-components";
import Layout from "../../components/common/layout";
import History from "../../components/history";
import Summary from "../../components/summary";
import axios from "axios";

type Props = {
  query: {
    summoner: string;
    matchCategory: string;
  };
};

export async function getServerSideProps({ query }: Props) {
  const res = await axios.get(
    `https://api.kda.ai/kr/api/summoners/${query.summoner}?matchCategory=${query.matchCategory}`
  );
  const data = await res.data;
  return { props: { data } };
}

type ProfileProps = {
  data: {
    name: string;
    kda: number;
    laning: number;
    role: number;
    matchCategory: string;
  };
};

const Profile = (props: ProfileProps) => {
  const { data } = props;

  return (
    <>
      <Head>
        <title>{data.name}님의 프로필 정보</title>
      </Head>
      <Layout pos="center">
        <StMain>
          <StSection>
            <Summary
              summoner={data.name}
              matchCategory={data.matchCategory}
              kda={data.kda}
              laning={data.laning}
              role={data.role}
            />
          </StSection>
          <StBr />
          <StSection>
            <History />
          </StSection>
        </StMain>
      </Layout>
    </>
  );
};

const StMain = styled.main`
  width: 52rem;
  height: 100%;
  padding: 10rem;
`;

const StSection = styled.section`
  width: 31rem;
  height: auto;
`;

const StBr = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.text};
  width: 100%;
  height: 1px;
  margin: 4.5rem 0rem 2rem;
`;

export default Profile;
