import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function JournalDetails() {

    var [journal, setJournal] = useState({})
    const { id } = useParams()
    console.log('de params', id)

    const journalURL = `https://api.ttguitarnoob.cloud/journals/${id}`

    async function handleFetch() {
        try {
            const URL = journalURL
            const options = {
                method: "GET"
            }
            console.log('fetching at ', URL)
            const response = await fetch(URL, options)
            const results = await response.json()
            console.log('results', results)
            setJournal(results)
        } catch (err) {
            console.log('something went wrong fetching the entry', err)
        }
    }

    //handleFetch function call
    useEffect(() => {
        handleFetch()
    }, [])




    return <div className="page-container">
        <h1>Journal for {journal.date}</h1>
        <a href="/academy/journal"><button>Back to Journal List</button></a>
        <div className="container">
            <div className="details-list">
                <ul>

                    <li>
                        <h2>What was your high and low for the day?</h2>
                        <p>{journal.hilow}</p>
                    </li>
                    <li>
                        <h2>What did you learn today?</h2>
                        <p>{journal.learn}</p>
                    </li>
                    <li>
                        <h2>In what way did you fail today?</h2>
                        <p>{journal.fail}</p>
                    </li>
                    <li>
                        <h2>What did failing teach you?</h2>
                        <p>{journal.failTeach}</p>
                    </li>
                    <li>
                        <h2>How will you improve next time?</h2>
                        <p>{journal.failImprove}</p>
                    </li>
                    <li>
                        <h2>What was your Bible verse of the day and what did it mean to you?</h2>
                        <p>{journal.bible}</p>
                    </li>

                </ul>
            </div>
        </div>
        
    </div>
}