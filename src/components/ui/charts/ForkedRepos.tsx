import type {Repository} from "@/types";
import {calculateMostForkedRepos} from "@/utils";
import {Bar, BarChart, CartesianGrid, XAxis, YAxis} from "recharts";
import {type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "../chart";

const ForkedRepos = ({repositories}: {repositories: Repository[]}) => {
  const mostForkedRepos = calculateMostForkedRepos(repositories);

  const chartConfig = {
    repo: {
      label: "Repository",
      color: "#facb12",
    },
  } satisfies ChartConfig;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Forked Repos</h2>
      <ChartContainer config={chartConfig} className="h-100 w-full">
        <BarChart accessibilityLayer data={mostForkedRepos}>
          <CartesianGrid vertical={false} />
          {/* tickFormatter limits the number of characters we display */}
          <XAxis
            dataKey="repo"
            tickLine={true}
            tickMargin={10}
            axisLine={false}
            tickFormatter={value => value.slice(0, 10)}
          />
          <YAxis dataKey="count" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="count" fill="var(--color-repo)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};
export default ForkedRepos;
