import { useEffect, useState } from "react";
import { handleFetch } from "../utils/fetch";
import { useParams } from "react-router-dom";

export default function TakeQuiz() {

    const [quiz, setQuiz] = useState()
    const { id } = useParams()
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selected, setSelected] = useState(0)
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

    }

    useEffect(() => {
        getData()
    }, [])

    function handleNext(e) {
        e.preventDefault()

        handleChoice()
        if (activeQuestion < quiz.questions.length - 1) {
            console.log('quiiz', quiz.questions[activeQuestion].choice)

            setActiveQuestion((prev) => prev + 1)

        }
    }

    function handleBack() {
        console.log('backclicked')
        if (activeQuestion > 0) {
            setActiveQuestion((prev) => prev - 1)
        }
    }

    function handleSelect(e) {
        setSelected(e.target.value)
    }

    function handleChoice(){
        const modifiedQuestion = quiz.questions[activeQuestion]

        modifiedQuestion.choice = parseInt(selected)
        if (modifiedQuestion.choice === modifiedQuestion.answer){
            modifiedQuestion.correct = true
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        handleChoice()
        handleScore()
        console.log("submitted", quiz, "score", quiz.score)
    }

    function handleScore() {
        let totalCorrect = 0

        for (let i = 0; i < quiz.questions.length; i++) {
            if (quiz.questions[i].correct) {
                totalCorrect += 1
                
            } else {
                console.log('mrrrrowwwr')
            }
        }

        quiz.score = parseInt((totalCorrect / quiz.questions.length) * 100)
        console.log('finallll', quiz)

    }



    return (
        <section className="container">
            {quiz && <div>
                <h1>{quiz.title}</h1>
                <h2>Question {activeQuestion + 1}/{quiz.questions.length}:</h2>

                <p>{quiz.questions[activeQuestion].question}</p>
                {quiz.questions[activeQuestion].choice >= 0 && <p>Previous Choice: {quiz.questions[activeQuestion].choices[quiz.questions[activeQuestion].choice]}</p> }
                <form onSubmit={handleNext}>
                    <ol>
                        {quiz.questions[activeQuestion].choices && quiz.questions[activeQuestion].choices.map((oneChoice, index) => (
                            <div key={index}>
                                <input type="radio" name="choices" id="choice1" key={index} value={index} onChange={handleSelect} />
                                <label htmlFor="choice1">{choiceLetters[index]}: {oneChoice}</label>

                            </div>
                        ))}
                    </ol>
                    <button>Next</button>
                </form>

                <button onClick={handleBack}>Back</button>
                {activeQuestion === quiz.questions.length - 1 && <button onClick={handleSubmit}>Submit Quiz!</button>}
            </div>}
        </section>
    )
}