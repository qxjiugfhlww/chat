import React from 'react';
import profile from './Profile.module.css';
import SendPost from './SendPost/SendPost';
import Post from './Post/Post';

function Profile(props) {
  return (
    <div className={profile.body}>
      <div className={profile.profile}>
        <div className={profile.photo}>
          {/* <img src={require('./../../img/' + 'user.svg')} alt="" /> */}
        </div>
        <div className={profile.info}>

        </div>
      </div>
      <SendPost profilePage={props.profilePage} dispatch={props.dispatch}/>
      {props.profilePage.posts_data.map(p => <Post id={p.id} name={p.name} post={p.post} />)}
    </div>
  );
}

export default Profile;
