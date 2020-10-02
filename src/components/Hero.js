import React from 'react'
import './Hero.css'
import {Link} from 'react-router-dom'

function Hero({data, isLoading, list}) {
    return (
    	<div className={`hero ${isLoading ? 'hero--loading' : ''}`} style={ isLoading ? {} : {backgroundImage: `url(${process.env.REACT_APP_TMDB_IMG_URL}/original${data.banner})`}}>
    		<div className="hero__info">
    			<h2 className="hero__title">{data ? data.title : ''}</h2>
    			<p className="hero__desc">{data ? data.desc : ''}</p>
    			<div className="btns">
    				<Link to={`/playing/${data ? data.type : ''}/${data ? data.id : ''}`} className="btn btn--play">
    					<img className="btn__icon btn__icon--play" src={require('../images/streamline-icon-controls-play@15x15.png')} alt=""/>
    					Play
    				</Link>
    				<button className="btn btn--moreinfo">
    					<span className="btn__icon btn__icon--info">ⓘ</span>
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
