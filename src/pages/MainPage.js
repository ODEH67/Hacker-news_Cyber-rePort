import { useEffect } from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import PostHighlight from "../components/PostHighlight";



function MainPage({posts}) {

    useEffect(()=> {
        
    })

	return (
		<>
			<div className="main">
				{/* Hi from main page */}
				<PostHighlight posts={posts} />
			</div>
		</>
	);
}

export default MainPage;

