import { Routes, Route, NavLink, Link, useNavigate,useLocation  } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { useContext,useState,useEffect, useRef } from "react";

function SearchBar() {

    const { handleSearch,query_reset } = useContext(SearchContext);
	//we will have to create a QueryContext, and set the query with [query, setQuery] from the search bar so that we can filter the results on the search page?????
    //maybe, I'm not sure, this is just a note
    const [home_Query, setHome_Query]= useState(query_reset)

    const navigate = useNavigate();
    const location = useLocation();
    const refFocus = useRef();


    // console.log("home_Query",home_Query)

    const handleSearchFunction = (e) => {
        if(e.key === 'Enter') {
            navigate('/search')
            handleSearch(home_Query)
        }
    }

    useEffect(() => {
        if (location.pathname === "/search") {
            refFocus.current.focus()
            handleSearch(home_Query);
            console.log("location.pathname",location.pathname)}
    }, [location,home_Query]);



    const  handelSubmit = (e) => {       //this will take us to the search page directly to avoid the disappearing search text when hitting 
        e.preventDefault();
    }

    return (
		<>
        <form onSubmit={handelSubmit}>
			<span className="search-span">Search: </span>
			<input
            placeholder="search by title, author or url... "
                // autofocus
                ref={refFocus}
                type="text" value={home_Query}
                onChange={(e) => setHome_Query(e.target.value)}
                onKeyDown={handleSearchFunction}/>
        </form>
		</>
	);
}

export default SearchBar;
