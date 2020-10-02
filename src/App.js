import React, {Suspense} from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Topbar from './components/Topbar.js'
import FeedbackPopup from './components/FeedbackPopup.js'
import {RecoilRoot} from 'recoil'
const HomePage = React.lazy(() => import('./pages/HomePage.js'));
const VideoPage = React.lazy(() => import('./pages/VideoPage.js'));
const ShowsPage = React.lazy(() => import('./pages/ShowsPage.js'));

function App() {
    return (
        <RecoilRoot>
            <Router>
                <FeedbackPopup/>
                <Suspense fallback={<div></div>}>
                    <Switch>
                        <Route exact path="/">
                        	<Topbar/>
                            <HomePage/>
                        </Route>
                        <Route path="/playing/:id">
                            <VideoPage/>
                        </Route>
                        <Route path="/tv-shows">
                            <Topbar/>
                            <ShowsPage/>
                        </Route>
                    </Switch>
                </Suspense>
            </Router>
        </RecoilRoot>
    )
}

export default App
