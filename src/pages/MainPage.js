import { useEffect } from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import PostHighlight from "../components/PostHighlight";
import Footer from "../components/Footer";
import  Pagination  from "../components/Pagination";




function MainPage({posts}) {


	return (
		<>
			<div className="main">
				{/* Hi from main page */}
				<PostHighlight/>
				<Pagination/>
				<Footer/>
			</div>
		</>
	);
}

export default MainPage;

