import React from 'react'
import './VideoPage.css'
import VideoBlock from '../components/VideoBlock.js'
import {useParams} from 'react-router-dom'
import {useQuery} from 'react-query'

function VideoPage() {
	let {id} = useParams()

	const {data, isLoading, error} = useQuery('video', async () => {
		const res = await fetch(`${process.env.REACT_APP_TMDB_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`)
		const data = await res.json()
		return data
	})

    return (
        <div className="videop">
        	<VideoBlock data={data} isLoading={isLoading}/>
        </div>
    )
}

export default VideoPage
