import React from 'react'
import { useState } from 'react';
import logo from '../../logo.jpg'
import './Navbar.css'
import { useRef } from 'react';
import { handleEnqueue } from '../../API/API';

const Navbar = (props) => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const links = [
        {
            "text": "D bot",
            "link": "D-Bot"
        }, {
            "text": "Фильмотека",
            "link": "Film-Library"
        }, {
            "text": "Стена кринжа",
            "link": "Cringe-Wall"
        }, {
            "text": "Бухичи",
            "link": "Boozling"
        }, {
            "text": "Quotes",
            "link": "Quotes"
        }];

    const linkList = links.map((link, index) =>
        <li key={index}>
            <a href={`/${link.link}`} >
                {link.text}
            </a>
        </li>
    )

    const [searchValue, setSearchValue] = useState('');
    const inputElement = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEnqueue(searchValue);
        setSearchValue('');
    }

    return (
        <nav className="navigation">
            <a href="/" className={
                isNavExpanded ? 'brand-name' : 'brand-name expanded'
            }>
                <img src={logo} alt='logo'></img>
                <div className='logo-title'>Halva&<br />Povidlo</div>
            </a>
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}
            >
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    {linkList}
                </ul>
            </div>
            <div className='input-container'>
                <form onSubmit={handleSubmit}>
                    <input
                        ref={inputElement}
                        type="text"
                        placeholder="Поиск песни"
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value)
                        }} ></input>
                </form>
            </div>
            <div className='profile-picture'>
                <img src='data:image/jpeg;base64,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' alt='profile'></img>
            </div>
        </nav >
    );
}

export default Navbar
