
import { useState, useEffect } from "react"



export default function Hazel() {
    var currentHour = new Date().getHours()


    //State
    let [dailyVerse, setDailyVerse] = useState()

    // var prodigy = ""

    // if (currentHour < 10) {
    //     prodigy = "/no-game"
    // } else {
    //     prodigy = "https://sso.prodigygame.com/game/login?rid=daa00d0b-85de-4ec2-ae43-031f7232101d"
    // }

    //Verse Fetch
    async function fetchVerse() {

        try {
            const url = "https://labs.bible.org/api/?passage=votd&type=json"
            const options = {
                method: "GET"
            }
            const response = await fetch(url, options)
            const data = await response.json()
            // const data = await response.text()
            console.log('versess', data)
            setDailyVerse(data)
        } catch (err) {
            console.log('something broke when fetching a verse', err)
        }
    }

    //fetch verse function call
    useEffect(() => {
        fetchVerse()
    }, [])

    console.log('verses', dailyVerse)

    // console.log('progeny', dailyVerse.dailyVerse[0].text)
    return <div className="hazel-page">
        <div className="main-buttons">
            <ul>
                <li><a href="/wiki"><button>StardewPedia!</button></a></li>
                <li><a href="/poke"><button>Pokedex!</button></a></li>
                <li><a href="/videos"><button>Videos!</button></a></li>
                {/* <li><a href={prodigy}><button>Prodigy!</button></a></li> */}
                <li><a href="/academy"><button>School!</button></a></li>
                {/* <li><a href="/silly-game"><button>Silly Game!</button></a></li> */}
            </ul>
        </div>

        <div className="daily-verse">
            {/* <h2>Bible Verse of the Day!</h2> */}
            {/* <iframe src="https://www.bible.com/en-GB/verse-of-the-day"></iframe> */}
            {/* <p>{dailyVerse.dailyVerse}</p> */}
            {/* <a>
                <h3>{dailyVerse.dailyVerse[0].bookname} {dailyVerse.dailyVerse[0].chapter}:{dailyVerse.dailyVerse[0].verse}</h3>
                <p>{dailyVerse.dailyVerse[0].text}</p>
            </a> */}
            <h2>Bible Verse of the Day!</h2>
            <ul>
                {dailyVerse && dailyVerse.map((verse, index) => (
                    <li key={index}>
                        <h3>{verse.bookname} {verse.chapter}:{verse.verse}</h3>
                        <p>{verse.text}</p>
                    </li>
                ))}
            </ul>
        </div>

    </div>
}