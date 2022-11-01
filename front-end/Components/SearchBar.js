import React from 'react'
import { useState, useEffect } from 'react'
import { GiMagnifyingGlass } from 'react-icons/gi'


const SearchBar = (users, setSearchResults) => {

  const handleSubmit = (e) => e.preventDefault() 
  const [searchedUser, setSearchedUser] = useState([])
  // const handleSearchChange = (e) => {
  //   console.log("handle search  users: ",users) 
  //   if( !e.target.value) return setSearchResults(users)
    
  //   //if adding a secondary search term ->  user.username.includes(e.target.value) || user.starid.includes(e.target.value)
  //   //const resultsArray = users.filter(user => user.username.includes(e.target.value))
  //   setSearchResults(resultsArray)
    
  //   const resultsArray = users.filter(user => user.username.includes(e.target.value));
  //}
  const handleChange = e => setSearchTerm(e.target.value);
  useEffect(() => {
    const results = users.filter(o => o.username.includes(searchedUser));
    setSearchResults(results);
  }, [searchedUser]);

 
  return (
    <div>
        
        SearchBar1
        <form className='search' onSubmit={handleSubmit}> 
              <input
                //className={search_input}
                type="text"
                id='search'
                onChange={handleChange}
              />
              <button >
                
                <GiMagnifyingGlass />
              </button>
        </form>
    </div>
  )
}

export default SearchBar