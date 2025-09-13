import React from 'react'
import { useState } from 'react';
import Sidebar from '../components/Sidebar'
import { Menu, X, Search } from "lucide-react";
import Group from '../components/Group';
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Mygroups = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const groups = [
    {
      "name": "Tech Enthusiasts",
      "numberOfMembers": 4,
      "members": [
        { "id": 1, "name": "Alice Johnson", "email": "alice@example.com" },
        { "id": 2, "name": "Bob Smith", "email": "bob@example.com" },
        { "id": 3, "name": "Charlie Brown", "email": "charlie@example.com" },
        { "id": 4, "name": "Diana Prince", "email": "diana@example.com" }
      ],
      "admin": { "id": 1, "name": "Alice Johnson", "email": "alice@example.com" }
    },
    {
      "name": "Book Club",
      "numberOfMembers": 3,
      "members": [
        { "id": 5, "name": "Ethan Lee", "email": "ethan@example.com" },
        { "id": 6, "name": "Fiona Davis", "email": "fiona@example.com" },
        { "id": 7, "name": "George Harris", "email": "george@example.com" }
      ],
      "email": "bookclub@example.com",
      "admin": { "id": 6, "name": "Fiona Davis", "email": "fiona@example.com" }
    },
    {
      "name": "Gaming Squad",
      "numberOfMembers": 5,
      "members": [
        { "id": 8, "name": "Henry Adams", "email": "henry@example.com" },
        { "id": 9, "name": "Ivy Nelson", "email": "ivy@example.com" },
        { "id": 10, "name": "Jack Miller", "email": "jack@example.com" },
        { "id": 11, "name": "Karen White", "email": "karen@example.com" },
        { "id": 12, "name": "Liam Scott", "email": "liam@example.com" }
      ],
      "email": "gamingsquad@example.com",
      "admin": { "id": 10, "name": "Jack Miller", "email": "jack@example.com" }
    },
    {
      "name": "Cooking Club",
      "numberOfMembers": 4,
      "members": [
        { "id": 34, "name": "Hannah Brooks", "email": "hannah@example.com" },
        { "id": 35, "name": "Ian Mitchell", "email": "ian@example.com" },
        { "id": 36, "name": "Julia Ross", "email": "julia@example.com" },
        { "id": 37, "name": "Kyle Edwards", "email": "kyle@example.com" }
      ],
      "email": "cookingclub@example.com",
      "admin": { "id": 34, "name": "Hannah Brooks", "email": "hannah@example.com" }
    }
  ]


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
      <div className="flex-1 bg-[#E6F2F0] px-4 sm:px-8 lg:px-24 py-6">
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
          <div className="text-2xl sm:text-3xl lg:text-5xl font-bold my-6 text-[#003E53]">
            Groups
          </div>

          {/* Desktop Add Friend */}
          <button
            onClick={() => navigate("/creategroup")}
            className="flex items-center justify-center gap-2 bg-[#003E53] py-2 px-4 text-white rounded-md font-semibold hover:bg-[#007095] transition"
          >
            <img src="../../images/add.png" alt="Add" className="w-5 h-5" />
            <span>Create Group</span>
          </button>

        </div>



        {/* Search Bar */}
        <div className="flex items-center w-full max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm">
          <Search className="h-5 w-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search groups"
            className="w-full outline-none bg-transparent text-[#003E53] placeholder-gray-400 text-sm sm:text-base"
          />
        </div>

        {/* Groups Section */}
        <div className="text-[#003E53] font-semibold mt-8 mb-2">
          Your Groups
        </div>

        {/* Make groups full width */}
        <div className="flex flex-col">
          {groups.map((group, index) => (
            <Group
              key={index}
              name={group.name}
              numberOfMembers={group.numberOfMembers}
              admin={group.admin}
              members={group.members}
            />
          ))}
        </div>


      </div>
    </div>
  );
}

export default Mygroups
