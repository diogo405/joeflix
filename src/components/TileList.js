import React from 'react'
import './TileList.css'
import Tile from './Tile.js'

function TileList({data, title}) {
    return (
    	<div className="tlist">
    		<h3 className="tlist__title">{title}</h3>
	        <div className="tlist__cont">
	        	{data && data.map(t => <Tile data={t} key={t.id}/>)}
	        </div>
    	</div>
    )
}

export default TileList
