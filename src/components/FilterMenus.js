import "./odeh.css"
import { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

export default function FilterMenus (){

    const { handlePopularity,handleDate, handleStories ,handleComments, handleAll,sectiony, sort} = useContext(SearchContext);
    const [section, setSection] = useState(sectiony);
    const [sorting, setSorting] = useState(sort);
    // const [timeframe, setTimeframe] = useState('All time');

console.log("sectiony in FilterMenus",sectiony)
console.log("sort in FilterMenus",sort)
    useEffect(() => {
        if (sorting === 'Popularity') {
            handlePopularity();
        
        } else if (sorting === 'Date'){
            handleDate();
        
        } 
        if (section === 'Stories'){
            handleStories();
        
        } else if (section === 'Comments'){
            handleComments();
        
        } else if (section === 'All'){
            handleAll();
        }

    }, [sorting,section]);


return (
    <div className="filter-Menus">
        <div>
            <label htmlFor="section">Search: </label>
            <select
            name="section"
            id="section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            >
                <option value="All">All</option>
                <option value="Stories">Stories</option>
                <option value="Comments">Comments</option>
            </select>
        </div>
        <div>
            <label htmlFor="sorting">by: </label>
            <select
            name="sorting"
            id="sorting"
            value={sorting}
            onChange={(e) => setSorting(e.target.value)}
            >
                <option value="Popularity">Popularity</option>
                <option value="Date">Date</option>
            </select>
        </div>
        {/* <div>
            <label htmlFor="timeframe">for: </label>
            <select
            name="timeframe"
            id="timeframe"
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            >
                <option value="All time">All time</option>
                <option value="Last 24h">Last 24h</option>
                <option value="Past Week">Past Week</option>
                <option value="Past Month">Past Month</option>
                <option value="Past Year">Past Year</option>
                <option value="Custom">Custom range</option>
            </select>
        </div> */}
    </div>
    );
};
