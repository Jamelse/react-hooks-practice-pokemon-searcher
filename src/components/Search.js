import React from "react";

function Search({currentSearch, onSearchChange}) {
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={currentSearch} onChange={(e) => onSearchChange(e.target.value)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
