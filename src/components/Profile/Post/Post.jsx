import React from 'react';
import post from './Post.module.css';



function Post() {
  return (
    <div className={post.body}>
      <span>Name LastName</span>
      <p className={post.text}>
        123123123123213
      </p>
    </div>
  );
}

export default Post;
