import React from 'react';
import item from './Item.module.css';
import { NavLink } from 'react-router-dom';



function Item(props) {
  return (
    <NavLink className={item.body} to={props.to}>
        <img src={require('./../../../img/' + props.icon)} alt="" />
        <span> {props.name} </span>
    </NavLink>
  );
}

export default Item;
