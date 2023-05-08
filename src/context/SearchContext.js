import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router";

const ACTIONS = {
	SET_LOADING: "SET_LOADING",
	SET_POSTS: "SET_POSTS",
	SET_SEARCH: "SET_SEARCH",
	NEXT_PAGE: "NEXT_PAGE",
	PREV_PAGE: "PREV_PAGE",
	GO_TO_FIRST_PAGE: "GO_TO_FIRST_PAGE",		//added go to first page , when it been clicked on the logo

	ALL_FILTER: "ALL_FILTER",
	STORIES_FILTER: "STORIES_FILTER",
	COMMENTS_FILTER: "COMMENTS_FILTER",
	POPULARITY_FILTER: "POPULARITY_FILTER",
	DATE_FILTER: "DATE_FILTER",
	RESET_PAGE: "RESET_PAGE",
	LAST_PAGE: "LAST_PAGE",
	// LAST_24_H_FILTER: "LAST_24_H_FILTER",
	// PAST_WEEK_FILTER: "PAST_WEEK_FILTER",
	// PAST_MONTH_FILTER: "PAST_MONTH_FILTER",
	// PAST_YEAR_FILTER: "PAST_YEAR_FILTER",
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
			case ACTIONS.GO_TO_FIRST_PAGE:				//added go to first page , when it been clicked on the logo
				return {								// commented this out because the logo was already clickable and was taking the user back to main page
				...state,								// but the reason of adding this is because of the pagination to reset to the first page when browsing through many pages of the 35 pages
				query: "",
				query_reset : "",
				by_date_points: "https://hn.algolia.com/api/v1/search_by_date?",
				sectiony: 'Stories',
				sort: 'Date',
				tags: "tags=story&",
				};

				case ACTIONS.LAST_PAGE:												//working LAST_PAGE filter
					// const sortedHits = state.hits.sort((a, b) => b.points - a.points);
					return {
					...state,
					page : state.nbPages -1
				};

				case ACTIONS.RESET_PAGE:												//working RESET_PAGE

					return {
					...state,
					page: 0,
				};

				case ACTIONS.POPULARITY_FILTER:												//working popularity filter
					// const sortedHits = state.hits.sort((a, b) => b.points - a.points);
					return {
					...state,
					sort: 'Popularity',
					by_date_points: "https://hn.algolia.com/api/v1/search?"
				};

				case ACTIONS.DATE_FILTER:													//working Date filter

					return {
						...state,
						sort: "Date",
						by_date_points: "https://hn.algolia.com/api/v1/search_by_date?"
					}

				case ACTIONS.STORIES_FILTER:												//working STORIES_FILTER filter

					return {
						...state,
						sectiony: 'Stories',
						tags: "tags=story&",
				};

				case ACTIONS.COMMENTS_FILTER:												//working COMMENTS_FILTER filter

					return {
						...state,
						sectiony: 'Comments',
						tags: "tags=comment&",
				};

				case ACTIONS.ALL_FILTER:												//working ALL_FILTER filter

					return {
						...state,
						sectiony: 'All',
						tags: "tags=(comment,story)&",
				};

		default:
			return state;
	}
};

const SearchContext = createContext();

export default function SearchContextProvider({ children }) {


	const initialState = {
		loading: true,
		hits: [],
		page: 0,
		query: "",
		nbPages: 0,
		query_reset : "",
		tags: "tags=story&",
		by_date_points: "https://hn.algolia.com/api/v1/search_by_date?",
		sort: 'Date',
		sectiony: 'Stories',
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

            // console.log("data",data)
			// //console.log("data.hits",data.hits)
			// //console.log("data.nbPages", data.nbPages)
			// //console.log("data.page", data.page)
			// //console.log("data.nbHits", data.nbHits)

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

	const handelResetPage = () => {
		dispatch({ type: ACTIONS.RESET_PAGE });			//BACK to first page for PAGINATION 
	};
	
	const handelLastPage = () => {
		dispatch({ type: ACTIONS.LAST_PAGE });		 //go to last page for PAGINATION 
	};

	const handleGoToHome = () => {					//added reseting the search & filters, when it been clicked on the logo
		dispatch({ type: ACTIONS.GO_TO_FIRST_PAGE });
	}

	const handlePopularity = () => {					//WORKING popularity filter
		dispatch({ type: ACTIONS.POPULARITY_FILTER });
		
	};

	const handleDate = () => {							//WORKING Date filter
		dispatch({ type: ACTIONS.DATE_FILTER });
		
	};

	const handleStories = () => {						//WORKING STORIES filter
		dispatch({ type: ACTIONS.STORIES_FILTER });
		
	};

	const handleComments = () => {						//WORKING Comments filter
		dispatch({ type: ACTIONS.COMMENTS_FILTER });
		
	};

	const handleAll = () => {						//WORKING ALL filter
		dispatch({ type: ACTIONS.ALL_FILTER });
	};


	useEffect(() => {
		DataFetch(`${state.by_date_points}${state.tags}query=${state.query}&page=${state.page}&hitsPerPage=30`);		// Pages are now 30 instead of 20, because there was a wierd
		}, [state.query, state.page,state.by_date_points,state.tags]);														// skipping with the pagination, about 10 pages were missing

	return (
		<SearchContext.Provider value={{ ...state, handleSearch, handleNextPage, handlePrevPage, handleGoToHome,handlePopularity,handleDate,handleComments,handleStories,handleAll,handelResetPage,handelLastPage}}>
			{children}
		</SearchContext.Provider>
	);
}
export { SearchContext, SearchContextProvider };

//https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=50


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//https://hn.algolia.com/api/v1/search_by_date?query={query}&page=${state.page}&hitsPerPage=20 		Standard API

//by adding those at the end of the link as a string throught functions, to manipulate the filtering:

//&tags={(story,comment)} 	  	sort All  (or without adding at all)
//&tags=story					sort stories
//&tags=comment					sort comments

/*https://hn.algolia.com/api/v1/search?query={query}&page=${state.page}&hitsPerPage=20		sorting by popularity depending on points and num of comments
&numericFilters=points&numericFilters=num_comments*/

//								sorting by All time (adding nothing)
//&numericFilters=created_at_i	sorting by specific time (already defined in the api for example 1683375198)
