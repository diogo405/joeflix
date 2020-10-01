import React from 'react'
import './VideoBlock.css'
import {Link} from 'react-router-dom'

function VideoBlock({data, isLoading}) {

	if (isLoading) return <div className="vblock vblock--loading"></div>

    return (
		
        <div className="vblock">
	        <div className="vblock__bg" style={data ? {backgroundImage: `url(${process.env.REACT_APP_TMDB_IMG_URL}/original${data.backdrop_path})`} : {}}>
	        </div>
	        <div className="vblock__bover"></div>
	        <div className="vblock__tover"></div>
	        <div className="vblock__playing">Now playing <h1 className="vblock__title">{data ? data.original_title: ''}</h1></div>
	        <Link to="/" className="vblock__close">×</Link>
        </div>
    )
}

export default VideoBlock
