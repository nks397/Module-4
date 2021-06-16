import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Footer from "./Footer"
import Logo from "./Logo"

function App() {
    return(
        <div>
            <nav>
                <div className="logo-container">
                    <Logo />
                </div>
                <Link className="home" to="/">Home</Link>
                <Link className="about" to="/about">About</Link>
                <Link className="services" to="/services">Services</Link>
                
            </nav>
           <hr/>
            <main>
            
                {/* <input type="text" placeholder="Search.."></input><button><i class="fas fa-search"></i></button> */}
                <div className="contact-container">
                    <h2>Contact Us </h2>
                    <br/>
                    <p>Phone Number: (803)549-3354</p>
                    <p>Address: 123 Flushville, Drive 20589</p>
                    <p>Email: leakbegone@gmail.com</p>
                    <br/>
                    <img 
                        style={{marginLeft: "145px", borderRadius: "40px", border: "solid 2px white"}}
                        src="https://media.istockphoto.com/photos/plumber-fixing-white-sink-pipe-with-adjustable-wrench-picture-id1150199946?b=1&k=6&m=1150199946&s=170667a&w=0&h=w5U2CDBDy5Zd0l4OHAr1uRVvC0lYs-zvdVTvrXBqAyI=" 
                        alt="img" 
                        height="180px" 
                        width="auto"
                        >
                    </img>
                </div>

                <Switch>
                    <div className="main-content">
                        <Route exact path="/"><Home /></Route> 
                        <Route path="/about"><About /></Route> 
                        <Route path="/services"><Services /></Route> 
                    </div>
                </Switch>

            </main>
            <hr/>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default App
