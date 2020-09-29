import React from 'react'
import './Hero.css'

function Hero({data, isLoading}) {
    return (
    	<div className={`hero ${isLoading ? 'hero--loading' : ''}`} style={ isLoading ? {} : {backgroundImage: `url(${process.env.REACT_APP_TMDB_IMG_URL}/original${data.backdrop_path})`}}>
        </div>
    )
}

export default Hero
