import React from 'react'
import {useState} from 'react';
const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    function handleOnChange(event){
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    }

  return (
    <div>
      <input
        type="text"
        placeholder="Search for Doctors"
        value={searchTerm}
        onChange={handleOnChange}
      
      />
    </div>
  )
}

export default SearchBar
