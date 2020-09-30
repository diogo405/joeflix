import React from 'react'
import './TileListSkeleton.css'

function TileListSkeleton() {
    return (
        <div className="tlistske">
        	<div className="tlistske__tile"></div>
        	<div className="tlistske__tile"></div>
        	<div className="tlistske__tile"></div>
        	<div className="tlistske__tile"></div>
        	<div className="tlistske__tile"></div>
        </div>
    )
}

export default TileListSkeleton
