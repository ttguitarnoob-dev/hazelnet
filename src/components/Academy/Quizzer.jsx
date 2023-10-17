import { useEffect, useState } from "react"
import { handleFetch } from "../utils/fetch"

export default function Quizzer(){

    const [quizzes, setQuizzes] = useState()

    async function getData(){
        const endpoint = "quizzes"
        const options = {
            method: "GET"
        }
        const data = await handleFetch(endpoint, options)
        setQuizzes(data)
        console.log('should be quizzes', data)

    }

    useEffect(() => {
        getData()
    }, [])


    return(
        <section>
            <h1>Quizzer!</h1>
            {quizzes && quizzes.map((oneQuiz, index) => (
                <section key={index}>
                    <a href={`/academy/quizzer/${oneQuiz._id}`}><p>Quiz Name: {oneQuiz.title}</p></a>
                    <p>Quiz Subject: {oneQuiz.subject}</p>
                    <p>Score: {oneQuiz.score}</p>
                    <p>Number of questions: {oneQuiz.questions.length}</p>
                </section>
            ))}

            
        </section>
    )
}