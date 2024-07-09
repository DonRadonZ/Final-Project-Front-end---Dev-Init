import NoteCard from "./NoteCard";

interface NoteProp {
  title: string;
  description: string;
  date: string;
}

interface NoteListProps {
  notes: NoteProp[];
  onDelete: (index: number) => void;
}

export default function NoteList({ 
  notes, 
  onDelete 
}: NoteListProps) {
  
  return (
    <div className="mt-20 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
      {notes.map((note: any, index: any) =>( 
        <NoteCard key={index} title={note.title} content={note.description} date={note.date} onEdit={()=> {}} onDelete={() => onDelete(index)}/>
      ))}
    </div>
  )
}
