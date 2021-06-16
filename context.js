import axios from "axios"
import React, { useState , useEffect} from "react" 
const {Provider, Consumer} = React.createContext()


function TriviaProvider({children}){
	// const [showScore, setShowScore] = useState(false);
	// const [score, setScore] = useState(0);
    // const [currentQuestion, setCurrentQuestion] = useState(0);
    // const [triviaData, setTriviaData] = useState([])
    const [index, setIndex] = useState(0)
    const [correct, setCorrect] = useState(0)

   

    // useEffect(()=>{
    //     const triviaResponse = axios.get(`https://opentdb.com/api.php?amount=15&category=${categoryOptions}difficulty=medium&type=multiple`)
    //     // .then(res => console.log(res.data)
    //     // // .then(data => console.log(data))
    //     if(triviaResponse) {
    //         const data = triviaResponse.data.results
    //         if(data.length > 0) {
    //             setTriviaData(data)
    //         }
    //     }
    // },[])

    function nextQuestion() {
        setIndex(prevIndex => prevIndex + 1)
           
    }

    function checkAnswer(){
        setCorrect(prevState => prevState + 1)

        nextQuestion()
    }

	return (
		<QuizContext.Provider value={{
          index,
          correct,
          nextQuestion,
          checkAnswer

        //   categoryOptions: categoryOptions
        }}>
            {children}
        </QuizContext.Provider>
	)
}

export {TriviaProvider, QuizContext}
