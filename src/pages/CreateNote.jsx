import { Link, useNavigate } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import useCreateDate from '../hooks/useCreateDate';


const CreateNote = ({setNotes}) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const date = useCreateDate();
  const navigate = useNavigate();

  

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(title && details){
      const note = {id:uuidv4(),title,details, date}
      setNotes(prevNotes => [note,...prevNotes ]);
    }
    navigate('/')
  
  }


  return (
    <section>
      <header className='flex justify-between items-center'>
       <Link to='/' className= 'text-white shadow-sm p-3 bg-gray-500 rounded-xl'><BiArrowBack/></Link>
       <button className='text-white shadow-sm p-3 w-20 bg-teal-500 rounded-lg' onClick={handleSubmit}>Save</button>
      
      </header>
      <form className='flex flex-col gap-4 mt-8 '>
        <input className='w-100 bg-transparent text-white rounded-md' value={title} type="text" placeholder="Title" autoFocus onChange={(e)=>setTitle(e.target.value)}/>
        <textarea className='w-100 bg-transparent text-white rounded-md'rows="28" value={details} placeholder="Enter details..." onChange={(e)=>setDetails(e.target.value)}></textarea>
      </form>
    </section>
  )
}
export default CreateNote