import React from 'react'
import './BigTile.css'
import {Link} from 'react-router-dom'

function BigTile({data, isLoading}) {

	if (isLoading) return <div className="btile__loading"></div>

    return (
        <div className="btile">
        	<div className="btile__bg" style={{backgroundImage: `url(${process.env.REACT_APP_TMDB_IMG_URL}/w500${data.banner})`}}></div> 
        	<div className="btile__cont"> 
        		<img className="btile__image" src={`${process.env.REACT_APP_TMDB_IMG_URL}/w500${data.banner}`} alt=""/>
        		<div className="btile__info">
        			<h3 className="btile__title">{data.title}</h3>
        			<div className="btns">
	    				<Link to={`/playing/${data? data.type : ''}/${data ? data.id : ''}`} className="btn btn--play">
	    					<img className="btn__icon btn__icon--play" src={require('../images/streamline-icon-controls-play@15x15.png')} alt=""/>
	    					Play
	    				</Link>
	    				<button className="btn btn--moreinfo">
	    					<span className="btn__icon btn__icon--info">ⓘ</span>
	    					More info
	    				</button>
	    			</div>
	    			<p className="btile__desc">{data.overview}</p>
        		</div>
        	</div>
        </div>
    )
}

export default BigTile
