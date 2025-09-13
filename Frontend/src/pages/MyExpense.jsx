import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Menu, X, Search } from "lucide-react";
import OneExpense from "../components/oneExpense";
import { useNavigate } from "react-router-dom";

const MyExpense = () => {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterOptions = ["All", "Personal", "Group", "Instant"];

  const expenses = [
    { title: "Dinner with friends", type: "Group", time: "10:10 PM", amount: "210" },
    { title: "Kashmir Trip", type: "Group", time: "3:00 PM", amount: "1200" },
    { title: "Shopping", type: "Personal", time: "3:40 PM", amount: "2000" },
    { title: "Auto Fare", type: "Instant", time: "10:00 AM", amount: "50" },
    { title: "Kashmir Trip", type: "Group", time: "3:00 PM", amount: "1200" },
    { title: "Auto Fare", type: "Instant", time: "10:00 AM", amount: "50" },
    { title: "Shopping", type: "Personal", time: "3:40 PM", amount: "2000" },
    { title: "Dinner with friends", type: "Group", time: "10:10 PM", amount: "210" },
  ];

  // Filtered expenses
  const filteredExpenses =
    selectedFilter === "All"
      ? expenses
      : expenses.filter(
          (expense) =>
            expense.type.toLowerCase() === selectedFilter.toLowerCase()
        );

  // Dynamic total calculation
  const totalAmount = filteredExpenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-white shadow-lg transform transition-transform duration-300 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <Sidebar />
      </div>

      {/* Overlay (mobile only) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-[#003E53] bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 bg-[#E6F2F0] px-4 sm:px-8 lg:px-24 py-6 ml-0 md:ml-64 overflow-y-auto min-h-screen">
        {/* Header */}
        <div className="sticky top-0 bg-[#E6F2F0] z-20 pb-4">
          <div className="flex items-center justify-between mb-4">
            {/* Hamburger (mobile only) */}
            <button
              className="md:hidden p-2 rounded-md bg-white shadow"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Title */}
            <div className="text-2xl sm:text-3xl lg:text-5xl font-bold my-6 text-[#003E53]">
              Expenses
            </div>

            {/* Desktop Add Expense */}
            <button
              onClick={() => navigate("/addexpense")}
              className="hidden sm:flex items-center justify-center gap-2 bg-[#003E53] py-2 px-4 text-white rounded-md font-semibold hover:bg-[#007095] transition"
            >
              <img src="../../images/add.png" alt="Add" className="w-5 h-5" />
              <span>Add new expense</span>
            </button>
          </div>

          {/* Mobile Add Expense */}
          <div className="sm:hidden mb-4">
            <button
              onClick={() => navigate("/addexpense")}
              className="w-full flex items-center justify-center gap-2 bg-[#003E53] py-2 px-4 text-white rounded-md font-semibold hover:bg-[#007095] transition"
            >
              <img src="../../images/add.png" alt="Add" className="w-5 h-5" />
              Add new expense
            </button>
          </div>

          {/* Search + Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Bar */}
            <div className="flex items-center w-full sm:w-[60%] h-11 rounded-lg border border-gray-300 bg-white px-3 shadow-sm">
              <Search className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search Expenses"
                className="w-full outline-none bg-transparent text-[#003E53] placeholder-gray-400 text-sm sm:text-base"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center justify-center w-full sm:w-[40%] h-11 rounded-lg border border-gray-300 bg-white px-1 py-1 shadow-sm">
              {filterOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedFilter(option)}
                  className={`mx-1 flex-1 h-full px-3 rounded-md text-sm sm:text-base transition-colors ${
                    selectedFilter === option
                      ? "bg-slate-100 text-[#003E53] font-medium"
                      : "text-[#003E53] hover:bg-slate-50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Expenses Section */}
        <div className="text-[#003E53] font-semibold mt-8 mb-2">
          Your Expenses
        </div>

        {filteredExpenses.length > 0 ? (
          filteredExpenses.map((expense, index) => (
            <div key={index} className="grid grid-cols-1">
              <OneExpense
                title={expense.title}
                type={expense.type}
                time={expense.time}
                amount={expense.amount}
              />
            </div>
          ))
        ) : (
          <p className="text-[#003E53] mt-4">No expenses found.</p>
        )}

        {/* Dynamic Total Section */}
        <div className="text-white bg-[#003E53] flex justify-between my-5 px-2 py-3 items-center rounded-sm">
          <div className="text-xl font-bold ml-5">Total</div>
          <div className="text-4xl font-bold">
            ${new Intl.NumberFormat("en-US").format(totalAmount)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExpense;
