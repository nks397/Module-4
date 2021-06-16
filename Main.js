import React from "react"
import { ThemeConsumer } from "./themeContext"

function Main(){
    return(
        <div>
            <ThemeConsumer>
                {context =>(
                    <main className={context.theme}>
                        {context.theme === "dark"?
                        <h1 className="title">Click the button to toggle the <span>Light</span> theme</h1>
                        :
                        <h1 className="title">Click the button to toggle the <span>Dark</span> theme</h1>
                        }
                   </main>
                )}
            </ThemeConsumer>
        </div>
    )
}

export default Main