import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Expenses",
      data: [500, 700, 800, 600, 400],
      borderColor: "#ff6bcb",
      backgroundColor: "rgba(255, 107, 203, 0.2)",
      tension: 0.4,
    },
  ],
};

const ChartCard: React.FC = () => (
  <div className="bg-secondary p-6 rounded-lg shadow-lg">
    <h3 className="text-accentPink text-xl font-bold mb-4">Expense Trends</h3>
    <Line data={data} />
  </div>
);

export default ChartCard;
