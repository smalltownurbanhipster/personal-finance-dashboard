import React from 'react';

const Expenses: React.FC = () => {
  const expenses = [
    { id: 1, name: 'Groceries', amount: 120.5, date: '2024-12-15' },
    { id: 2, name: 'Electricity Bill', amount: 75.3, date: '2024-12-10' },
    { id: 3, name: 'Internet', amount: 50.0, date: '2024-12-05' },
  ];

  return (
    <div>
      <h2 className="text-accentPink text-3xl font-bold mb-4">Expenses</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-secondary text-accentCyan">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="hover:bg-[#2c2f48]">
              <td className="px-4 py-2">{expense.name}</td>
              <td className="px-4 py-2">{expense.amount}</td>
              <td className="px-4 py-2">{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Expenses;
