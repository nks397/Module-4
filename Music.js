// import React, { useState, useContext } from "react"
// import {useEffect} from "react"
// import axios from "axios"
// import {QuizContext} from "../context"

// function Music() {
//     const [currentQuestion, setCurrentQuestion] = useState(0)
//     const [questionArr, setQuestionArr] = useState([])
//     const [incorrectArr, setIncorrectArr] = useState([])
//     const [correctAnswer, setCorrectAnswer] = useState([])
//     const [length, setLength] = useState(0)
//     const [answerChoices, setAnswerChoices] = useState("")
//     const [answerShuffle, setAnswerShuffle] = useState("")
//     const [score, setScore] = useState(1)
//     const [displayScore, setDisplayScore] = useState(false)

//     const {handlePrevBtn, handleNextBtn} = useContext(QuizContext)

//     useEffect(()=>{
//         axios.get("https://opentdb.com/api.php?amount=15&category=12&difficulty=medium&type=multiple")
//         .then(res => res.data)
//         .then(questionsList => {
//             const listLength = questionsList.results.length
//             //.replace(/[^A-Za-z]+/g, '')
//             setLength(listLength)
//             setQuestionArr(questionsList.results)
//             setIncorrectArr(questionsList.results.map(item => item.incorrect_answers))
//             setCorrectAnswer(questionsList.results.map(item => item.correct_answer))
//             setAnswerChoices(questionsList.results.map(item => {
//                 const incorrectAnswersIndex = item.incorrect_answers.length
//                 const randomIndex = Math.random() - (incorrectAnswersIndex-0) + 0
//                 item.incorrect_answers.splice(
//                     randomIndex, 0, item.correct_answer
//                 )
//                 return {
//                     ...item,
//                     answers: item.incorrect_answers
//                 }
//             }))
//             setAnswerShuffle(questionsList.results.map(item => {
//                 let unshuffled = item.incorrect_answers
//                 let shuffled = unshuffled
//                 .map((a) => ({sort: Math.random(), value:a}))
//                 .sort((a,b) => a.sort - b.sort)
//                 .map((a) => a.value)
//                 .map((a)=> {return {value: a, isClicked:false}})
//                 // .map((a) => a.toString().replace(/[^A-Za-z]+/g, ''))
//                 console.log(shuffled, "shuffled")
//                 return shuffled
                
//             }))
            
//         })
//     },[])
//     // console.log(answerChoices, "answerChoices")
//     // console.log(answerShuffle, "answerShuffle")
        

    
//     function handleRightAns(answer, index) {
//         // console.log(correctAnswer[currentQuestion], "line 56")
//         // console.log(answer, "55")

//         if(answer.value === correctAnswer[currentQuestion]){
//             if(answer.isClicked === false) {
//                 let newAnswerShuffle = answerShuffle
//                 newAnswerShuffle[currentQuestion][index].isClicked = true
//                 setAnswerShuffle(newAnswerShuffle)
//                 // console.log(newAnswerShuffle, "newAnswerShuffle")
//                 setScore(prevScore => prevScore + 1)
//                 // console.log("new score is", score)
//             }     
//         }
    
//             // console.log("****answer is correct!****")
//             // console.log(score, "score increment")
//             // console.log(correctAnswer, "correctAnswers list")
            
//     }

//     // function handleNextBtn() {
//     //     if(currentQuestion < length - 1){
//     //          return setCurrentQuestion(currentQuestion + 1)
//     //     } else {
//     //         setDisplayScore(true)
//     //     } 
//     // }
//     // function handlePrevBtn() {
//     //     if(currentQuestion > 0){
//     //          return setCurrentQuestion(currentQuestion - 1)
//     //     }
//     // }

//     console.log(answerChoices, "answChoices")
//     console.log("Question Arr: " + {...questionArr[0]})

//     return (
//         <div>
//             {displayScore ? (
//                 <div>
//                     <div className="completed">Completed!</div>
//                     <div className="score-container">
//                         Your Score: {score}/{length}
//                         <br/>
//                         {/* Percentage: {`${score*100/10} % `} */}
                       
//                     </div>
//                 </div>
//             ):(
//             <div>
//                 <h1>Music Category</h1>
//                 <h2>Question {currentQuestion + 1} of {length}</h2>
//                     {questionArr[currentQuestion]?questionArr[currentQuestion].question:null}
//                 <h4>
//                     {answerShuffle[currentQuestion]?answerShuffle[currentQuestion].map((item, index) => <button onClick={()=>handleRightAns(item, index)}>{item.value}</button>):null}
//                 </h4>
//                 <button onClick={handleNextBtn}>Next</button>
//                 <button onClick={handlePrevBtn}>Previous</button>
//             </div>
//             )}

//         </div>
//     )
// }
// export default Music

import React, {useContext} from "react"
// import {useEffect} from "react"
// import axios from "axios"
import {QuizContext} from "../context"

function Music() {
    const {
        handleNextBtn, 
        handlePrevBtn,
        score,
        displayScore,
        currentQuestion,
        questionArr,
        answerShuffle,
        handleRightAns, 
        length} = useContext(QuizContext)


    console.log(answerShuffle[currentQuestion]?answerShuffle[currentQuestion].map(item => item.value.replace(/[^A-Za-z]+/g, '')):null)

    return (
        <div>
            {displayScore ? (
                <div>
                    <div className="completed">Quiz Completed!</div>
                    <div className="score-container">
                        <h2>Score: {score}/{length}</h2>
                        <h2 style={{fontSize: "18px", paddingTop:"15px"}}>Want to play again? Feel free to choose another category.</h2>
                    </div>
                </div>
            ):(
            <div className="trivia-container">
                <h1 className="group-titles">Music Category</h1>
                <h2 className="question-number">Question {currentQuestion + 1} of {length}</h2>
                <h3 className="questions">{questionArr[currentQuestion]?questionArr[currentQuestion].question:null}</h3>
                <h3 className="answers">
                    {answerShuffle[currentQuestion]?answerShuffle[currentQuestion].map((item, index) => <button className="answers" onClick={()=>handleRightAns(item, index)}>{item.value}</button>):null}
                </h3>
                <button onClick={handlePrevBtn}>Previous</button>
                <button onClick={handleNextBtn}>Next</button>
                
            </div>
            )}

        </div>
    )
}
export default Music