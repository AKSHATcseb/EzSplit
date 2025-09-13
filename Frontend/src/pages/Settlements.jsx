import React from 'react'
import { useState } from 'react';
import Friend from '../components/friend'
import Sidebar from '../components/Sidebar'
import { Menu, X, Search } from "lucide-react";
import RequestedFriend from '../components/RequestedFriend';
import OneNotification from '../components/OneNotification';
import SettlementsComponent from '../components/SettlementsComponent';

const Settlements = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
                    className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
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
                    {/* Title */}
                    <div className="text-2xl sm:text-3xl lg:text-5xl font-bold my-6">
                        Settlements
                    </div>
                </div>
                
                <div className="grid grid-cols-1">
                    <SettlementsComponent/>
                </div>

            </div>
        </div>
    );
}

export default Settlements
