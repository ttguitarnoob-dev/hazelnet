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
        <h1>Journal for {new Date(journal.date).toLocaleDateString()}</h1>
        <a href="/academy/journal"><button>Back to Journal List</button></a>
        <div className="container">
            <div className="details-list">
                <ul>

                    <li>
                        <h2>If your mood right now were a type of weather what would it be?</h2>
                        <p>{journal.mood}</p>
                    </li>
                    <li>
                        <h2>If you could have one do-over today, what would you do differently?</h2>
                        <p>{journal.doOver}</p>
                    </li>
                    <li>
                        <h2>What is something that made you smile today?</h2>
                        <p>{journal.smile}</p>
                    </li>
                    <li>
                        <h2>If I had mind reading powers, what would I be able to hear right now?</h2>
                        <p>{journal.telepathy}</p>
                    </li>
                    <li>
                        <h2>Can you tell me about one thing you found interesting today?</h2>
                        <p>{journal.interesting}</p>
                    </li>
                    <li>
                        <h2>How did God show up in your life today?</h2>
                        <p>{journal.bible}</p>
                    </li>
                    <li>
                        <h2>If you were in charge of your school what changes would you make?</h2>
                        <p>{journal.principal}</p>
                    </li>
                    <li>
                        <h2>Can you tell me about your favorite book right now?</h2>
                        <p>{journal.book}</p>
                    </li>
                    <li>
                        <h2>What’s something you’d love to learn more about right now?</h2>
                        <p>{journal.learnMore}</p>
                    </li>
                    

                </ul>
            </div>
        </div>
        
    </div>
}