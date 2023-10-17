import { useEffect, useState } from "react"
import { handleFetch } from "../utils/fetch"
import { useParams } from "react-router-dom"

export default function ViewQuiz() {

    const [quiz, setQuiz] = useState()
    const { id } = useParams()
    let scoreColor = 2343
    


    async function getData() {
        const endpoint = `quizzes/${id}`
        const options = {
            method: "GET"
        }
        const data = await handleFetch(endpoint, options)
        
        setQuiz(data)
        console.log('should be quizzes', data)

    }

    useEffect(() => {
        getData()
        
    }, [])

    function determineColor(){
        if (quiz.score >= 0 && quiz.score < 30){
            return 1
        } else if (quiz.score >= 30 && quiz.score < 80) {
            return 2
        } else if (quiz.score >= 80) {
            return 3
        }
    }

    return (
        <>
            {quiz &&
                <section className="container">
                    <h1>{quiz.title}</h1>
                    <h2>Subject: {quiz.subject}</h2>
                    <h2>Total Score: <span className={`score-color-${determineColor()}`}>{quiz.score}</span></h2>
                    <div>
                    {quiz.questions && quiz.questions.map((oneQuestion, index) => (

                        <div>
                            <p>Question {index + 1}: {oneQuestion.question}</p>
                            <p>Answered Correctly? {oneQuestion.correct.toString()}</p>
                            <hr></hr>
                        </div>
                        
                    ))}
                    </div>
                    <a href="/academy/quizzer"><button>Back to Quizzes</button></a>
                </section>
            }

        </>
    )
}