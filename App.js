import React from "react"
import Home from "./Home"
import Categories from "./categories/Categories"
import About from "./About"
import {Link, Switch, Route} from "react-router-dom"

function App() {  

    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/about">About</Link>
            </nav>
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/categories"><Categories /></Route>
            <Route path="/about"><About /></Route>
        </Switch>
        </div>
    )
}

export default App