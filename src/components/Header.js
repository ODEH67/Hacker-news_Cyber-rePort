import SearchBar from "./SearchBar";
import { Routes, Route, NavLink, Link } from "react-router-dom";

function Header() {
    return (
			<div className="header">
				<div className="header-left">
					<div className="logo-div">
						<Link className="logo-div" to='/'>
							<img
								className="logo"
								src="https://news.ycombinator.com/y18.gif"
								alt=""
							/>
							<h1>Hacker News</h1>
						</Link>
					</div>
					<nav>
						<li>new |</li>
						<li>past |</li>
						<li>comments |</li>
						<li>ask |</li>
						<li>show |</li>
						<li>jobs |</li>
						<li>submit</li>
					</nav>
				</div>
				<div className="header-right">
					<SearchBar />
					<p>login</p>
				</div>
			</div>
		);
}

export default Header;