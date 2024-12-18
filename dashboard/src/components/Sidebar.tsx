import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`bg-primary ${isOpen ? "w-64" : "w-20"} h-screen p-4 fixed text-textLight transition-all`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-4 text-accentCyan"
      >
        {isOpen ? "Collapse" : "Expand"}
      </button>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:text-accentCyan">Dashboard</Link>
        </li>
        <li>
          <Link to="/expenses" className="hover:text-accentCyan">Expenses</Link>
        </li>
        <li>
          <Link to="/reports" className="hover:text-accentCyan">Reports</Link>
        </li>
        <li>
          <Link to="/settings" className="hover:text-accentCyan">Settings</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
