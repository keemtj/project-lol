import { theme } from "../styles/theme";
import dateUtil from "../util/dataUtil";

const chartConfig = (tierHistory: any) => {
  const data: any = {
    labels: Array.from(tierHistory, (history: any) => history.leaguePoint),
    datasets: [
      {
        data: tierHistory.map(
          ({ leaguePoint, updated }: any): { x: number; y: number } => ({
            x: updated,
            y: leaguePoint,
          })
        ),
        fill: false,
        backgroundColor: theme.color.chart,
        borderColor: theme.color.chartBorder,
        borderWidth: 1,
        segment: {
          borderColor: theme.color.chart,
        },
        spanGaps: false,
      },
    ],
  };

  const options: any = {
    legend: { display: false },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    radius: 0,
    animation: false,
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      legend: false,
      title: {
        display: false,
        text: "tier history",
      },
      tooltip: {
        enabled: true,
        title: false,
        events: ["mousemove", "click"],
        callbacks: {
          title() {},
          beforeLabel(ctx: any) {
            return `${tierHistory[ctx.dataIndex].tier} ${
              tierHistory[ctx.dataIndex].rank
            }`;
          },
          label(ctx: any) {
            return `${ctx.label} LP`;
          },
          afterLabel(ctx: any) {
            return `${dateUtil(tierHistory[ctx.dataIndex].updated)}`;
          },
        },
        backgroundColor: "transparent",
        bodyColor: theme.color.text,
        bodyFont: {
          weight: theme.font.weight.normal,
        },
        bodyAlign: "center",
        caretSize: 0,
        displayColors: false,
      },
    },
  };

  return { data, options };
};

export default chartConfig;
