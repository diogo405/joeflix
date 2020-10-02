import React from 'react'
import {useQuery} from 'react-query'
import './MoviesPage.css'
import TileList from '../components/TileList.js'
import feedbackState from '../atoms/feedbackState.js'
import {useSetRecoilState} from 'recoil'
import Converter from '../components/Converter.js'

function MoviesPage() {
	const setFeedback = useSetRecoilState(feedbackState)
	const {data: trendingMoviesData, isLoading: trendingMoviesIsLoading, error: trendingMoviesError} = useQuery('trending', async () => {
		const res = await fetch(`${process.env.REACT_APP_TMDB_BASE_URL}/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}`)
		const data = await res.json()
		return Converter.convertMoviesToTiles(data.results.splice(0, 5))
	})
	const {data: topRatedData, isLoading: topRatedIsLoading, error: topRatedError} = useQuery('tr', async () => {
		const res = await fetch(`${process.env.REACT_APP_TMDB_BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}`)
		const data = await res.json()
		return Converter.convertMoviesToTiles(data.results.splice(0, 5))
	})
	const {data: nowData, isLoading: nowIsLoading, error: nowError} = useQuery('now', async () => {
		const res = await fetch(`${process.env.REACT_APP_TMDB_BASE_URL}/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}`)
		const data = await res.json()
		return Converter.convertMoviesToTiles(data.results.splice(0, 5))
	})
	
	if (trendingMoviesError || topRatedError || nowError) {
		setFeedback({isVisible: true, message: 'Oops, something went wrong'})
	}

    return (
        <div className="moviesp">
        	<div className="tlist__wrapper tlist__wrapper--tall">
        		<TileList title="New releases" data={nowData} isLoading={nowIsLoading}/>
        	</div>
        	<div className="tlist__wrapper tlist__wrapper--grey">
        		<TileList title="Top rated" data={topRatedData} isLoading={topRatedIsLoading}/>
        	</div>
        	<div className="tlist__wrapper" fallback={<div></div>}>
        		<TileList title="Trending now" data={trendingMoviesData} isLoading={trendingMoviesIsLoading}/>
        	</div>
        </div>
    )
}

export default MoviesPage
