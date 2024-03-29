import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}> 
      <label htmlFor="search">Search</label>
      <input
       type="text"
       id='search'
       role='search'
       placeholder='Serach tasks'
       value={search} //values will store in search variable
       onChange={(e)=>setSearch(e.target.value)} // new value save in setSearch
      />
    </form>
  )
}

export default SearchItem