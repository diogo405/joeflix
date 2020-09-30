import React from 'react'
import './BigTile.css'

function BigTile({data, isLoading}) {

	if (isLoading) return <div></div>

    return (
        <div className="btile">
        	<div className="btile__bg" style={{backgroundImage: `url(${process.env.REACT_APP_TMDB_IMG_URL}/w500${data.backdrop_path})`}}></div> 
        	<div className="btile__cont"> 
        		<img className="btile__image" src={`${process.env.REACT_APP_TMDB_IMG_URL}/w500${data.backdrop_path}`}/>
        		<div className="btile__info">
        			<h3 className="btile__title">{data.title}</h3>
        			<div className="btns">
	    				<button className="btn btn--play">
	    					<img className="btn__icon btn__icon--play" src={require('../images/streamline-icon-controls-play@15x15.png')} alt=""/>
	    					Play
	    				</button>
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
