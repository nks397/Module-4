import React from "react"
import {useEffect, useState} from "react"
import axios from "axios"


function Music() {  
//     // const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [data, setData] = useState([]);
//     const [currentQuestion, setCurrentQuestion] = useState(0)
//     const [getLength, setGetLength] = useState(0)

//     const getData = async() => {
//         const {data} = await axios.get("https://opentdb.com/api.php?amount=15&category=12&difficulty=medium&type=multiple")
//         const formatData = data.results.map(ques => {
//             const incorrectAnswIndex = ques.incorrect_answers.length
//             const random = Math.random() * (incorrectAnswIndex - 0) + 0
//             ques.incorrect_answers.splice(random, 0, ques.correct_answer)
            
//             return {
//                 ...ques,
//                 answers: ques.incorrect_answers
//             }
//         })

// //        
// // 
//         const lengthData = data.results.length
//         setGetLength(lengthData)
        

//         setData(formatData)
//         console.log({formatData},"FormatData")
//     }

//     // function handleNextBtn() {
//     //         // setClicked(false)
//     //         if(currentQuestion <  - 1){
//     //              setCurrentQuestion(currentQuestion + 1)
//     //         
//     //         }
//     //     }

//     useEffect(()=>{
//         getData()
        
//     },[])

//     console.log({data}, "data")

    return (
        <div>
            Music Category
             {/* <h1>Question {[currentQuestion + 1]}  of {getLength}</h1> */}
            
            {/* <button >Next</button> */}
        </div>
    )
}

export default Music


