import React from 'react'
import {useQuery} from 'react-query'
import './HomePage.css'
import Hero from '../components/Hero.js'
import feedbackState from '../atoms/feedbackState.js'
import {useSetRecoilState} from 'recoil'

function HomePage() {
	const setFeedback = useSetRecoilState(feedbackState)

	const {data, isLoading, error} = useQuery('hero', async () => {
		const res = await fetch(`${process.env.REACT_APP_TMDB_BASE_URL}/movie/553?api_key=${process.env.REACT_APP_TMDB_KEY}`)
		const data = await res.json()
		return data
	})
	
	if (error) {
		setFeedback({isVisible: true, message: 'Oops, something went wrong'})
	}

    return (
        <div className="home">
        	<Hero data={data} isLoading={isLoading}/>
        </div>
    )
}

export default HomePage
