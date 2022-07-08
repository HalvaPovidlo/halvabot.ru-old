import React from 'react'
import FilmLibrary from '../../components/FilmLibrary/FilmLibrary';
import Navbar from '../../components/Navbar/Navbar'
import './Films.css'

const Films= () => {
    return (
        <div>
            <Navbar />
            <FilmLibrary  />
        </div>
    )
}

export default Films
