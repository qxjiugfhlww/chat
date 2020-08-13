import React from 'react';
import sendPost from './SendPost.module.css';



function SendPost() {
  return (
    <div className={sendPost.body}>
      <span>Name Lastname</span>
      <textarea placeholder='Type post here...'></textarea>
    </div>
  );
}

export default SendPost;
