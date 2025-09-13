import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 👈 get current path

  // Sidebar menu items
  const menuItems = [
    { id: "dashboard", label: "Dashboard", path: "/mydashboard", icon: "../../images/dashboard.png" },
    { id: "expense", label: "Expenses", path: "/myexpense", icon: "../../images/expense.png" },
    { id: "friends", label: "Friends", path: "/myfriends", icon: "../../images/friend.png" },
    { id: "groups", label: "Groups", path: "/mygroups", icon: "../../images/groups.png" },
    { id: "notifications", label: "Notifications", path: "/allnotifications", icon: "../../images/bell.png" },
  ];

  return (
    <div className="w-66 h-screen bg-white ">
      {/* Profile Section */}
      <div className="flex justify-start items-center mx-10 my-5 mt-5 mb-10">
        <div>
          <img className="w-12 rounded-full" src="../../images/ak.jpg" alt="Profile" />
        </div>
        <div>
          <ul>
            <li className="text-sm ml-2">Akshat</li>
          </ul>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div>
        <ul>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path; // 👈 check active by route
            return (
              <li
                key={item.id}
                onClick={() => {
                  navigate(item.path);
                  window.scrollTo(0, 0);
                }}
                className={
                  isActive
                    ? "flex justify-start items-center py-2 my-2 mx-10 bg-[#E6F2F0] cursor-pointer px-3 text-sm text-black rounded-full"
                    : "flex justify-start items-center py-2 my-2 mx-10 rounded-full bg-white cursor-pointer px-3 text-sm hover:bg-[#f2fffd]"
                }
              >
                <img className="w-5 mr-2" src={item.icon} alt={item.label} />
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
