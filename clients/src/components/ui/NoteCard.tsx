
import moment from 'moment'
import { HiPencilSquare, HiTrash } from 'react-icons/hi2'

// interface NoteCardProp {

// }

export default function NoteCard({
    title, 
    date, 
    content,
    onEdit, 
    onDelete,
    index
}: any) {
  return (
    <div className='bg-green-100 rounded-lg p-4 min-h-44 flex flex-col justify-between shadow dark:bg-green-700 dark:text-white' key={index}>
        <h2 className='font-bold text-2xl'>{title}</h2>
        <p className='mt-2'>{content?.slice(0,60)}</p>
      <div className='flex items-center justify-between mt-2'>
        <small>{moment(date).format("DD MMM YYYY")}</small>
        <div className='flex'>
        <HiPencilSquare className='hover:text-purple-600' onClick={onEdit} />
        <HiTrash className='hover:text-red-600' onClick={onDelete}/>
        </div>
      </div>
    </div>
  )
}
