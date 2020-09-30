import React from 'react'
import './Hero.css'

function Hero({data, isLoading, list}) {
    return (
    	<div className={`hero ${isLoading ? 'hero--loading' : ''}`} style={ isLoading ? {} : {backgroundImage: `url(${process.env.REACT_APP_TMDB_IMG_URL}/original${data.backdrop_path})`}}>
    		<div className="hero__info">
    			<h2 className="hero__title">{data ? data.original_title : ''}</h2>
    			<p className="hero__desc">{data ? data.tagline : ''}</p>
    			<div className="hero__btns">
    				<button className="hero__btn hero__btn--play">
    					<img className="hero__icon hero__icon--play" src={require('../images/streamline-icon-controls-play@15x15.png')} alt=""/>
    					Play
    				</button>
    				<button className="hero__btn hero__btn--moreinfo">
    					<span className="hero__icon hero__icon--info">ⓘ</span>
    					More info
    				</button>
    			</div>
        	</div>
			<div className="hero__list">
				{list}
			</div>
        </div>
    )
}

export default Hero
