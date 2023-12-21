import { useNavigate } from "react-router-dom"

export default function NewJournal() {

    var initialInput = {}
    const journalURL = "https://api.ttguitarnoob.cloud/journals"
    const navigate = useNavigate()


    const handleChange = (e) => {
        var edited = e.target.name
        initialInput[edited] = e.target.value
        console.log('omgchanged', initialInput)
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted", initialInput)

        createItem(initialInput)

    }

    const createItem = async (data) => {
        const URL = journalURL
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            // mode: "cors",
            headers: {
                "Content-type": "application/json"
            }
        }
        try {
            console.log('creatign item')
            const createdJournal = await fetch(URL, options)
            console.log('pooooo')
            // const parsedJournal = await createdJournal.json()
            console.log('created?', createdJournal)
            navigate("/academy/journal")
            return createdJournal


        } catch (err) {
            console.log('error creating journal', err)
        }
    }

    console.log('smelljournalnewthing')

    return <div>
        <div className="journal-page">
            <h2>New Learning Journal</h2>
            <div>
                <a href="/academy/journal"><button>Back to Learning Journal</button></a>
            </div>
            <div className="journal-form">
                <form className="input-form">
                    <ul>
                       <div className="form-item">

                            <li>
                                <label htmlFor="date">What date is this journal for?</label>
                                <input
                                    name="date"
                                    id="date"
                                    type="date"
                                    defaultValue={new Date()}
                                    onChange={handleChange}
                                />
                            </li>
                        </div> 
                        <div className="form-item">
                            <li>
                                <label htmlFor="mood">If your mood right now were a type of weather what would it be?</label>
                                <input
                                    name="mood"
                                    id="mood"
                                    type="text"
                                    placeholder="If your mood right now were a type of weather what would it be?"
                                    onChange={handleChange}
                                />
                            </li>
                        </div>
                        
                        <div className="form-item">
                            <li>
                                <label htmlFor="doOver">If you could have one do-over today, what would you do differently? </label>
                                <textarea
                                    name="doOver"
                                    id="doOver"
                                    type="textarea"
                                    placeholder="If you could have one do-over today, what would you do differently?"
                                    onChange={handleChange}
                                />
                            </li>
                        </div>
                        <div className="form-item">
                            <li>
                                <label htmlFor="smile">What is something that made you smile today?</label>
                                <input
                                    name="smile"
                                    id="smile"
                                    className="text-area"
                                    type="text"
                                    placeholder="What is something that made you smile today?"
                                    onChange={handleChange}
                                />
                            </li>
                        </div>
                        <div className="form-item">
                            <li>
                                <label htmlFor="telepathy">If I had mind reading powers, what would I be able to hear right now?</label>
                                <input
                                    name="telepathy"
                                    id="telepathy"
                                    type="text"
                                    placeholder="If I had mind reading powers, what would I be able to hear right now?"
                                    onChange={handleChange}
                                />
                            </li>
                        </div>
                        <div className="form-item">
                            <li>
                                <label htmlFor="interesting">Can you tell me about one thing you found interesting today?</label>
                                <input
                                    name="interesting"
                                    id="interesting"
                                    type="text"
                                    placeholder="Can you tell me about one thing you found interesting today?"
                                    onChange={handleChange}
                                />
                            </li>
                        </div>
                        <div className="form-item">

                            <li>
                                <label htmlFor="bible">How did God show up in your life today?</label>
                                <input
                                    name="bible"
                                    id="bible"
                                    type="text"
                                    placeholder="How did God show up in your life today?"
                                    onChange={handleChange}
                                />
                            </li>
                        </div>
                        <div className="form-item">

                            <li>
                                <label htmlFor="principal">If you were in charge of your school what changes would you make?</label>
                                <input
                                    name="principal"
                                    id="principal"
                                    type="text"
                                    placeholder="If you were in charge of your school what changes would you make?"
                                    onChange={handleChange}
                                />
                            </li>
                        </div>
                        <div className="form-item">

                            <li>
                                <label htmlFor="book">Can you tell me about your favorite book right now ?</label>
                                <input
                                    name="book"
                                    id="book"
                                    type="text"
                                    placeholder="Can you tell me about your favorite book right now ?"
                                    onChange={handleChange}
                                />
                            </li>
                        </div>
                        <div className="form-item">

                            <li>
                                <label htmlFor="learnMore">What’s something you’d love to learn more about right now?</label>
                                <input
                                    name="learnMore"
                                    id="learnMore"
                                    type="text"
                                    placeholder="What’s something you’d love to learn more about right now?"
                                    onChange={handleChange}
                                />
                            </li>
                        </div>
                        <div className="form-item">
                            <li>
                                <button onClick={handleSubmit}>Submit</button>
                            </li>
                        </div>
                    </ul>
                </form>
            </div>

        </div>
    </div>


}