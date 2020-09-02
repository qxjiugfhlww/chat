import React from 'react';
import search from './Search.module.css';

function Search() {
  return (
    <div className={search.body}>
      <img src={require('./../../../img/search.svg')} alt=""/>
      <input type="text"/>
    </div>
  );
}

export default Search;
