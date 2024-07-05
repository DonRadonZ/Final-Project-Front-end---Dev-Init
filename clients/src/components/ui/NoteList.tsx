import NoteCard from "./NoteCard";


export default function NoteList({ notes, onDelete }) {
  
  return (
    <div className="mt-20 grid gap-4 grid-cols-5">
      {notes.map((note, index) =>( 
        <NoteCard key={index} title={note.title} content={note.description} date={note.date} onEdit={()=> {}} onDelete={() => onDelete(index)}/>
      ))}
    </div>
  )
}
