import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile_Content/Profile_Content";

const App = () => {
  return (
    <div className='back_call'>
    <div className='app-wrapper'>
        < Header />
        <div className='body_cont'>
        <Sidebar />
        <Profile />
        </div>
    </div>
    </div>
  );
}

export default App;
