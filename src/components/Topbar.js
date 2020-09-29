import React from 'react'
import './Topbar.css'

function Topbar() {
    return (
        <nav className="topbar">
        	<ul className="topbar__cont">
        		<li className="topbar__item topbar__item--logo">JOEFLIX</li>
        		<li className="topbar__item topbar__item--menu">
        			Browse
        		</li>
        		<li className="topbar__item topbar__item--active">Home</li>
        		<li className="topbar__item">TV Shows</li>
        		<li className="topbar__item">Movies</li>
        		<li className="topbar__item">Latest</li>
        		<li className="topbar__item">My List</li>
        	</ul>
        	<ul className="topbar__cont">
        		<li className="topbar__item">
        			<img className="topbar__icon" src={require('../images/streamline-icon-search-1@15x15.png')} alt=""/>
        		</li>
        		<li className="topbar__item">
        			<img className="topbar__icon" src={require('../images/streamline-icon-messages-bubble-alternate@15x15.png')} alt=""/>
        		</li>
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
