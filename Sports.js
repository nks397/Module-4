import React from "react"
import {useEffect, useState} from "react"
import axios from "axios"

function Sports() {  
    // const [questionArr, setQuestionArr] = useState([])
    
    useEffect(()=>{
        axios.get("https://opentdb.com/api.php?amount=15&category=21&difficulty=medium&type=multiple")
        .then(res => console.log(res.data))
        
    },[])

    return (
        <div>
            Sports Category
        </div>
    )
}

export default Sports