import React from 'react';
import dialog from './Dialog.module.css';

function Dialog(props) {
  return (
    <div className={dialog.body}>
      {props.name}

    </div>
  );
}

export default Dialog;
