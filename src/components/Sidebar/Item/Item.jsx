import React from 'react';
import item from './Item.module.css';



function Item(props) {
  return (
    <div className={item.body}>
      <img src={require('./../../../img/' + props.icon)} alt=""/>
  <span> { props.name } </span>
    </div>
  );
}

export default Item;
