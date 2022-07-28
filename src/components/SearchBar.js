import React from "react";

function SearchBar({ planeteers }) {
  // const handleChange = () => {
  //   const searchFunction = () => {
  //     let newArray = planeteers.includes({planeteer})
  //   }
  // }
  return (
    <div className="search">
      <input type="text" className="searchTerm" /* onChange={ handleChange } */ />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
