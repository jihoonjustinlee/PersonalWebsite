import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'

function App(){
    return(
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
            <Route exact path="/" component={Home}></Route>
            <Route path="/blog" component={Blog}></Route>
        </Router>
    )
}

export default App