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
            const createdJournal = await fetch(URL, options)
            const parsedJournal = await createdJournal.json()
            navigate("/academy/journal")
            return parsedJournal


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
                            <label htmlFor="hilow">What was your high and low today?.</label>
                                <input
                                    name="hilow"
                                    id="hilow"
                                    type="text"
                                    placeholder="What was your high and low today?"
                                    onChange={handleChange}
                                />
                            </li>
                        </div>
                        <div className="form-item">

                            <li>
                            <label htmlFor="learn">What did you learn at school today?.</label>
                                <textarea
                                    name="learn"
                                    id="learn"
                                    type="textarea"
                                    placeholder="What Did You Learn at School Today?"
                                    onChange={handleChange}
                                />
                            </li>
                        </div>
                        <div className="form-item">
                            <li>
                                <label htmlFor="fail">Name one thing that you failed at today.</label>
                                <input
                                    name="fail"
                                    id="fail"
                                    className="text-area"
                                    type="text"
                                    placeholder="Name one thing that you failed at today."
                                    onChange={handleChange}
                                />
                            </li>
                        </div>
                        <div className="form-item">
                            <li>
                            <label htmlFor="failTeach">What did failing teach you?</label>
                                <input
                                    name="failTeach"
                                    id="failTeach"
                                    type="text"
                                    placeholder="What did failing teach you?."
                                    onChange={handleChange}
                                />
                            </li>
                        </div>
                        <div className="form-item">
                            <li>
                            <label htmlFor="failImprove">How can you improve next time?</label>
                                <input
                                    name="failImprove"
                                    id="failImprove"
                                    type="text"
                                    placeholder="How can you improve next time?"
                                    onChange={handleChange}
                                />
                            </li>
                        </div>
                        <div className="form-item">

                            <li>
                            <label htmlFor="bible">How did God show up in your life today?</label>
                                <textarea
                                    name="bible"
                                    id="bible"
                                    type="textarea"
                                    placeholder="How did God show up in your life today?"
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