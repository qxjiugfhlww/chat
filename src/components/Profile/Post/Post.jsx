import React from 'react';
import post from './Post.module.css';



function Post(props) {
  return (
    <div className={post.body}>
      <span>{props.name}</span>
      <p className={post.text}>
        {props.post}
      </p>
    </div>
  );
}

export default Post;
