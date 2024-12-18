import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [currency, setCurrency] = useState('USD');

  return (
    <div className="p-6 bg-secondary rounded-lg shadow-lg">
      <h2 className="text-accentPink text-3xl font-bold mb-4">Settings</h2>
      <div>
        <label htmlFor="currency" className="block text-textLight mb-2">Default Currency</label>
        <select
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="border border-accentPurple rounded p-2 bg-primary text-textLight"
        >
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
