import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Menu, X, Search } from "lucide-react";
import OneExpense from "../components/oneExpense";
import ExpenseSplitDetails from "../components/ExpenseSplitDetails";
import { useNavigate } from "react-router-dom";


const GroupDetails = () => {

    const navigate = useNavigate()

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("All");

    const filterOptions = ["All", "Created", "Owe"];

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 md:static md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
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
            <div className="flex-1 bg-slate-100 px-4 sm:px-8 lg:px-24 py-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    {/* Hamburger (mobile only) */}
                    <button
                        className="md:hidden p-2 rounded-md bg-white shadow"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>

                    {/* Title */}
                    <div className="text-2xl sm:text-2xl lg:text-3xl font-bold my-6 text-[#003E53]">
                        Group name
                    </div>

                    {/* Desktop Add Expense */}
                    <button onClick={() => navigate("/addgroupexpense")} className="flex items-center justify-center gap-2 bg-[#003E53] py-2 px-4 text-white rounded-md font-semibold hover:bg-[#003E53] transition">
                        <img src="../../images/add.png" alt="Add" className="w-5 h-5" />
                        <span>Add new expense</span>
                    </button>
                </div>

                {/* Search + Filter */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    {/* Search Bar (70%) */}
                    <div className="flex items-center w-full sm:w-[70%] h-11 rounded-lg border border-gray-300 bg-white px-3 shadow-sm">
                        <Search className="h-5 w-5 text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search friends"
                            className="w-full outline-none bg-transparent text-[#003E53] placeholder-gray-400 text-sm sm:text-base"
                        />
                    </div>

                    {/* Filter Tabs (30%) */}
                    <div className="flex items-center justify-center w-full sm:w-[30%] h-11 rounded-lg border border-gray-300 bg-white px-1 py-1 shadow-sm">
                        {filterOptions.map((option) => (
                            <button
                                key={option}
                                onClick={() => setSelectedFilter(option)}
                                className={`mx-1 flex-1 h-full px-3 rounded-md text-sm sm:text-base transition-colors ${selectedFilter === option
                                        ? "bg-slate-100 text-[#003E53] font-medium"
                                        : "text-[#003E53] hover:bg-slate-50"
                                    }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>




                {/* Friends Section */}
                <div className="text-[#003E53] font-semibold mt-8 mb-2">
                    Your Friends
                </div>
                <div className="grid grid-cols-1">
                    <ExpenseSplitDetails/>
                    <ExpenseSplitDetails/>
                    <ExpenseSplitDetails/>
                    <ExpenseSplitDetails/>
                    <ExpenseSplitDetails/>
                </div>
            </div>
            
        </div>
    );
}

export default GroupDetails
