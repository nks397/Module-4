// Film will render the trivia for this category
import React, { useState } from "react"

import {useEffect} from "react"
import axios from "axios"
function Film() {
    // const [question, setQuestion] = useState("")
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [questionArr, setQuestionArr] = useState([])
    const [incorrectArr, setIncorrectArr] = useState([])
    const [correctAnswer, setCorrectAnswer] = useState([])
    const [clicked, setClicked] = useState(false)
    const [length, setLength] = useState(0)
    const [answerChoices, setAnswerChoices] = useState("")
    const [answerShuffle, setAnswerShuffle] = useState("")
    const [score, setScore] = useState(1)
    const [displayScore, setDisplayScore] = useState(false)

    useEffect(()=>{
        axios.get("https://opentdb.com/api.php?amount=15&category=11&difficulty=medium&type=multiple")
        .then(res => res.data)
        .then(questionsList => {
            const listLength = questionsList.results.length
            setLength(listLength)
            setQuestionArr(questionsList.results)
            setIncorrectArr(questionsList.results.map(item => item.incorrect_answers))
            setCorrectAnswer(questionsList.results.map(item => item.correct_answer))
            setAnswerChoices(questionsList.results.map(item => {
                const incorrectAnswersIndex = item.incorrect_answers.length
                const randomIndex = Math.random() - (incorrectAnswersIndex-0) + 0
                item.incorrect_answers.splice(
                    randomIndex, 0, item.correct_answer
                )
                return {
                    ...item,
                    answers: item.incorrect_answers
                }
            }))
            setAnswerShuffle(questionsList.results.map(item => {
                let unshuffled = item.incorrect_answers
                let shuffled = unshuffled
                .map((a) => ({sort: Math.random(), value:a}))
                .sort((a,b) => a.sort - b.sort)
                .map((a) => a.value)
                console.log(shuffled, "shuffled")
                return shuffled
                
            }))
        })
    },[])
    console.log(answerChoices, "answerChoices")
    console.log(answerShuffle, "answerShuffle")

    const increment =()=>{
        setScore(score + 1)
    }

    function handleRightAns(answer) {
        console.log(correctAnswer[currentQuestion], "line 56")
        if(answer === correctAnswer[currentQuestion]){
            setScore(increment)
            console.log("****answer is correct!****")
            console.log(score, "score increment")
            console.log(correctAnswer, "correctAnswers list")
        }
    }    

    function handleNextBtn() {
        setClicked(false)
        if(currentQuestion < length - 1){
             return setCurrentQuestion(currentQuestion + 1)
        } else {
            setDisplayScore(true)
        } 
    }
    function handlePrevBtn() {
        setClicked(false)
        if(currentQuestion > 0){
             return setCurrentQuestion(currentQuestion - 1)
        }
    }

    console.log(answerChoices, "answChoices")
    console.log("Question Arr: " + {...questionArr[0]})
    console.log("All Answers: " + incorrectArr[currentQuestion])

    return (
        <div>
            

            {displayScore ? (
                <div>
                    <div className="completed">Completed!</div>
                    <div className="score-container">
                        Your Score: {score}/{length}
                        <br/>
                        {/* Percentage: {`${score*100/10} % `} */}
                       
                    </div>
                </div>
            ):(
            <div>
                <h1>Film Category</h1>
                <h2>Question {currentQuestion + 1} of {length}</h2>
                {questionArr[currentQuestion]?questionArr[currentQuestion].question:null}
                <h4>
                {/* answerShuffle is all of the answers shuffled
                    answerShuffle[currentQuestion] is all the answers for that question
                    answerShuffle[currentQuestion].map is returning a button for each item in that array
                */}
                {answerShuffle[currentQuestion]?answerShuffle[currentQuestion].map(item => <button onClick={()=>handleRightAns(item)}>{item}</button>):null}
            </h4>
            <button onClick={handleNextBtn}>Next</button>
            <button onClick={handlePrevBtn}>Previous</button>
            </div>
            )}

        </div>
    )
}
export default Film