import "./odeh.css"
import { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

export default function FilterMenus (){

    const [filter, setFilter] = useState('All');
    const [sorting, setSorting] = useState('Popularity');
    const [timeframe, setTimeframe] = useState('All time');


return (
    <div className="filter-Menus">
        <div>
        <label htmlFor="filter">Search: </label>
        <select
        name="filter"
        id="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
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
    <div>
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
        </div>
    </div>
    );
};
