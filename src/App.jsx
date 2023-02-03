import {BrowserRouter, Routes, Route} from "react-router-dom"
import Notes from "./pages/Notes"
import CreateNote from "./pages/CreateNote"
import EditNote from "./pages/EditNote"
import { useState, useEffect } from "react"


const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes'))||[])
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  },[notes])

  return (
      <main className='bg-black w-96 h-[42rem] py-8 px-6 relative overflow-y-scroll	scrollbar sm:w-screen sm:h-screen sm:py-8 sm:px-4 lg:w-screen lg:h-screen'>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Notes notes={notes}/>} />
      <Route path="/create-note" element={<CreateNote setNotes={setNotes}/>} />
      <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes}/>} />
      </Routes>
      </BrowserRouter>
      </main>
      
  )
}
export default App