import { HiPencilSquare, HiTrash } from "react-icons/hi2";


export default function TodoCard({title,detail,date, onEdit}) {
  return (
    <div className="bg-orange-400 rounded-lg p-4 min-h-44 flex flex-col justify-between">
      <h2 className='font-bold text-2xl'>{title}</h2>
      <p className='mt-2'>{detail}</p>
      <small>{date}</small>
        <div className='flex'>
        <HiPencilSquare className='hover:text-blue-600' onClick={onEdit}/>
        <HiTrash className='hover:text-red-600'  />
      </div>
    </div>
  )
}
