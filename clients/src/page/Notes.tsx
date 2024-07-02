import NoteList from "../components/ui/NoteList";



export default function Notes() {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-6xl'>Note List</h1>
        
        <a href="" className="bg-white py-3 px-5 rounded-md">New Note</a>
      </div>
    <NoteList/>
    </div>
  )
}
