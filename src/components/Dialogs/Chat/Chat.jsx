import React from 'react';
import chat from './Chat.module.css';

import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from './../../../redux/state';

function Chat(props) {


  let updateMessage = (e) => {
    props.dispatch(updateNewMessageBodyActionCreator(e.target.value));
  }
  let sendMessage = (e) => {
    props.dispatch(sendMessageActionCreator(e.target.value));
    props.dispatch(updateNewMessageBodyActionCreator(""));
  }
  console.log( props.dialogsPage.chats_data)
  return (
    <div className={chat.body}>
      <textarea onChange={updateMessage} value={props.dialogsPage.newMessageBody} placeholder="Enter your message here..." ></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
