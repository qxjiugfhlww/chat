import React from 'react';
import dialogs from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Chat from './Chat/Chat';
import Search from './Search/Search';

function Dialogs() {

  let dialogs_data = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Jack'},
  ]

  let chats_data = [
    {id: 1, message: "213213213213"},
    {id: 2, message: "213213213213"},
    {id: 3, message: "213213213213"},

  ]

  return (
    <div className={dialogs.body}>
      
      <div className={dialogs.dialog}>
        <Search />
        {dialogs_data.map(d => <Dialog id={d.id} name={d.name} />)}
        {/* <Dialog name='Alex' />
        <Dialog name='john' />
        <Dialog name='Jack' /> */}
      </div>

      <div className={dialogs.chat}>
        <Chat user_name = {dialogs_data[0].name} chat_message = {chats_data[0].message}/>
      </div>

    </div>
  );
}

export default Dialogs;
