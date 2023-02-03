import { BiArrowBack } from "react-icons/bi"
import { Link, useParams, useNavigate } from "react-router-dom"
import { BsTrash } from "react-icons/bs"
import {useState} from 'react'
import useCreateDate from "../hooks/useCreateDate"


const EditNote = ({notes,setNotes}) => {
  const {id} = useParams()
  const date = useCreateDate()
  const note = notes.find((noteToFind) => noteToFind.id === id)

  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)
  const navigate = useNavigate()

  
  const handleSubmitForm = (e) => {
    e.preventDefault()
    if(title && details) {
      const editNote = {...note, title, details,date}
      const editNotes = notes.map(item=>{if(item.id === id){
        item=editNote
      }
    return item})
    setNotes(editNotes)
   
    }

   navigate('/')
  }
  
  const handleDeleteButton = () => {
    if(window.confirm("Are you sure you want to delete this note?")) {
      console.log(id)
    console.log(notes)
    const newNotes = notes.filter(item => item.id!== id)
    console.log(newNotes)
    setNotes(newNotes)
    navigate('/')
    }
  }


  return (
    
    <section>
    <header className='flex justify-between items-center'>
     <Link to='/' className= 'text-white shadow-sm p-3 bg-gray-500 rounded-xl'><BiArrowBack/></Link>
     <button className='text-white shadow-sm p-3 w-20 bg-teal-500 rounded-lg' onClick={handleSubmitForm}>Save</button>
     <button className='text-white shadow-sm p-3 bg-red-600 rounded-xl'onClick={handleDeleteButton}><BsTrash/></button>
    </header>
    <form className='flex flex-col gap-4 mt-8 'action="">
      <input className='w-100 bg-transparent text-white rounded-md' type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} autoFocus/>
      <textarea className='w-100 bg-transparent text-white rounded-md'rows="28" placeholder="Enter details..." value={details} onChange={(e)=>setDetails(e.target.value)}></textarea>
    </form>
  </section>
  )
}
export default EditNote