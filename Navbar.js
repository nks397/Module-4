import React from "react"
import {ThemeConsumer} from "./themeContext"

function Navbar(){
    return(
        <div>
            <ThemeConsumer>
                {context => (
                    <nav className={context.theme}>
                            <h2 className="website-title"><span className="light-bulb"><i class="far fa-lightbulb"></i></span> Theme Changer</h2>
                            <h3 className="home">Home</h3>
                            <h3 className="about">About</h3>
                            <h4 className="contact">Contact</h4>
                    </nav>
                )}
            </ThemeConsumer>
        </div>
    )
}

export default Navbar