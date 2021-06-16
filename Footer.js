import React from "react"
import { ThemeConsumer } from "./themeContext"

function Footer(){
    return(
        <div>
            <ThemeConsumer>
                {context => (
                    <footer className={context.theme}>
                        <h2 className="facebook"><i class="fab fa-facebook-square"></i></h2> 
                        <h2 className="twitter"><i class="fab fa-twitter-square"></i></h2>
                        <h2 className="instagram"><i class="fab fa-instagram-square"></i></h2>
                        <h2 className="tumblr"><i class="fab fa-tumblr-square"></i></h2>
                        <h2 className="reddit"><i class="fab fa-reddit-square"></i></h2>
                    </footer>
                )}          
            </ThemeConsumer>
        </div>
    )
}

export default Footer