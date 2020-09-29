import React from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.js'
import Topbar from './components/Topbar.js'
import FeedbackPopup from './components/FeedbackPopup.js'
import {RecoilRoot} from 'recoil'

function App() {
    return (
        <RecoilRoot>
            <Router>
            	<Topbar/>
                <FeedbackPopup/>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </Router>
        </RecoilRoot>
    )
}

export default App
