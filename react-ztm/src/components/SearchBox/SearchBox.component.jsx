import React from 'react'
import './SearchBox.style.css'

const SearchBox = ({searchPlaceholder, handleChange}) => {
  
  return (
    <div>
      <input className="search" type="search" placeholder={searchPlaceholder} onChange={handleChange}/>
    </div>
  )
}

export default SearchBox

