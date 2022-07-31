import React from 'react'
import FilmCard from '../FilmCard/FilmCard'
import './FilmLibrary.css'

const FilmLibrary = (props) => {

    const links = [
        {
            "text": "Все",
            "link": "bot"
        }, {
            "text": "Аниме",
            "link": "films"
        }, {
            "text": "Сериалы",
            "link": "boozling"
        }, {
            "text": "Фильмы",
            "link": "quotes"
        }, {
            "text": "Треш",
            "link": "quotes"
        }, {
            "text": "Топы",
            "link": "quotes"
        }];

    const linkList = links.map((link, index) =>
        <li key={index}>
            <a href={`/${link.link}`} >
                {link.text}
            </a>
        </li>
    )

    return (
        <>
            <ul className='categories'>
                {linkList}
            </ul>
            <div className='FilmLibrary-container'>
                <FilmCard style={
                    {
                        height: "300px",
                        width: "200px",
                        url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a47477a1-9b43-4db6-a97b-c3a0dc7d2cb0/300x450"
                    }
                } />

                <FilmCard style={
                    {
                        height: "300px",
                        width: "200px",
                        url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a47477a1-9b43-4db6-a97b-c3a0dc7d2cb0/300x450"
                    }
                } />

                <FilmCard style={
                    {
                        height: "300px",
                        width: "200px",
                        url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a47477a1-9b43-4db6-a97b-c3a0dc7d2cb0/300x450"
                    }
                } />

                <FilmCard style={
                    {
                        height: "300px",
                        width: "200px",
                        url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a47477a1-9b43-4db6-a97b-c3a0dc7d2cb0/300x450"
                    }
                } />

                <FilmCard style={
                    {
                        height: "300px",
                        width: "200px",
                        url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a47477a1-9b43-4db6-a97b-c3a0dc7d2cb0/300x450"
                    }
                } />

                <FilmCard style={
                    {
                        height: "300px",
                        width: "200px",
                        url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a47477a1-9b43-4db6-a97b-c3a0dc7d2cb0/300x450"
                    }
                } />

                <FilmCard style={
                    {
                        height: "300px",
                        width: "200px",
                        url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a47477a1-9b43-4db6-a97b-c3a0dc7d2cb0/300x450"
                    }
                } />

                <FilmCard style={
                    {
                        height: "300px",
                        width: "200px",
                        url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a47477a1-9b43-4db6-a97b-c3a0dc7d2cb0/300x450"
                    }
                } />

                <FilmCard style={
                    {
                        height: "300px",
                        width: "200px",
                        url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a47477a1-9b43-4db6-a97b-c3a0dc7d2cb0/300x450"
                    }
                } />

                <FilmCard style={
                    {
                        height: "300px",
                        width: "200px",
                        url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a47477a1-9b43-4db6-a97b-c3a0dc7d2cb0/300x450"
                    }
                } />

                <FilmCard style={
                    {
                        height: "300px",
                        width: "200px",
                        url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a47477a1-9b43-4db6-a97b-c3a0dc7d2cb0/300x450"
                    }
                } />

                <FilmCard style={
                    {
                        height: "300px",
                        width: "200px",
                        url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a47477a1-9b43-4db6-a97b-c3a0dc7d2cb0/300x450"
                    }
                } />

                <FilmCard style={
                    {
                        height: "300px",
                        width: "200px",
                        url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a47477a1-9b43-4db6-a97b-c3a0dc7d2cb0/300x450"
                    }
                } />
            </div>
        </>
    )
}

export default FilmLibrary