import React, {useState} from 'react'
import './Tile.css'
import videoPopupState from '../atoms/videoPopupState.js'
import {useSetRecoilState} from 'recoil'

function Tile({data}) {
    const setVideoPopup = useSetRecoilState(videoPopupState)

    const loadVideo = () => {
        setVideoPopup({isVisible: true})
    }

    return (
        <div className="tile" style={data ? {backgroundImage: `url(${process.env.REACT_APP_TMDB_IMG_URL}/w500${data.backdrop_path})`} : {}} onClick={loadVideo}>
        	<div className="tile__cont">
        		<h3 className="tile__title">{data ? data.original_title : ''}</h3>
        		<button className="tile__play">
        			<img className="tile__icon" src={require('../images/streamline-icon-controls-play@15x15.png')} alt=""/>
        		</button>
        	</div>
        </div>
    )
}

export default Tile
