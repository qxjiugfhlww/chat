import React from 'react';
import sendPost from './SendPost.module.css';

import {addPostActionCreator, updateTextPostActionCreator} from './../../../redux/state';

function SendPost(props) {


  let newPostRef = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let updatePost = () => {
    let text = newPostRef.current.value;
    props.dispatch(updateTextPostActionCreator(text));
  }

  return (
    <div className={sendPost.body}>
      <span>Name Lastname</span>
      <textarea onChange={updatePost} value={props.profilePage.newPost} ref={newPostRef} placeholder='Type post here...'></textarea>
      <button onClick={ addPost }>Add</button>
    </div>
  );
}

export default SendPost;
