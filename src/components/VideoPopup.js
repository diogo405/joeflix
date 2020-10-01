import React from 'react'
import './VideoPopup.css'
import videoPopupState from '../atoms/videoPopupState.js'
import {useRecoilState} from 'recoil'

function VideoPopup() {
	const [videoPopup, setVideoPopup] = useRecoilState(videoPopupState)

    return (
        <div className={`vpp ${videoPopup.isVisible ? 'vpp--active' : ''}`}>
        	<div className="vpp__bg"></div>
        	<div className="vpp__cont">
        		<span className="vpp__close" onClick={() => setVideoPopup({isVisible: false})}>×</span>
	        	<iframe className="vpp__video" src="https://www.youtube.com/embed/bLvqoHBptjg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	   	 	</div>
        </div>
    )
}

export default VideoPopup
