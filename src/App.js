
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import { useEffect, useState, CSSProperties, useContext } from 'react';
import HashLoader from "react-spinners/HashLoader";
import Header from './components/Header';
import { SearchContext } from '../src/context/SearchContext';


function App() {

	const { loading } = useContext(SearchContext);

 
	//let [loading, setLoading] = useState(true);

	//const { DataFetch, ...state} = useContext(SearchContextProvider)

	//I am not sure we will need the setPosts, we can get the data we need directly from the data sent by the fetch
	//const [posts, setPosts] = useState([]);
	// const DataFetch = async () => {
	// 	try {
	// 		const response = await fetch(
	// 			`http://hn.algolia.com/api/v1/search?tags=(story,poll)&hitsPerPage=30&query=react`
	// 		);
	// 		//console.log(response);

	// 		if (!response.ok) {
	// 			throw new Error(`Request failed, status: ${response.status}`);
	// 		}

	// 		const data = await response.json();
	// 		setLoading(false);
	// 		console.log("data", data);
	// 		setPosts(data.hits);
	// 	} catch (error) {
	// 		console.log(error.message);
	// 	}

	// 	console.log("posts", posts);
	// };

	// useEffect(() => {
	// 	DataFetch();
	// }, []);

	//   useEffect(() => {
	// 		DataFetch(`${API_ENDPOINT}&query=${state.query}&page=${state.page}`);
	// 	}, [state.query, state.page]);

	return (
		<>
			<Header />
			 {loading ? (
				<HashLoader
					color="#ff6600"
					cssOverride={{ margin: "40vh auto" }}
					loading
					size={50}
				/>
			) : (
				<> 
					<Routes>
						{/* <Route path="/" element={<MainPage posts={posts} />} /> */}
						<Route path="/" element={<MainPage />} />
						<Route path="/search" element={<SearchPage />} />
						<Route
							path="*"
							element={<h1 className="not-found">Error 404 Not Found</h1>}
						/>
					</Routes>
				</>
			)}
		</>
	);
}

export default App;
