import React from 'react';

const OneExpense = ({ title, type, time, amount }) => {
  // Map expense type to Tailwind classes
  const typeColors = {
    Personal: "bg-blue-200 text-blue-800",
    Group: "bg-green-200 text-green-800",
    Instant: "bg-red-200 text-red-800"
  };

  return (
    <div className="cursor-pointer flex justify-between items-center w-full rounded-sm py-5 px-5 h-20 bg-white border border-slate-200 mb-1 ">
      <div className="flex justify-start items-center">
        <ul>
          <li className="font-semibold mb-1">
            {title}
            <span
              className={`rounded-full px-3 py-1 mx-5 text-xs ${
                typeColors[type] || "bg-gray-200 text-gray-800"
              }`}
            >
              {type}
            </span>
          </li>
          <li className="text-slate-600 text-sm">at {time}</li>
        </ul>
      </div>
      <div className="flex justify-center items-end">
        <span className="text-2xl font-bold">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(amount)}
        </span>
      </div>
    </div>
  );
};

export default OneExpense;
