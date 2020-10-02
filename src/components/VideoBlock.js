import React from 'react'
import './VideoBlock.css'
import { useHistory } from 'react-router-dom'

function VideoBlock({data, isLoading}) {
	 const history = useHistory()

	if (isLoading) return <div className="vblock vblock--loading"></div>

    return (
		
        <div className="vblock">
	        <div className="vblock__bg" style={data ? {backgroundImage: `url(${process.env.REACT_APP_TMDB_IMG_URL}/original${data.banner})`} : {}}>
	        </div>
	        <div className="vblock__bover"></div>
	        <div className="vblock__tover"></div>
	        <div className="vblock__playing">Now playing <h1 className="vblock__title">{data ? data.title : ''}</h1></div>
	        <span onClick={history.goBack} className="vblock__close">×</span>
        </div>
    )
}

export default VideoBlock
