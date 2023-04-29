
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import { useEffect, useState, CSSProperties } from 'react';
import HashLoader from "react-spinners/HashLoader";
import Header from './components/Header';


function App() {
  //later we can pass the loading state down to mainpage and use the spinner just for that, not for the whole page
  let [loading, setLoading] = useState(true);
	
  //I am not sure we will need the setPosts, we can get the data we need directly from the data sent by the fetch
  const [posts, setPosts] = useState([])
  const DataFetch = async () => {

		try {
			const response = await fetch(
				"http://hn.algolia.com/api/v1/search?query=*"
			);
			//console.log(response);

			if (!response.ok) {
				throw new Error(`Request failed, status: ${response.status}`);
			}

			const data = await response.json();
      setLoading(false)
			console.log("data", data);
      //setPosts(data)
		} catch (error) {
			console.log(error.message);
		}

    //console.log('posts',posts)
  
	};

  useEffect(() => {
		DataFetch();
	}, []);


  return (
    <>
    {loading ? <HashLoader color="#ff6600" cssOverride={{}} loading size={50} /> : 
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      <Route path='*' element={<h1 className='not-found'>Error 404 Not Found</h1>}/>
    </Routes></>}
    </>

  );
}

export default App;
