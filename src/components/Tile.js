import React from 'react'
import './Tile.css'

function Tile({data}) {
    return (
        <div className="tile" style={data ? {backgroundImage: `url(${process.env.REACT_APP_TMDB_IMG_URL}/w500${data.backdrop_path})`} : {}}>
        </div>
    )
}

export default Tile
