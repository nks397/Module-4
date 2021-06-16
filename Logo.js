import React from "react"
import plumbing from "./images/plumbing-logo.png"

function Logo() {
    return(
        <div className="logo">
            <img src={plumbing} alt="img" height="160px" width="auto"></img>
        </div>
    )
}

export default Logo