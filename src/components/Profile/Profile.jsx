import React from 'react';
import profile from './Profile.module.css';
import SendPost from './SendPost/SendPost';
import Post from './Post/Post';

function Profile() {
  return (
    <div className={profile.body}>
      <div className={profile.profile}>
        <div className={profile.photo}>
          <img src={require('./../../img/' + 'user.svg')} alt="" />
        </div>
        <div className={profile.info}>

        </div>
      </div>
      <SendPost />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Profile;
