
import { HiPencilSquare, HiTrash } from 'react-icons/hi2'

export default function NoteCard() {
  return (
    <div className='bg-green-400 rounded-lg p-4 min-h-44 flex flex-col justify-between'>
        <h2 className='font-bold text-2xl'>Hello This is my first note</h2>
        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit placeat quis repellendus dolore praesentium, tempore nostrum consequuntur, dolorum omnis ipsam vitae eos quibusdam, possimus nobis debitis unde ea rem.</p>
      <div className='flex items-center justify-between mt-2'>
        <small>02/07/2024</small>
        <div className='flex'>
        <HiPencilSquare className='hover:text-blue-600' />
        <HiTrash className='hover:text-red-600'/>
        </div>
      </div>
    </div>
  )
}
