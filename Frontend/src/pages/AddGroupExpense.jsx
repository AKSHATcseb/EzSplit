import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddExpense = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food & Drink");
  const [notes, setNotes] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [error, setError] = useState("");

  // Example group members
  const members = [
    { id: 1, name: "Alice", img: "https://i.pravatar.cc/40?img=1" },
    { id: 2, name: "Bob", img: "https://i.pravatar.cc/40?img=2" },
    { id: 3, name: "Charlie", img: "https://i.pravatar.cc/40?img=3" },
    { id: 4, name: "David", img: "https://i.pravatar.cc/40?img=4" },
  ];

  const toggleMember = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title.trim()) {
      setError("Please enter a title.");
      return;
    }
    if (!amount || parseFloat(amount) <= 0) {
      setError("Please enter a valid amount.");
      return;
    }
    if (!category) {
      setError("Please select a category.");
      return;
    }
    if (selectedMembers.length === 0) {
      setError("Please select at least one member for the group expense.");
      return;
    }

    setError(""); // clear error if all good

    const expenseData = {
      type: "Group",
      title,
      amount,
      category,
      notes,
      selectedMembers,
    };

    console.log(expenseData);
    alert("Expense Added Successfully!");

    // reset fields
    setTitle("");
    setAmount("");
    setCategory("Food & Drink");
    setNotes("");
    setSelectedMembers([]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6 mt-20">
      <h2 className="text-xl font-semibold mb-4 text-[#003E53]">Add Group Expense</h2>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 text-sm text-red-600 bg-red-100 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-[#003E53] mb-1">
            Title
          </label>
          <input
            type="text"
            placeholder="e.g., Dinner with friends"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#003E53]"
          />
        </div>

        {/* Amount + Category */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-[#003E53] mb-1">
              Amount
            </label>
            <input
              type="number"
              placeholder="$ 0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#003E53]"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-[#003E53] mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#003E53]"
            >
              <option>Food & Drink</option>
              <option>Travel</option>
              <option>Shopping</option>
              <option>Entertainment</option>
            </select>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-[#003E53] mb-1">
            Notes (optional)
          </label>
          <textarea
            placeholder="Add a description..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full border rounded-md px-3 py-2 text-sm h-24 focus:outline-none focus:ring-2 focus:ring-[#003E53]"
          ></textarea>
        </div>

        {/* Select Members */}
        <div>
          <label className="block text-sm font-medium text-[#003E53] mb-2">
            Select Members
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {members.map((member) => (
              <div
                key={member.id}
                onClick={() => toggleMember(member.id)}
                className={`flex items-center p-2 border rounded-lg cursor-pointer transition ${
                  selectedMembers.includes(member.id)
                    ? "bg-blue-100 border-[#003E53]"
                    : "hover:bg-gray-100"
                }`}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-sm">{member.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
        onClick={() => navigate("/groupdetails")}
          type="submit"
          className="w-full bg-[#003E53] text-white font-semibold py-3 rounded-md hover:bg-[#006485] transition"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
