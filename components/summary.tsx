import { useState } from "react";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import Triangle from "./common/triangle";
import { theme } from "../styles/theme";
import Skeleton from "./common/skeleton";

type SummaryProps = {
  isLoading: boolean;
  summoner: string;
  matchCategory: string;
  kda: number;
  laning: number;
  role: number;
};

const Summary = ({
  isLoading,
  summoner,
  matchCategory,
  kda,
  laning,
  role,
}: SummaryProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const onClickDropDown = () => {
    setOpen(!open);
  };

  const onClickDropDownItem = (e: any) => {
    e.preventDefault();
    router.push({
      pathname: "/profile",
      query: {
        summoner,
        matchCategory: e.target.innerText,
      },
    });
  };

  return (
    <>
      <StH2>{summoner}</StH2>
      <StMatchSelectBox onClick={onClickDropDown}>
        <div>{matchCategory}</div>
        <Triangle direction={open ? "up" : "down"} />
        {open && (
          <StDropDownBox>
            <StDropDownItem>
              <a
                onClick={onClickDropDownItem}
                style={{
                  backgroundColor:
                    router.query.matchCategory === "Normal"
                      ? theme.color.dropDownActive
                      : theme.color.dropDownBgColor,
                }}
              >
                Normal
              </a>
            </StDropDownItem>
            <StDropDownItem>
              <a
                onClick={onClickDropDownItem}
                style={{
                  backgroundColor:
                    router.query.matchCategory === "SoloRank"
                      ? theme.color.dropDownActive
                      : theme.color.dropDownBgColor,
                }}
              >
                SoloRank
              </a>
            </StDropDownItem>
            <StDropDownItem>
              <a
                onClick={onClickDropDownItem}
                style={{
                  backgroundColor:
                    router.query.matchCategory === "FreeRank"
                      ? theme.color.dropDownActive
                      : theme.color.dropDownBgColor,
                }}
              >
                FreeRank
              </a>
            </StDropDownItem>
          </StDropDownBox>
        )}
      </StMatchSelectBox>
      <StArticle>
        <StAverageBox>
          {isLoading ? (
            <Skeleton shape="short" />
          ) : (
            <StAverageItem>
              <div>{role.toFixed(0) === "0" ? "-" : (role / 5).toFixed(1)}</div>
              <div>인분</div>
            </StAverageItem>
          )}
          {isLoading ? (
            <Skeleton shape="short" />
          ) : (
            <StAverageItem>
              <div>
                {laning === 0 ? "-" : laning.toFixed(1)}:
                {10 - laning === 10 ? "-" : (10 - laning).toFixed(1)}
              </div>
              <div>라인전</div>
            </StAverageItem>
          )}
          {isLoading ? (
            <Skeleton shape="short" />
          ) : (
            <StAverageItem>
              <div>{kda === 0 ? "-" : kda.toFixed(2)}</div>
              <div>KDA</div>
            </StAverageItem>
          )}
        </StAverageBox>
        <StTearHistory>
          {isLoading ? <Skeleton shape="wide" /> : <div>line chart</div>}
        </StTearHistory>
      </StArticle>
    </>
  );
};

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StH2 = styled.h2`
  width: 28.8rem;
  height: 5.7rem;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.font.size.title};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  white-space: nowrap;
`;

const StMatchSelectBox = styled.div`
  margin-top: 2.5rem;
  padding: 0.9rem 0.8rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.color.selectBorder};
  border-radius: ${({ theme }) => theme.radius.m};
  width: 12.2rem;
  height: 3rem;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  cursor: pointer;
  position: relative;
`;

const StDropDownBox = styled.ul`
  margin-top: 0.4rem;
  padding: 0.8rem 0rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius.m};
  background-color: ${({ theme }) => theme.color.dropDownBgColor};
  width: 12rem;
  height: 11.2rem;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 3rem;
  left: 0;
`;

const StDropDownItem = styled.li`
  width: 12rem;
  height: 3.2rem;
  cursor: pointer;
  & a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 0rem 0.8rem;
    &:hover {
      background-color: ${({ theme }) => theme.color.dropDownActive};
    }
  }
`;

const StArticle = styled.article`
  display: flex;
  margin-top: 5rem;
`;

const StAverageBox = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 12rem;
  height: 8rem;
  color: ${({ theme }) => theme.color.text};
`;

const StAverageItem = styled.li`
  ${flexCenter}
  width: 100%;
  padding-left: 0.4rem;
  & > div {
    width: 6rem;
  }
  & > div:first-child {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.font.size.xl};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
  & > div:last-child {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: ${({ theme }) => theme.font.weight.normal};
    padding-left: 0.4rem;
  }
`;

const StTearHistory = styled.div`
  ${flexCenter}
  margin-left: 1.6rem;
  width: 100%;
  height: 9rem;
`;

export default Summary;
