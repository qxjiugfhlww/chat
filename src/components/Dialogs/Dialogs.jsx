import React from 'react';
import dialogs from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Chat from './Chat/Chat';
import Search from './Search/Search';

function Dialogs(props) {



  return (
    <div className={dialogs.body}>
      
      <div className={dialogs.dialog}>
        <Search />
        {/* {props.dialogs_data.map(d => <Dialog id={d.id} name={d.name} />)} */}
        {/* <Dialog name='Alex' />
        <Dialog name='john' />
        <Dialog name='Jack' /> */}
      </div>

      <div className={dialogs.chat}>
        <Chat dialogsPage = {props.dialogsPage} dispatch={props.dispatch}/>
      </div>

    </div>
  );
}

export default Dialogs;
