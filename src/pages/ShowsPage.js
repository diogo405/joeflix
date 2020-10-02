import React from 'react'
import './ShowsPage.css'
import {useQuery} from 'react-query'
import Hero from '../components/Hero.js'
import TileList from '../components/TileList.js'
import feedbackState from '../atoms/feedbackState.js'
import {useSetRecoilState} from 'recoil'
import Converter from '../components/Converter.js'

function ShowsPage() {
	const setFeedback = useSetRecoilState(feedbackState)
	const {data: heroData, isLoading: heroIsLoading, error: heroError} = useQuery('heroShow', async () => {
		const response = await fetch(`${process.env.REACT_APP_TMDB_BASE_URL}/tv/713?api_key=${process.env.REACT_APP_TMDB_KEY}`)
		const data = await response.json()
		return Converter.convertToTile('tv', data)
	})
	const {data: popularData, isLoading: popularIsLoading, error: popularError} = useQuery('popShow', async () => {
		const res = await fetch(`${process.env.REACT_APP_TMDB_BASE_URL}/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`)
		const data = await res.json()
		return Converter.convertShowsToTiles(data.results.splice(0, 5))
	})
	const {data: onData, isLoading: onIsLoading, error: onError} = useQuery('onShow', async () => {
		const res = await fetch(`${process.env.REACT_APP_TMDB_BASE_URL}/tv/on_the_air?api_key=${process.env.REACT_APP_TMDB_KEY}`)
		const data = await res.json()
		return Converter.convertShowsToTiles(data.results.splice(0, 5))
	})

	if (heroError || popularError || onError) {
		setFeedback({isVisible: true, message: 'Oops, something went wrong'})
	}

	const mostPopular = <TileList title="Most popular" data={popularData} isLoading={popularIsLoading}/>
    return (
        <div className="showsp">
        	<Hero data={heroData} isLoading={heroIsLoading} list={mostPopular}/>
        	<div className="tlist__wrapper tlist__wrapper--tall" fallback={<div></div>}>
        		<TileList title="On air" data={onData} isLoading={onIsLoading}/>
        	</div>
        </div>
    )
}

export default ShowsPage
