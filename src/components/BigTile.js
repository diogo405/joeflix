import React from 'react'
import './BigTile.css'

function BigTile({data}) {
    return (
        <div className="btile" style={data ? {backgroundImage: `url(${process.env.REACT_APP_TMDB_IMG_URL}/w500${data.backdrop_path})`} : {}}>
        </div>
    )
}

export default BigTile
