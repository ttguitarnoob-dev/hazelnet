

export default function Hazel(props) {
    var currentHour = new Date().getHours()
    const dailyVerse = props
   
    var prodigy = ""

    if (currentHour < 10) {
        prodigy = "/no-game"
    } else {
        prodigy = "https://sso.prodigygame.com/game/login?rid=daa00d0b-85de-4ec2-ae43-031f7232101d"
    }

    // console.log('progeny', dailyVerse.dailyVerse[0].text)
    return <div className="hazel-page">
        <div className="main-buttons">
            <ul>
                <li><a href="/wiki"><button>Research Things!</button></a></li>
                <li><a href="/poke"><button>Pokedex!</button></a></li>
                <li><a href="/videos"><button>Videos!</button></a></li>
                <li><a href={prodigy}><button>Prodigy!</button></a></li>
                <li><a href="/academy"><button>School!</button></a></li>
            </ul>
        </div>
        <div className="daily-verse">
            {/* <h2>Bible Verse of the Day!</h2> */}
            <iframe src="https://www.bible.com/en-GB/verse-of-the-day"></iframe>
            {/* <p>{dailyVerse.dailyVerse}</p> */}
            {/* <a>
                <h3>{dailyVerse.dailyVerse[0].bookname} {dailyVerse.dailyVerse[0].chapter}:{dailyVerse.dailyVerse[0].verse}</h3>
                <p>{dailyVerse.dailyVerse[0].text}</p>
            </a> */}
        </div>
    </div>
}