import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import Boundary from "./common/boundary";

type MostlanesProps = {
  most: any;
};

const HistoryItem = ({ most }: MostlanesProps) => {
  const { lane, matchCount, winRate, role, laning, kda, imageUrl, name, key } =
    most;
  const isShow = true;

  return (
    <StHistoryItem>
      <div>
        {imageUrl ? (
          <Image src={imageUrl} alt={name} width={32} height={32} />
        ) : (
          <Image src={"/images/square.png"} alt={name} width={32} height={32} />
        )}
        <div>
          <StEllipsis>{key ? name : lane}</StEllipsis>
          <div>{matchCount} 경기</div>
        </div>
      </div>
      <div>{winRate.toFixed(0)}%</div>
      <div>{(role / 5).toFixed(1)}</div>
      <div>{laning.toFixed(1)}</div>
      <div>{kda.toFixed(1)}</div>
      {isShow && <Boundary />}
    </StHistoryItem>
  );
};

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
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

const StEllipsis = styled.div`
  width: 5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default HistoryItem;
