import React from "react"
import { ThemeConsumer } from "./themeContext"

function Button(){
    return(
        <div>
            <ThemeConsumer>
                {context =>(
                    <div className={context.theme}>
                        {context.theme === "dark"?
                        <button onClick={context.toggleTheme} className={context.theme}><i className="fas fa-moon"></i> Change Theme</button>
                        :
                        <button onClick={context.toggleTheme} className={context.theme}><i className="fas fa-sun"></i> Change Theme</button>
                        }
                    </div>
                )}
            </ThemeConsumer>
        </div>
    )
}

export default Button