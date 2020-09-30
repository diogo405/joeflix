import React from 'react'
import './TileList.css'
import Tile from './Tile.js'
import TileListSkeleton from './TileListSkeleton.js'

function TileList({data, title, isLoading}) {

	if (isLoading) return <TileListSkeleton/>

    return (
    	<div className="tlist">
    		<h2 className="tlist__title">{title}</h2>
	        <div className="tlist__cont">
	        	{data && data.map(t => <Tile data={t} key={t.id}/>)}
	        </div>
    	</div>
    )
}

export default TileList
