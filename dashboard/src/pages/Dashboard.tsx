import React from 'react';
import DashboardCard from '../components/DashboardCard';
import ChartCard from '../components/ChartCard';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <DashboardCard title="Income" value="$5000" />
      <DashboardCard title="Expenses" value="$3200" />
      <DashboardCard title="Savings" value="$1800" />
      <ChartCard />
    </div>
  );
};

export default Dashboard;
