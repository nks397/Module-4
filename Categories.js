import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Film from "./Film"
import Music from "./Music"
import Sports from "./Sports"

function Categories() {
    return(
        <div>
            <Link to="/categories/film">Film</Link>
            <Link to="/categories/music">Music</Link>
            <Link to="/categories/sports">Sports</Link>

        <Switch>
            <Route path="/categories/film"><Film /></Route>
            <Route path="/categories/music"><Music /></Route>
            <Route path="/categories/sports"><Sports /></Route>
        </Switch>    
        </div>
    )
}

export default Categories