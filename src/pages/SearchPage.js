import { Routes, Route, NavLink, Link } from "react-router-dom";
import PostHighlight from "../components/PostHighlight";
import FilterMenus from "../components/FilterMenus";
import { SearchContext } from "../context/SearchContext";
import { useContext } from "react";
import  Pagination  from "../components/Pagination";

function SearchPage() {

	const { query } = useContext(SearchContext);
	return (
		<div className="main">
			<FilterMenus/>
			<h2>Search results for: {query}</h2>
			<PostHighlight />
			<Pagination/>
		</div>
	);
}

export default SearchPage;
