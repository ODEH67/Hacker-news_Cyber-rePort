import { Routes, Route, NavLink, Link, useNavigate } from "react-router-dom";
function SearchBar() {
	//we will have to create a QueryContext, and set the query with [query, setQuery] from the search bar so that we can filter the results on the search page?????
    //maybe, I'm not sure, this is just a note
	
    const navigate = useNavigate()

    const handleSearch = (e) => {
        if(e.key === 'Enter') {
            navigate('/search')
        }
    }
    
    return (
		<>
			<span className="search-span">Search: </span>
			<input type="text" onKeyDown={handleSearch}/>
		</>
	);
}

export default SearchBar;
