import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

function Pagination() {
    const { page, nbPages, handleNextPage, handlePrevPage } = useContext(SearchContext);

	return (
		<div className="pagination">
			<button onClick={handlePrevPage}><HiChevronDoubleLeft/></button>
            <span>Page {page +1} of {nbPages +1}</span>
			<button onClick={handleNextPage}><HiChevronDoubleRight/></button>
		</div>
	);
}

export default Pagination;
