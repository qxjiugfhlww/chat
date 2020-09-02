import React from 'react';
import chat from './Chat.module.css';

function Chat(props) {
  return (
    <div className={chat.body}>
     {props.user_name}
     {props.chat_message}
    </div>
  );
}

export default Chat;
