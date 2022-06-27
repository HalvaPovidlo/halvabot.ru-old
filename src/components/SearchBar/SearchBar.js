import React, { useRef, useState } from 'react'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { handleEnqueue } from '../../API/API'
import './SearchBar.css'

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const inputElement = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEnqueue(searchValue);
        setSearchValue('');
    }

    return (
        <div className='searchbar-wrapper'>
            <div className='profile-picture-container'>
                <img src={props?.user?.profilePicture || "https://sun9-east.userapi.com/sun9-36/s/v1/ig2/-Q9MJpY_eGURiFW01Uj95rwLrc7_CY-9tmUrobFa-eswbZLsGVpizi3DTQbHw2EE0QDkk79TanjR-mQ3QXgYVM5g.jpg?size=50x50&quality=96&crop=0,392,1400,1400&ava=1"} alt="avatar"></img>
            </div>
            <div className='searchbar-container'>
                <form onSubmit={handleSubmit}>
                    <input
                        ref={inputElement}
                        type="text"
                        placeholder="Поиск песни"
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value)
                        }} />
                </form>

            </div>
            <div className='sidebar-button-container'>
                <button>
                    <FontAwesomeIcon icon={faGripLines} />
                </button>
            </div>
        </div>
    )
}

export default SearchBar
