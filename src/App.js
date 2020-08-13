import React from 'react';
import app from './App.module.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <div className={app.body}>
      <Header />
      <div className={app.content}>
        <Sidebar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
