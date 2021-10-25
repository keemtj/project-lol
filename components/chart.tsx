import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import chartConfig from "../config/chartConfig";

type TierHistoryProps = {
  tierHistory: any;
};

const TierHistoryGraph = ({ tierHistory }: TierHistoryProps) => {
  const { data, options } = chartConfig(tierHistory);
  return <StLine data={data} options={options} />;
};

const StLine = styled(Line)`
  width: 100%;
  height: 100%;
  border: none;
`;

export default TierHistoryGraph;
