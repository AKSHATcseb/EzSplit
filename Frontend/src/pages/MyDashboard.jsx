import React from 'react'
import { useState } from 'react';
import Friend from '../components/friend'
import Sidebar from '../components/Sidebar'
import { Menu, X, Search } from "lucide-react";
import RequestedFriend from '../components/RequestedFriend';

const MyFriends = () => {

    const friends = [
        {
            "name": "Alice Johnson",
            "username": "alicej",
            "image": "images/alice.jpg",
            "email": "alice@example.com",
            "password": "alice123",
            "friendList": ["bobk", "charliet", "davidp"],
            "friendRequests": ["graceh"],
            "sentRequest": ["helenm"]
        },
        {
            "name": "Bob King",
            "username": "bobk",
            "image": "images/bob.jpg",
            "email": "bob@example.com",
            "password": "bob123",
            "friendList": ["alicej", "davidp", "helenm"],
            "friendRequests": ["charliet"],
            "sentRequest": ["frankl"]
        },
        {
            "name": "Charlie Turner",
            "username": "charliet",
            "image": "images/charlie.jpg",
            "email": "charlie@example.com",
            "password": "charlie123",
            "friendList": ["alicej", "frankl"],
            "friendRequests": ["bobk"],
            "sentRequest": ["davidp", "graceh"]
        },
        {
            "name": "David Park",
            "username": "davidp",
            "image": "images/david.jpg",
            "email": "david@example.com",
            "password": "david123",
            "friendList": ["alicej", "bobk"],
            "friendRequests": ["charliet"],
            "sentRequest": ["isabellaw"]
        },
        {
            "name": "Emma Wilson",
            "username": "emmaw",
            "image": "images/emma.jpg",
            "email": "emma@example.com",
            "password": "emma123",
            "friendList": ["graceh", "isabellaw"],
            "friendRequests": ["frankl"],
            "sentRequest": ["bobk"]
        }
    ]

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen">
            {/* Sidebar Container */}
            <div className="hidden md:block w-64">
                {/* Sidebar with sticky positioning */}
                <div className="sticky top-0 h-screen w-64 bg-white shadow-lg">
                    <Sidebar />
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 md:hidden ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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
                        Friends
                    </div>

                    {/* Desktop Add Friend */}
                    <button className="flex items-center justify-center gap-2 bg-[#003E53] py-2 px-4 text-white rounded-md font-semibold hover:bg-[#007095] transition">
                        <img src="../../images/add.png" alt="Add" className="w-5 h-5" />
                        <span>Add Friend</span>
                    </button>

                </div>

                {/* Mobile Add Friend */}
                <div className="sm:hidden mb-4">
                    <button className="w-full bg-[#003E53] py-2 px-4 text-white rounded-md font-semibold">
                        <img src="../../images/add.png" alt="Add" className="w-5 h-5" />
                        Add Friend
                    </button>
                </div>

                {/* Search Bar */}
                <div className="flex items-center w-full max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm">
                    <Search className="h-5 w-5 text-[#003E53] mr-2" />
                    <input
                        type="text"
                        placeholder="Search friends"
                        className="w-full outline-none bg-transparent text-[#003E53] placeholder-gray-400 text-sm sm:text-base"
                    />
                </div>

                {/* Friends Section */}
                <div className="text-[#003E53] font-semibold mt-8 mb-2">
                    Your Friends
                </div>

                <div className="max-h-[600px] overflow-y-auto">
                    <div className="grid grid-cols-3 gap-2">
                        {friends.map((friend, index) => (
                            <Friend
                                key={index}
                                name={friend.name}
                                username={friend.username}
                                image={friend.image}
                                email={friend.email}
                            />
                        ))}
                    </div>
                </div>

                {/* Pending Requests Section */}
                <div className="text-[#003E53] font-semibold mt-10 mb-2">
                    Pending Requests
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-1">
                    {friends.map((friend, index) => (
                        <RequestedFriend
                            key={index}
                            name={friend.name}
                            username={friend.username}
                            image={friend.image}
                            email={friend.email}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyFriends