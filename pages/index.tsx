import type { NextPage } from "next";
import { useState } from "react";
import styled, { css } from "styled-components";
import Layout from "../components/common/layout";
import Form from "../components/form";

const Home: NextPage = () => {
  const [value, setValue] = useState("");

  return (
    <Layout pos={"center"}>
      <StMain>
        <StTitle>YOUR.GG</StTitle>
        <StTitleXl>소환사를 검색하고 전적을 확인하세요!</StTitleXl>
        <Form value={value} setValue={setValue} />
      </StMain>
    </Layout>
  );
};

const StMain = styled.main`
  margin-top: -20rem;
`;

const displayStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StTitle = styled.h1`
  ${displayStyle};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.font.size.title};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-style: italic;
`;

const StTitleXl = styled.h2`
  ${displayStyle};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export default Home;
