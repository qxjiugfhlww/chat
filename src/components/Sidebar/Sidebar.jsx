import React from 'react';
import sidebar from './Sidebar.module.css';
import Item from './Item/Item';


function Sidebar() {
  return (
    <div className={sidebar.body}>

      <Item name="Home" icon="home.svg" to='/profile'/>
      <Item name="News" icon="news.svg" to='/news' />
      <Item name="Messages" icon="messages.svg" to='/dialogs' />
      <Item name="Friends" icon="friends.svg" to='/friends' />
      <Item name="Groups" icon="groups.svg" to='/groups' />
      <Item name="Photos" icon="photos.svg" to='/photos' />
      <Item name="Music" icon="music.svg" to='/music' />
      <Item name="Videos" icon="videos.svg" to='/videos' />
      <Item name="Games" icon="games.svg" to='/games'/>

    </div>
  );
}

export default Sidebar;
