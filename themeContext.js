import React from "react"
const {Provider, Consumer} = React.createContext()

class ThemeProvider extends React.Component{
    state = {
        theme: "light",
    }

    toggleTheme=()=>{
        this.setState(prevState =>{
            return {
                 theme: prevState.theme === "dark" ? "light" : "dark"
            } 
        })   
    }

    render(){
        return(
            <div>
                <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                    {this.props.children}
                </Provider>
            </div>
        )
    }
}

export {ThemeProvider, Consumer as ThemeConsumer}