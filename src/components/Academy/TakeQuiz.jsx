import { useEffect, useState } from "react";
import { handleFetch } from "../utils/fetch";
import { useParams } from "react-router-dom";

export default function TakeQuiz() {

    const [quiz, setQuiz] = useState()
    const { id } = useParams()
    const [activeQuestion, setActiveQuestion] = useState(0)
    const choiceLetters = {
        0: "A",
        1: "B",
        2: "C",
        3: "D",
    }

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

    function handleNext() {
        if (activeQuestion < quiz.questions.length - 1) {
            setActiveQuestion((prev) => prev + 1)
        }
    }

    function handleBack() {
        console.log('backclicked')
        if (activeQuestion > 0) {
            setActiveQuestion((prev) => prev - 1)
        }
    }




    return (
        <section className="container">
            {quiz && <div>
                <h1>{quiz.title}</h1>
                <p>Question: {quiz.questions[activeQuestion].question}</p>
                <form>
                    <ol>
                        {quiz.questions[activeQuestion].choices && quiz.questions[activeQuestion].choices.map((oneChoice, index) => (
                            <div key={index}>
                                <input type="radio" name="choices" id="choice1" key={index} value={index}/>
                                <label for="choice1">{choiceLetters[index]}: {oneChoice}</label>

                            </div>
                        ))}
                    </ol>

                </form>
                <button onClick={handleNext}>Next</button>
                <button onClick={handleBack}>Back</button>
            </div>}
        </section>
    )
}