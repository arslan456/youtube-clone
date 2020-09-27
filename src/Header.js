import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch]= useState('');

    return (
            <div className="header">
                <div className="header__left">
                <MenuIcon/>
                <Link to="/">
                <img
                   className="header__logo"
                   src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt=""/>
                </Link>
                </div>
                
                <div className="header__input">
                <input 
                    onChange={e => setInputSearch(e.target.value)} 
                    value={inputSearch} 
                    placeholder="Search" 
                    type="text"
                />
                <Link to={`/search/${inputSearch}`}>
                 <SearchIcon className="header__inputButton"/>
                </Link>
                </div>
                <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar
                    alt="Remy Sharp"
                    src="https://scontent.fisb5-1.fna.fbcdn.net/v/t1.0-0/s206x206/55639989_999288326926470_8052160564341768192_o.jpg?_nc_cat=107&_nc_sid=da31f3&_nc_ohc=54Bc0vzycOIAX_ayqp2&_nc_ht=scontent.fisb5-1.fna&tp=7&oh=088093fe1ec9291fb80bc52d427305b9&oe=5F9567C5"
                />
                </div>
            </div>
    )
}

export default Header    