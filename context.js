import React, { useState, useEffect } from "react"
import axios from "axios"
const QuizContext = React.createContext()


function TriviaProvider({children}){
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [questionArr, setQuestionArr] = useState([])
    const [incorrectArr, setIncorrectArr] = useState([])
    const [correctAnswer, setCorrectAnswer] = useState([])
    const [length, setLength] = useState(0)
    const [answerChoices, setAnswerChoices] = useState("")
    const [answerShuffle, setAnswerShuffle] = useState("")
    const [score, setScore] = useState(1)
    const [displayScore, setDisplayScore] = useState(false)

    // const {handleNextBtn, handlePrevBtn} = useContext(QuizContext)

    useEffect(()=>{
axios.get("https://opentdb.com/api.php?amount=15&category=11&difficulty=medium&type=multiple")
    // axios.get("https://opentdb.com/api.php?amount=15&category=12&difficulty=medium&type=multiple")
    //     axios.get("https://opentdb.com/api.php?amount=15&category=21&difficulty=medium&type=multiple")
        .then(res => res.data)
        .then(questionsList => {
            const listLength = questionsList.results.length
            console.log(questionsList.results, "results")
            setLength(listLength)
            setQuestionArr(questionsList.results)
            // .replace(/[^A-Za-z]+/g, '')
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
                .map((a)=> {return {value: a, isClicked:false}})
                // .map((a) => a.toString().replace(/[^A-Za-z]+/g, ''))
                // console.log(shuffled, "shuffled")
                return shuffled
                
            }))
            
        })
    },[])

    


    // console.log(answerChoices, "answerChoices")
    // console.log(answerShuffle, "answerShuffle")
        

    
    function handleRightAns(answer, index) {
        // console.log(correctAnswer[currentQuestion], "line 56")
        // console.log(answer, "55")

        if(answer.value === correctAnswer[currentQuestion]){
            if(answer.isClicked === false) {
                let newAnswerShuffle = answerShuffle
                newAnswerShuffle[currentQuestion][index].isClicked = true
                setAnswerShuffle(newAnswerShuffle)
                // console.log(newAnswerShuffle, "newAnswerShuffle")
                setScore(prevScore => prevScore + 1)
                console.log("new score is", score)
            }     
        }
    
            // console.log("****answer is correct!****")
            // console.log(score, "score increment")
            // console.log(correctAnswer, "correctAnswers list")
            
    }

    function handleNextBtn() {
        console.log(currentQuestion, "currentQuestion")
        console.log(length, "length")

        if(currentQuestion < length - 1){
             return setCurrentQuestion(currentQuestion + 1)
        } else {
            setDisplayScore(true)
        } 
    }
    
    function handlePrevBtn() {
        if(currentQuestion > 0){
             return setCurrentQuestion(currentQuestion - 1)
        }
    }



	return (
		<QuizContext.Provider value={{
            handleNextBtn,
            handlePrevBtn,
            score,
            displayScore,
            currentQuestion,
            questionArr,
            answerShuffle,
            handleRightAns,
            length
        }}>
            {children}
        </QuizContext.Provider>
	)
}

export {TriviaProvider, QuizContext}

