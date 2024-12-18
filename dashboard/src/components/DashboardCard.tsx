import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string | number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value }) => {
  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition">
      <h3 className="text-accentPink text-xl font-bold mb-2">{title}</h3>
      <p className="text-2xl font-semibold text-textLight">{value}</p>
    </div>
  );
};

export default DashboardCard;
