import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const TransactionsGraphic = () => {
  const data = [
    { name: "Jan", amt: 26.5 },
    { name: "Feb", amt: 27 },
    { name: "Mar", amt: 26 },
    { name: "Apr", amt: 25.5 },
    { name: "May", amt: 26 },
    { name: "Jun", amt: 25 },
  ];

  return (
    <div className="transactions-graphics">
      <div className="graphics-title">Transactions last year</div>
      <div className="graphics-tab-group">
        <div className="graphics-tab-single active-tab">monthly</div>
        <div className="graphics-tab-single">daily</div>
      </div>
      <div className="graphics-container">
        <ResponsiveContainer width="100%" height={180}>
          <LineChart
            data={data}
            margin={{ top: 0, right: 0, bottom: 0, left: -32 }}
          >
            <XAxis
              dataKey="name"
              padding={{ left: 16, right: 16 }}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              type="number"
              domain={["dataMin - 1", "dataMax"]}
              padding={{ bottom: 16, top: 16 }}
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Tooltip />
            <Line
              type="monotone"
              strokeWidth={2}
              dataKey="amt"
              stroke="#8884d8"
              dot={false}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionsGraphic;
