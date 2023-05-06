import { Routes, Route, NavLink, Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { useContext } from "react";

function SearchBar() {

    const { handleSearch, query} = useContext(SearchContext);
	//we will have to create a QueryContext, and set the query with [query, setQuery] from the search bar so that we can filter the results on the search page?????
    //maybe, I'm not sure, this is just a note
	
    const navigate = useNavigate()

    const handleSearchFunction = (e) => {
         if(e.key === 'Enter') {          //this will take us to the search page directly to avoid the disappearing search text when hitting 
            navigate('/search')
        } 
    }
    
    const  handelSubmit = (e) => {
        e.preventDefault();
    }

    return (
		<>
        <form onSubmit={handelSubmit}>
			<span className="search-span">Search: </span>
			<input type="text" value={query} onChange={(e)=> handleSearch(e.target.value)} onKeyDown={handleSearchFunction}/>
        </form>
		</>
	);
}

export default SearchBar;
