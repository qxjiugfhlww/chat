import React from 'react';
import app from './App.module.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';

import {Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className={app.body}>
      <Header />
      <div className={app.content}>
        <Sidebar />
        <Route path='/dialogs' render={() => <Dialogs /> } />
        <Route path='/profile' render={() => <Profile /> } />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
