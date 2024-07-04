import NoteCard from "./NoteCard";


export default function NoteList({notes}) {
  return (
    <div className="mt-20 grid gap-4 grid-cols-5">
      {notes.map((note, index) =>( 
        <NoteCard key={index} title={note.title} content={note.description} date={note.date} onEdit={()=> {}} onDelete={() => {}}/>
      ))}
      {/* <NoteCard title="New work" content="Lorem ipsum" date="02/07/2567" onEdit={()=> {}} onDelete={() => {}}/> */}
    </div>
  )
}
