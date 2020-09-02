import React from 'react';
import profile from './Profile.module.css';
import SendPost from './SendPost/SendPost';
import Post from './Post/Post';

function Profile() {

  let posts_data = [
    {id: 1, name: 'Dan Cooper', post: "first post ..123..."},
    {id: 2, name: 'Dan Cooper', post: "second post ..575..."},
    {id: 3, name: 'Dan Cooper', post: "another post ..1867..."},
    {id: 4, name: 'Dan Cooper', post: "another one post ..7653..."},
    {id: 5, name: 'Dan Cooper', post: "last post ..99..."},


  ]

  return (
    <div className={profile.body}>
      <div className={profile.profile}>
        <div className={profile.photo}>
          {/* <img src={require('./../../img/' + 'user.svg')} alt="" /> */}
        </div>
        <div className={profile.info}>

        </div>
      </div>
      <SendPost />
      {posts_data.map(p => <Post id={p.id} name={p.name} post={p.post} />)}
    </div>
  );
}

export default Profile;
