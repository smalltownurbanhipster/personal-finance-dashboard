import React, { useState } from "react";

const AppNavbar: React.FC = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="bg-secondary text-textLight">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="text-accentPink text-xl font-bold">
          Finance Dashboard
        </a>

        {/* Mobile Menu Toggler */}
        <button
          className="md:hidden text-accentPink focus:outline-none"
          onClick={() => setOpenNav(!openNav)}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            openNav ? "block" : "hidden"
          } absolute md:relative top-16 md:top-auto left-0 md:left-auto w-full md:w-auto bg-secondary md:bg-transparent p-4 md:p-0 flex flex-col md:flex-row items-center md:space-x-6`}
        >
          <a
            href="/"
            className="hover:text-accentCyan py-2 md:py-0 text-lg"
          >
            Dashboard
          </a>
          <a
            href="/expenses"
            className="hover:text-accentCyan py-2 md:py-0 text-lg"
          >
            Expenses
          </a>
          <a
            href="/reports"
            className="hover:text-accentCyan py-2 md:py-0 text-lg"
          >
            Reports
          </a>
          <a
            href="/settings"
            className="hover:text-accentCyan py-2 md:py-0 text-lg"
          >
            Settings
          </a>
        </div>

        {/* Profile Button */}
        <a
          href="/profile"
          className="hidden md:inline-block bg-accentPink text-secondary px-4 py-2 rounded-md hover:bg-accentCyan transition"
        >
          Profile
        </a>
      </div>
    </nav>
  );
};

export default AppNavbar;
