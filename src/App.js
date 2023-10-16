
import './App.css';
import React from "react"
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
import SillyGame from './components/SillyGame';
import Quizzer from './components/Academy/Quizzer';
import TakeQuiz from './components/Academy/TakeQuiz';
// import Prodigy from './components/Prodigy';

function App() {

  //App State
  

  //Fetch API

  


  


  return (

    <div>
      <HazelNav />
      <Routes>
        <Route path='/academy/journal/:id' element={<JournalDetails />} />
        <Route path='/academy/journal/' element={<SchoolJournal />} />
        <Route path='/academy/journal/new' element={<NewJournal />} />
        <Route path='/academy' element={<Academy />} />
        <Route path='/' element={<Hazel />} />
        <Route path='/wiki' element={<Wiki />} />
        <Route path='/poke' element={<Poke />} />
        <Route path='/videos' element={<Yt />} />
        <Route path='/no-game' element={<NoGame />} />
        <Route path='/academy/journal/' element={<SchoolJournal />} />
        <Route path='/silly-game' element={<SillyGame />} />
        <Route path='/academy/quizzer' element={<Quizzer />} />
        <Route path='/academy/quizzer/:id' element={<TakeQuiz />} />
      </Routes>
    </div>

  )
}

export default App;
