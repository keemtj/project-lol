import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

type FormProps = {
  value: string;
  setValue: (form: string) => void;
};

const Form = ({ value, setValue }: FormProps) => {
  const router = useRouter();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: "/profile",
      query: {
        summoner: value,
        matchCategory: "SoloRank",
      },
    });
    setValue("");
  };

  return (
    <StForm onSubmit={onSubmit}>
      <StInput
        type="text"
        placeholder="소환사명을 입력하세요"
        onChange={onChange}
        value={value}
      />
      <StButton type="submit">검색</StButton>
    </StForm>
  );
};

const StForm = styled.form`
  margin-top: 2rem;
  width: 50rem;
  height: 5rem;
  position: relative;
`;

const StInput = styled.input`
  background-color: ${({ theme }) => theme.color.selectBgColor};
  border: 1px solid ${({ theme }) => theme.color.selectBorder};
  border-radius: ${({ theme }) => theme.radius.l};
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  font-size: ${({ theme }) => theme.font.size.xl};
  outline: none;
`;

const StButton = styled.button`
  background-color: ${({ theme }) => theme.color.dropDownBgColor};
  border-radius: ${({ theme }) => theme.radius.m};
  width: 4rem;
  height: 4rem;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  position: absolute;
  top: calc(50% - 2rem);
  right: 0.5rem;
`;

export default Form;
