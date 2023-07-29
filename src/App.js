
import './App.css';
import React, { useEffect, useState } from "react"
import { Route, Routes } from 'react-router-dom';
import Hazel from './components/Hazel';
import HazelNav from './components/HazelNav';
import Wiki from './components/Wiki';
import Poke from './components/Poke';
import Yt from './components/Yt';
import NoGame from './components/NoGame';
import Academy from './components/Academy/Academy';
import SchoolJournal from './components/Academy/SchoolJournal';
import NewJournal from './components/Academy/NewJournal';
import JournalDetails from './components/Academy/JournalDetails';
// import Prodigy from './components/Prodigy';

function App() {

  //App State
  let [dailyVerse, setDailyVerse] = useState()

  //Fetch API

  async function fetchVerse() {

    try {
      const url = "https://labs.bible.org/api/?passage=random&type=json"
      const options = {
        method: "GET"
      }
      const response = await fetch(url, options)
      const data = await response.json()
      // const data = await response.text()
      console.log('versess', data)
      setDailyVerse(data)
    } catch(err){
      console.log('something broke when fetching a verse', err)
    }

  


}


  //fetch verse function call
  useEffect(() => {
    fetchVerse()
  }, [])



  return (

    <div>
      <HazelNav />
      <Routes>
        <Route path='/academy/journal/:id' element={<JournalDetails />} />
        <Route path='/academy/journal/' element={<SchoolJournal />} />
        <Route path='/academy/journal/new' element={<NewJournal />} />
        <Route path='/academy' element={<Academy />} />
        <Route path='/' element={<Hazel dailyVerse = {dailyVerse} />} />
        <Route path='/wiki' element={<Wiki />} />
        <Route path='/poke' element={<Poke />} />
        <Route path='/videos' element={<Yt />} />
        <Route path='/no-game' element={<NoGame />} />
        <Route path='/academy/journal/' element={<SchoolJournal />} />
      </Routes>
    </div>

  )
}

export default App;
