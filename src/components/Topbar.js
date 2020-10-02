import React, {useEffect, useState} from 'react'
import './Topbar.css'
import {Link, NavLink} from 'react-router-dom'

function Topbar() {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])
    
    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        setScroll(window.scrollY > 0)
    }

    return (
        <nav className={`topbar ${scroll ? 'topbar--scroll' : ''}`}>
        	<ul className="topbar__cont">
        		<li className="topbar__item topbar__item--logo">
                    <Link to="/">
                        <h1>JOEFLIX</h1>
                    </Link>
                </li>
        		<li className="topbar__item">
                    <NavLink exact to="/">Home</NavLink>
                </li>
        		<li className="topbar__item">
                    <NavLink to="/tv-shows">TV Shows</NavLink>
                </li>
        		<li className="topbar__item">
                    <NavLink to="/movies">Movies</NavLink>
                </li>
                {/*
        		<li className="topbar__item">Latest</li>
        		<li className="topbar__item">My List</li>
                */}
        	</ul>
        	<ul className="topbar__cont">
        		<li className="topbar__item">
        			<img className="topbar__icon" src={require('../images/streamline-icon-search-1@15x15.png')} alt=""/>
        		</li>
                {/*
        		<li className="topbar__item">
        			<img className="topbar__icon" src={require('../images/streamline-icon-messages-bubble-alternate@15x15.png')} alt=""/>
        		</li>
                */}
        		<li className="topbar__item">
        			<div className="topbar__acc">
        				<div className="topbar__face topbar__face-leye"></div>
        				<div className="topbar__face topbar__face-reye"></div>
        				<div className="topbar__face topbar__face-mouth"></div>
        			</div>
        		</li>
        	</ul>
        </nav>
    )
}

export default Topbar
