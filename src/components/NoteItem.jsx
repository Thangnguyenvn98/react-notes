import { Link } from "react-router-dom"

const NoteItem = ({note}) => {
  return (
    <Link to={`/edit-note/${note.id}`} className='bg-teal-500 flex flex-col p-4 gap-4 odd:row-span-4 odd:bg-fuchsia-500 even:col-span-1'>
        <h4 className='text-white'>{note.title.length > 50 ? note.title.substr(0,50)+'...' : note.title}</h4>
        <p className='text-white text-sm '>{note.date}</p>
    </Link>
  )
}
export default NoteItem