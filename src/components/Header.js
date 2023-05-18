import { createContext,useContext  } from "react";
import SearchBar from "./SearchBar";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import logo2 from "./logo2.png"


function Header() {

	const {handleGoToHome} = useContext(SearchContext)

    return (
			<div className="header">
				<div className="header-left">
					<div className="logo-div">
						{/* //added onClick to go back to first page */}
						<Link className="logo-div" onClick={handleGoToHome} to='/' >		
							<img
								className="logo"
								src={logo2}
								alt=""
							/>
							<h1>Cyber rePort</h1>
						</Link>
					</div>
					{/* <nav>
						<li>new |</li>
						<li>past |</li>
						<li>comments |</li>
						<li>ask |</li>
						<li>show |</li>
						<li>jobs |</li>
						<li>submit</li>
					</nav> */}
				</div>
				<div className="header-right">
					<SearchBar />
					<p>login</p>
				</div>
			</div>
		);
}

export default Header;