import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Film from "./Film"
import Music from "./Music"
import Sports from "./Sports"

function Categories() {
    return(
        <div className="category-container">
            <h3 className="category-title">Choose your category</h3>
            <div className="category-list">
                <h3 className="film">
                <Link to="/categories/film"><i class="fas fa-film"></i> Film</Link>
                </h3>
                <h3 className="music">
                <Link to="/categories/music"><i class="fas fa-music"></i> Music</Link>
                </h3>
                <h3 className="sports">
                <Link to="/categories/sports"><i class="fas fa-football-ball"></i> Sports</Link>
                </h3>
                <hr/>
            </div>
        <Switch>
            <Route path="/categories/film"><Film /></Route>
            <Route path="/categories/music"><Music /></Route>
            <Route path="/categories/sports"><Sports /></Route>
        </Switch>    
        </div>
    )
}

export default Categories