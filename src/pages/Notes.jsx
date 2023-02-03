import {BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {GrAddCircle} from 'react-icons/gr'
import NoteItem from '../components/NoteItem'
import { useState, useEffect } from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'



const Notes = ({notes}) => {
  const [search,setSearch] = useState(false)
  const [searchValue,setSearchValue] = useState('')
  const [filteredNotes,setFilteredNotes] = useState(notes)

  const handleSearchNotes = () => {
    setFilteredNotes(notes.filter(note => {
      if(note.title.toLowerCase().includes(searchValue.toLowerCase())){
      return note
    }else{
      return null
    }
  
  }))



  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleSearchNotes,[searchValue])

  return (
    <section >
    <header className='flex justify-between items-center pl-5 pr-5 pb-4 sm:fixed sm:top-0 sm:left=0 sm:w-full sm:py-8 sm:px-6'>
    {!search && <h2 className='text-amber-500'>My Notes</h2>}
    {search && <input className ='border-opacity-100 bg-transparent border-2 border-gray-600 w-full pb-2 pt-2 pl-2 mr-4 text-xs text-white'type="text" autoFocus placeholder="Keyword..." value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />}
     <button className='text-white shadow-sm p-3 bg-gray-600 rounded-xl' onClick={()=>setSearch(prevSearchState=>!prevSearchState)} >{search?<AiOutlineCloseCircle/>:<BsSearch/>}</button>
    </header>
    <div className="grid grid-cols-2 gap-4 sm:mt-24 ">
        {filteredNotes.length === 0 &&<p className='text-white absolute left-[8.5rem] top-1/2'>No notes found. </p>}
        {
          filteredNotes.map(note => <NoteItem key={note.id} note={note}/>)
        }
    </div>
   <Link to='/create-note' className='text-white shadow-sm p-3 bg-gray-500 rounded-xl bottom-16 right-28 fixed sm:bottom-[6%] sm:right-8 h-10' >
   <GrAddCircle  />
   </Link>
  </section>
    
  )
}
export default Notes