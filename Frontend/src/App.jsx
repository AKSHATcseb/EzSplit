import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import LoginSignup from './pages/LoginSignup'
import MyDashboard from './pages/MyDashboard'
import MyExpense from './pages/MyExpense'
import MyGroups from './pages/MyGroups'
import MyFriends from './pages/MyFriends'
import AllNotifications from './pages/MyNotifications'
import AddExpense from './pages/AddExpense'
import GroupDetails from './pages/GroupDetails'
import Settlements from './pages/Settlements'
import AddGroupExpense from './pages/AddGroupExpense'
import CreateNewGroup from './pages/CreateNewGroup'

function App() {
  return (
    <>
      {/* Example: routing setup */}
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/mydashboard" element={<MyDashboard />} />
        <Route path="/myexpense" element={<MyExpense />} />
        <Route path="/mygroups" element={<MyGroups />} />
        <Route path="/myfriends" element={<MyFriends />} />
        <Route path="/allnotifications" element={<AllNotifications />} />
        <Route path="/addexpense" element={<AddExpense />} />
        <Route path="/addgroupexpense" element={<AddGroupExpense />} />
        <Route path="/creategroup" element={<CreateNewGroup />} />
        {/* <Route path="/mygroups/:id" element={<MyGroups />} /> */}
        <Route path="/groupdetails" element={<GroupDetails />} />
        <Route path="/settlements" element={<Settlements />} />
      </Routes>
    </>
  )
}

export default App