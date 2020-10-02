import React from 'react'
import './Tile.css'
import {Link} from 'react-router-dom'

function Tile({data}) {
    return (
        <Link to={`/playing/${data ? data.type : ''}/${data ? data.id : ''}`} className="tile" style={data ? {backgroundImage: `url(${process.env.REACT_APP_TMDB_IMG_URL}/w500${data.banner})`} : {}}>
        	<div className="tile__cont">
        		<h3 className="tile__title">{data ? data.title : ''}</h3>
        		<button className="tile__play">
        			<img className="tile__icon" src={require('../images/streamline-icon-controls-play@15x15.png')} alt=""/>
        		</button>
        	</div>
        </Link>
    )
}

export default Tile
