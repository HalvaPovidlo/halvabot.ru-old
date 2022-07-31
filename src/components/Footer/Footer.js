import React from 'react'
import discordIcon from '../../assets/discord-black.svg'
import githubIcon from '../../assets/github.svg'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <img src={discordIcon} alt='' ></img>
            <img src={githubIcon} alt='' ></img>
            <img src={discordIcon} alt=''></img>
            <img src={githubIcon} alt='' ></img>
        </div >
    )
}

export default Footer