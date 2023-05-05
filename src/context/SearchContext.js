import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router";

const ACTIONS = {
	SET_LOADING: "SET_LOADING",
	SET_POSTS: "SET_POSTS",
	SET_SEARCH: "SET_SEARCH",
	NEXT_PAGE: "NEXT_PAGE",
	PREV_PAGE: "PREV_PAGE"
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case ACTIONS.SET_POSTS:
			return {
				...state,
				loading: false,
				hits: action.payload.hits,
				nbPages: action.payload.nbPages,
			};
		case ACTIONS.SET_SEARCH:
			return {
				...state,
				query: action.payload,
			};
		case ACTIONS.NEXT_PAGE:
			let nextPage = state.page + 1;
			if (nextPage > state.nbPages - 1) {
				nextPage = 0;
			}
			return {
				...state,
				page: nextPage
			};
		case ACTIONS.PREV_PAGE:
			let prevPage = state.page - 1;
			if (prevPage < 0) {
				prevPage = state.nbPages -1;
			}
			return {
				...state,
				page: prevPage
			};
		default:
			return state;
	}
};

const SearchContext = createContext();
 


export default function SearchContextProvider({ children }) {
     

    const API_ENDPOINT = "https://hn.algolia.com/api/v1/search_by_date?tags=story";

	const initialState = {
		loading: true,
		hits: [],
		page: 0,
		query: "react",
		nbPages: 0,
	};
    

	const [state, dispatch] = useReducer(reducer, initialState);

	const DataFetch = async (url) => {
		dispatch({ type: ACTIONS.SET_LOADING });

		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Request failed, status: ${response.status}`);
			}
			const data = await response.json();

            console.log(data, data.hits, data.nbPages, data.page)

			dispatch({
				type: ACTIONS.SET_POSTS,
				payload: {
					hits: data.hits,
					nbPages: data.nbPages
				},
			});
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ for marking up the searched words in yellow, but it did not work as expected,<em> tags r apearing
		//   let updatedHits = data.hits;
		//   const searchTerm = state.query;
		//   if (searchTerm !== "") {
		// 	const regex = new RegExp(searchTerm, "gi");
		// 	updatedHits = data.hits.map((hit) => {
		// 	  const updatedTitle = hit.title.replace(regex, "<em>$&</em>");
		// 	  return { ...hit, title: updatedTitle };
		// 	});
		//   }
	  
		//   dispatch({
		// 	type: ACTIONS.SET_POSTS,
		// 	payload: {
		// 	  hits: updatedHits,
		// 	  nbPages: data.nbPages,
		// 	},
		//   });
//   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		} catch (error) {
		  console.log(error.message);
		}
	  };
	  
   
	const handleSearch = ( query ) => {
		dispatch({ type: ACTIONS.SET_SEARCH, payload: query });
	};

	const handleNextPage = () => {
		dispatch({type: ACTIONS.NEXT_PAGE})
	}

	const handlePrevPage = () => {
		dispatch({ type: ACTIONS.PREV_PAGE });
	};

	useEffect(() => {
			DataFetch(`${API_ENDPOINT}&query=${state.query}&page=${state.page}&hitsPerPage=20`);
		}, [state.query, state.page]);

	return (
		<SearchContext.Provider value={{ ...state, handleSearch, handleNextPage, handlePrevPage}}>
			{children}
		</SearchContext.Provider>
	);
}
export { SearchContext, SearchContextProvider };

//https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=50
