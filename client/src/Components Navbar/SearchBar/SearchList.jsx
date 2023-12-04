import React from 'react'
import './SearchList.css'
import { FaSearch } from 'react-icons/fa'

function SearchList({TittleArray,setSearchQuery}) {
  return (
    <>
     <div className="Container_SearchList">
        {
            TittleArray.map(m=>{
                return   <p 
                key={m}
                onClick={e=>setSearchQuery(m)}
                className='tittelItem'>
                <FaSearch/>
                {m}
            </p>
            })
        }
        </div> 
    </>
  )
}

export default SearchList
