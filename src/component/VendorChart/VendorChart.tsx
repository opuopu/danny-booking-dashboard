import { Tooltip } from "antd";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { VendorIncomeChartData } from "../../db";

const VendorChart = () => {
  return (
    <AreaChart
      width={940}
      height={400}
      data={VendorIncomeChartData}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="40%" stopColor="#80B619" stopOpacity={60} />
          <stop offset="95%" stopColor="#FFFFFF" stopOpacity={20} />
        </linearGradient>
      </defs>
      <CartesianGrid
        strokeDasharray="3 3"
        vertical={false}
        horizontal={false}
      />
      <XAxis dataKey="month" />
      <YAxis dataKey="income" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="income"
        stroke="#4C9A29"
        stroke-width="4"
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
};

export default VendorChart;
