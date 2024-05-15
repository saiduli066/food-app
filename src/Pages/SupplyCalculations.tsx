import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const data = [
  { name: "Food", value: 1900 },
  { name: "Hygiene Products", value: 123 },
  { name: "Baby Essentials", value: 89 },
  { name: "Health and Medicine", value: 50 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const SupplyCalculations = () => {
  return (
    <div className="w-full md:w-85 md:h-full">
      <PieChart
        width={window.innerWidth < 768 ? window.innerWidth * 0.6 : 400}
        height={400}
        className="w-full mx-auto"
      >
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={window.innerWidth < 768 ? 80 : 100}
          fill="#8884d8"
          label
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default SupplyCalculations;
