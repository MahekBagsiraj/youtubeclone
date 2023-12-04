import React, { useState } from 'react'
import './SearchBar.css'
import  { BsMicFill } from "react-icons/bs";
import  { FaSearch } from "react-icons/fa";
import SearchList from './SearchList';

function SearchBar(toUpperCase) {
  const[searchQuery, setSearchQuery] = useState("");
  const[searchListA, setSeachList] = useState(false);
  const TittleArray=["Video1","video2","Animation video","Movie"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()));
  return (
    <>
    <div className='SearchBar_Container'>
        <div className="SearchBar_Container2">
            <div className="search_div">
            <input type='text'  className='iBox_SearchBar' placeholder='Search'
            onChange={e=>setSearchQuery(e.target.value)}
            value={searchQuery}
            onClick={e=>setSeachList(true)}
            />
            <FaSearch className="searchIcon_SearchBar" 
            onClick={e=>setSeachList(false)}
            />
            <BsMicFill className="Mic_SearchBar" />
            {searchQuery &&   searchListA&&
               <SearchList
               setSearchQuery={setSearchQuery}
               TittleArray={TittleArray}
               />
            }
            </div>
        </div>
    </div>
    </>
  );
}

export default SearchBar
