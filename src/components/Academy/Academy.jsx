export default function Academy() {
    console.log("plzwork")

    return <div className="academy-page">
        <div className="page-content">
            <h2>KittyCottage Academy</h2>
            <div className="main-buttons">
                <ul>
                    <li><a href="/academy/journal"><button>School Journal</button></a></li>
                    <li><a href="/poke"><button>Pokedex!</button></a></li>
                    <li><a href="/videos"><button>Videos!</button></a></li>
                    <li><a href="#"><button>Prodigy!</button></a></li>
                    <li><a href="/academy"><button>School!</button></a></li>
                </ul>
            </div>
        </div>
    </div>
}