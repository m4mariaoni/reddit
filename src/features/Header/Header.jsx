import React, {useState, useEffect} from "react";
import {FaReddit} from "react-icons/fa";
import { HiOutlineSearch } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import './Header.css';
import { setSearchTerm } from '../../app/redditSlice';

export default function Header() {

    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
      };
    
      useEffect(() => {
        setSearchTermLocal(searchTerm);
      }, [searchTerm]);
    

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
      };


    return(
        <header>
            <div className="logo">
            <FaReddit className="logo-icon" /> 
            <p>reddit</p>
            </div>
            <form className="search">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTermLocal}
                    aria-label="Search posts"
                    onChange={onSearchTermChange}
                />
                <button type="submit" aria-label="Search" onClick={onSearchTermSubmit}>
                <HiOutlineSearch />
                </button>
            </form>
        </header>
    )
}