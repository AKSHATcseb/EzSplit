import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateGroup = () => {

    const navigate = useNavigate()

  const [groupTitle, setGroupTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [error, setError] = useState("");

  // Example friends list
  const friends = [
    { id: 1, name: "Alice", img: "https://i.pravatar.cc/40?img=1" },
    { id: 2, name: "Bob", img: "https://i.pravatar.cc/40?img=2" },
    { id: 3, name: "Charlie", img: "https://i.pravatar.cc/40?img=3" },
    { id: 4, name: "David", img: "https://i.pravatar.cc/40?img=4" },
  ];

  const toggleFriend = (id) => {
    setSelectedFriends((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!groupTitle.trim()) {
      setError("Please enter a group name.");
      return;
    }
    if (selectedFriends.length === 0) {
      setError("Please select at least one friend to add to the group.");
      return;
    }

    setError("");

    const groupData = {
      title: groupTitle,
      description,
      members: selectedFriends,
    };

    console.log(groupData);
    alert("Group Created Successfully!");

    // reset fields
    setGroupTitle("");
    setDescription("");
    setSelectedFriends([]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6 mt-20">
      <h2 className="text-xl font-semibold mb-4 text-[#003E53]">Create New Group</h2>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 text-sm text-red-600 bg-red-100 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Group Title */}
        <div>
          <label className="block text-sm font-medium text-[#003E53] mb-1">
            Group Name
          </label>
          <input
            type="text"
            placeholder="e.g., Weekend Trip"
            value={groupTitle}
            onChange={(e) => setGroupTitle(e.target.value)}
            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#003E53]"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-[#003E53] mb-1">
            Description (optional)
          </label>
          <textarea
            placeholder="Add a description for the group..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-md px-3 py-2 text-sm h-24 focus:outline-none focus:ring-2 focus:ring-[#003E53]"
          ></textarea>
        </div>

        {/* Select Friends */}
        <div>
          <label className="block text-sm font-medium text-[#003E53] mb-2">
            Add Friends
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {friends.map((friend) => (
              <div
                key={friend.id}
                onClick={() => toggleFriend(friend.id)}
                className={`flex items-center p-2 border rounded-lg cursor-pointer transition ${
                  selectedFriends.includes(friend.id)
                    ? "bg-blue-100 border-[#003E53]"
                    : "hover:bg-gray-100"
                }`}
              >
                <img
                  src={friend.img}
                  alt={friend.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-sm">{friend.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
        onClick={() => navigate("/mygroups")}
          type="submit"
          className="w-full bg-[#003E53] text-white font-semibold py-3 rounded-md hover:bg-[#006485] transition"
        >
          Create Group
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
