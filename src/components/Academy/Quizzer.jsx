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
        <section className="container">
            <h1>Quizzer!</h1>
            <table>
                <tr>
                    <th>Quiz Name</th>
                    <th>Subject</th>
                    <th>Score</th>
                    <th>Take</th>
                    <th>View</th>
                </tr>
                {quizzes && quizzes.map((oneQuiz, index) => (
                    <tr>
                        <td>{oneQuiz.title}</td>
                        <td>{oneQuiz.subject}</td>
                        <td>{oneQuiz.score}</td>
                        <td><a href={`/academy/quizzer/${oneQuiz._id}`}><button className="quiz-button">Take Quiz!</button></a></td>
                        <td><a href={`/academy/view-quiz/${oneQuiz._id}`}><button className="quiz-button">View Quiz!</button></a></td>
                    </tr>
                ))}
            </table>
            {/* {quizzes && quizzes.map((oneQuiz, index) => (
                <section key={index}>
                    <a href={`/academy/quizzer/${oneQuiz._id}`}><p>Quiz Name: {oneQuiz.title}</p></a>
                    <p>Quiz Subject: {oneQuiz.subject}</p>
                    <p>Score: {oneQuiz.score}</p>
                    <p>Number of questions: {oneQuiz.questions.length}</p>
                </section>
            ))} */}

            
        </section>
    )
}