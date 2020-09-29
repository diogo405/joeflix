import React from 'react'
import {useQuery} from 'react-query'
import './HomePage.css'
import Hero from '../components/Hero.js'
import TileList from '../components/TileList.js'
import feedbackState from '../atoms/feedbackState.js'
import {useSetRecoilState} from 'recoil'

function HomePage() {
	const setFeedback = useSetRecoilState(feedbackState)
	const {data: heroData, isLoading: heroIsLoading, error: heroError} = useQuery('hero', async () => {
		const res = await fetch(`${process.env.REACT_APP_TMDB_BASE_URL}/movie/558?api_key=${process.env.REACT_APP_TMDB_KEY}`)
		const data = await res.json()
		return data
	})
	const {data: popularData, isLoading: popularIsLoading, error: popularError} = useQuery('popular', async () => {
		const res = await fetch(`${process.env.REACT_APP_TMDB_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`)
		const data = await res.json()
		return data.results.splice(0, 5)
	})
	const {data: trendingMoviesData, isLoading: trendingMoviesIsLoading, error: trendingMoviesError} = useQuery('trending', async () => {
		const res = await fetch(`${process.env.REACT_APP_TMDB_BASE_URL}/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}`)
		const data = await res.json()
		return data.results.splice(0, 5)
	})
	const {data: topRatedData, isLoading: topRatedIsLoading, error: topRatedError} = useQuery('tr', async () => {
		const res = await fetch(`${process.env.REACT_APP_TMDB_BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}`)
		const data = await res.json()
		return data.results.splice(0, 5)
	})
	
	if (heroError || popularError || trendingMoviesError || topRatedError) {
		setFeedback({isVisible: true, message: 'Oops, something went wrong'})
	}

	const mostPopular = <TileList title="Most popular" data={popularData} isLoading={popularIsLoading}/>

    return (
        <div className="home">
        	<Hero data={heroData} isLoading={heroIsLoading} list={mostPopular}/>
        	<div className="home__list">
        		<TileList title="Trending now" data={trendingMoviesData} isLoading={trendingMoviesIsLoading}/>
        	</div>
        	<div className="home__list home__list--grey">
        		<TileList title="Top rated" data={topRatedData} isLoading={topRatedIsLoading}/>
        	</div>
        </div>
    )
}

export default HomePage
