import moment from "moment";
import { HiPencilSquare, HiTrash } from "react-icons/hi2";


export default function TodoCard({title,detail,date, onEdit, onDelete, index}: any) {
  return (
    <div className="bg-orange-400 rounded-lg p-4 min-h-44 flex flex-col justify-between" key={index}>
      <div className="flex items-center justify-between">
      <div className="flex">
      <input type="checkbox" className="items-center mr-2" />
      <h2 className='font-bold text-2xl'>{title}</h2>
      </div>
      <div className="flex">
          <HiPencilSquare
            className='hover:text-blue-600'
            onClick={onEdit}
          />
          <HiTrash
            className='hover:text-red-600'
            onClick={onDelete}
          />
        </div>
      </div>
      <p className='mt-2'>{detail}</p>
      
      <div className='flex justify-between'>
      <small>{moment(date).format("DD MMM YYYY")}</small>
      
      </div> 
    </div>
  )
}
