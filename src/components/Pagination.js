import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { HiChevronDoubleLeft, HiChevronDoubleRight, } from "react-icons/hi";
import { SlActionRedo, SlActionUndo } from "react-icons/sl";

function Pagination() {
    const { page, nbPages, handleNextPage, handlePrevPage,handelResetPage,handelLastPage } = useContext(SearchContext);

	return (
		<div className="pagination">
			<button onClick={handelResetPage}><SlActionUndo/></button>
			<button onClick={handlePrevPage}><HiChevronDoubleLeft/></button>
            <span>Page {page +1} of {nbPages}</span>
			<button onClick={handleNextPage}><HiChevronDoubleRight/></button>
			<button onClick={handelLastPage}><SlActionRedo/></button>
		</div>
	);
}

export default Pagination;
