import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const {query, setQuery,iserror} = useGlobalContext()
  return (
  <section className='search-section'>
    <h2>Search Your Favourite Movie</h2>
    <form action="#" onSubmit={(e)=>e.preventDefault()}>
      <div>
        <input type='text' plcaholder="Search here " 
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        />
      </div>
    </form>
    <div className='card-error'>
      <p>
        {iserror.show && iserror.msg}
      </p>

    </div>
  </section>
  )
}

export default Search