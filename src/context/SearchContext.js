import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router";

const ACTIONS = {
	SET_LOADING: "SET_LOADING",
	SET_POSTS: "SET_POSTS",
	SET_SEARCH: "SET_SEARCH",
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
            console.log(data, data.hits, data.nbPages)
			dispatch({
				type: ACTIONS.SET_POSTS,
				payload: {
					hits: data.hits,
					nbPages: data.nbPages,
				},
			});
		} catch (error) {
			console.log(error.message);
		}
	};
   
	const handleSearch = ( query ) => {
		dispatch({ type: ACTIONS.SET_SEARCH, payload: query });
	};

	useEffect(() => {
			DataFetch(`${API_ENDPOINT}&query=${state.query}&hitsPerPage=30`);
		}, [state.query, state.page]);

	return (
		<SearchContext.Provider value={{ ...state, handleSearch}}>
			{children}
		</SearchContext.Provider>
	);
}
export { SearchContext, SearchContextProvider };

//https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=50
