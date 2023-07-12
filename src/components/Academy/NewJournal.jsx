export default function NewJournal() {

    var initialInput = {}
    const journalURL = "https://api.ttguitarnoob.cloud/journals"


    const handleChange = (e) => {
        //take e.target.name and use it as the key for which initialInput to change
        var edited = e.target.name
        initialInput[edited] = e.target.value
        console.log('omgchanged', initialInput)
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted", initialInput)
        const formBody = Object.keys(initialInput).map(key =>
            encodeURIComponent(key) + '=' +
            encodeURIComponent(initialInput[key])).join('&')

        createItem(formBody)

    }

    const createItem = async (data) => {
        console.log('creating journal entry', data)
        const URL = journalURL
        const options = {
            method: "POST",
            body: data,
            // mode: "cors",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        }
        try {
            const createdJournal = await fetch(URL, options)
            console.log("it's working so far", createdJournal)
            const parsedJournal = await createdJournal.json()
            console.log("what is the data I'm trying to send", parsedJournal)

        } catch (err) {
            console.log('error creating journal', err)
        }
        console.log('Journal created', data)
    }

    console.log('smelljournalnewthing')

    return <div>
        <div>
            <h2>New Learning Journal</h2>
            <div className="journal-form">
                <form>
                    <ul>
                        <div className="form-item">
                            <li>
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
                                <input
                                    name="fail"
                                    id="fail"
                                    type="text"
                                    placeholder="Name one thing that you failed at today."
                                    onChange={handleChange}
                                />
                            </li>
                        </div>
                        <div className="form-item">
                            <li>
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
                                <button onClick={handleSubmit}>Submit</button>
                            </li>
                        </div>
                    </ul>
                </form>
            </div>
            <div>
                <a href="/academy/journal">Back to Learning Journal</a>
            </div>
        </div>
    </div>


}