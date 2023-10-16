import { useEffect, useState } from "react";
import { handleFetch } from "../utils/fetch";
import { useParams } from "react-router-dom";

export default function TakeQuiz() {

    const [quiz, setQuiz] = useState()
    const { id } = useParams()

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




    return (
        <section>
            {quiz && <div>
                <h1>Quizz {quiz.title}</h1>
                <p>Question: {quiz.questions[0].question}</p>
            </div>}
        </section>
    )
}