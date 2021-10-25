import React, { useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import Triangle from "./common/triangle";
import { useRouter } from "next/router";
import textUtil from "../util/textUtil";
import { theme } from "../styles/theme";

type MostlanesProps = {
  most: any;
  summoner: string;
  matchCategory: string;
};

const HistoryItem = ({ most, summoner, matchCategory }: MostlanesProps) => {
  const { lane, matchCount, winRate, role, laning, kda, imageUrl, name, key } =
    most;
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);
  const onClickHistoryItem = () => {
    if (key) {
      Router.push(
        {
          pathname: Router.pathname,
          query: {
            summoner,
            matchCategory,
            champion: name,
            lane,
          },
        },
        undefined,
        { shallow: true }
      );
    } else {
      Router.push(
        {
          pathname: Router.pathname,
          query: {
            summoner,
            matchCategory,
            lane,
          },
        },
        undefined,
        { shallow: true }
      );
    }
  };
  const href = `/profile?summoner=${textUtil(summoner)}&matchCategory=SoloRank${
    key ? "&champion=" + textUtil(name) + "&lane=" + lane : "&lane=" + lane
  }`;

  return (
    <StHistoryItem
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      hover={hover}
      active={router.asPath === href}
    >
      <Link href={href} passHref>
        <ItemLink onClick={onClickHistoryItem}>
          <div>
            {imageUrl ? (
              <Image src={imageUrl} alt={name} width={32} height={32} />
            ) : (
              <StImage lane={lane} />
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
          <StTriangleWrapper active={router.asPath === href} hover={hover}>
            <Triangle direction="right" />
          </StTriangleWrapper>
        </ItemLink>
      </Link>
    </StHistoryItem>
  );
};

const StImage = styled.div<{ lane: string }>`
  width: 3.4rem;
  height: 3.4rem;
  background: ${({ lane }) => `url(/images/${lane}.png)`};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50%;
  background-color: ${({ theme }) => theme.color.dropDownActive};
`;

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StHistoryItem = styled.li<{ hover: boolean; active: boolean }>`
  ${flexCenter}
  width: 28.8rem;
  height: 4rem;
  margin-top: 0.5rem;
  cursor: pointer;
  position: relative;
  ${({ active }) =>
    active &&
    css`
      border: 1px dashed ${({ theme }) => theme.color.text};
      border-radius: ${({ theme }) => theme.radius.l};
    `}
  ${({ hover }) =>
    hover &&
    css`
      border: 1px dashed ${({ theme }) => theme.color.text};
      border-radius: ${({ theme }) => theme.radius.l};
    `}
`;

const ItemLink = styled.a`
  ${flexCenter}
  padding: 0rem 1rem;
  width: 28.8rem;
  height: 100%;
  border-radius: inherit;
  & > :nth-child(1) {
    width: 10rem;
    & {
      & > div:first-child {
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
        color: ${({ theme }) => theme.color.text};
        & > :first-child {
          font-size: ${({ theme }) => theme.font.size.m};
          font-weight: ${({ theme }) => theme.font.weight.bold};
        }
        & > :last-child {
          font-size: ${({ theme }) => theme.font.size.r};
          font-weight: ${({ theme }) => theme.font.weight.normal};
        }
      }
    }
    & {
      display: flex;
      color: ${({ theme }) => theme.color.text};
      & > :first-child {
        font-size: ${({ theme }) => theme.font.size.m};
        font-weight: ${({ theme }) => theme.font.weight.bold};
      }
      & > :last-child {
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
`;

const StEllipsis = styled.div`
  width: 5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StTriangleWrapper = styled.div<{ hover: boolean; active: boolean }>`
  ${({ hover, active }) =>
    active || hover
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
  position: absolute;
  top: 0.4rem;
  right: -2rem;
`;

export default HistoryItem;
